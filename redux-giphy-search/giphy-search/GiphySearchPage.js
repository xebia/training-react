import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeSearchTerm, submitSearch } from './giphy-search-actions.js';
import { getTotalGiphyPayloadSize } from './selectors.js';

const GiphyListView = ({
  giphyResponse,
  totalGiphyPayloadSize,
}) => {
  if (giphyResponse.message) {
    return <p>{giphyResponse.message}</p>;
  }

  return (
    <div>
      {totalGiphyPayloadSize && <p>Size {totalGiphyPayloadSize / 1E6}MB</p>}
      {
        giphyResponse.giphyList.map(({
          id,
          images: {
            original: {
              mp4,
            },
          },
        }) => <p key={id}><video src={mp4} autoPlay loop /></p>)
      }
    </div>);
};

GiphyListView.propTypes = {
  giphyResponse: PropTypes.object.isRequired,
  totalGiphyPayloadSize: PropTypes.number,
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

function mapStateToProps(state) {
  const {
    searchTerm,
    giphyResponse,
  } = state;
  return {
    searchTerm,
    giphyResponse,
    totalGiphyPayloadSize: getTotalGiphyPayloadSize(state),
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
