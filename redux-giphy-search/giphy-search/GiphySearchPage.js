import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeSearchTerm, submitSearch } from './giphy-search-actions.js';

const GiphyListView = ({
  giphyResponse,
}) => {
  if (giphyResponse.message) {
    return <p>{giphyResponse.message}</p>;
  }

  return (<div>{
    giphyResponse.giphyList.map(({
      id,
      images: {
        looping: {
          mp4,
        },
      },
    }) => <p key={id}><video src={mp4} autoPlay loop /></p>)
  }</div>);
};

GiphyListView.propTypes = {
  giphyResponse: PropTypes.object.isRequired,
};

const GiphySearchPage = ({
  searchTerm,
  onChangeSearchTerm,
  onSubmitSearch,
  ...other,
}) => (
  <div>
    <form onSubmit={onSubmitSearch}>
      <p>Search: <input name="searchTerm" value={searchTerm} onChange={onChangeSearchTerm} /></p>
    </form>
    <GiphyListView {...other} />
  </div>
);

GiphySearchPage.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChangeSearchTerm: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
};

function mapStateToProps({
  searchTerm,
  giphyResponse,
}) {
  return {
    searchTerm,
    giphyResponse,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onChangeSearchTerm: e => changeSearchTerm(e.target.value),
    onSubmitSearch: e => {
      // prevents a page refresh
      e.preventDefault();
      return submitSearch();
    },
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GiphySearchPage);
