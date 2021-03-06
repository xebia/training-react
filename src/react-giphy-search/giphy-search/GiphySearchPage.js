import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { searchGiphy } from './giphy-search-service.js';

const GiphyListView = ({
  message,
  giphyList,
}) => {
  if (message) {
    return <p>{message}</p>;
  }

  return (<div>{
    giphyList.map(({
      id,
      images: {
        original: {
          mp4,
        },
      },
    }) => <p key={id}><video src={mp4} autoPlay loop /></p>)
  }</div>);
};

GiphyListView.propTypes = {
  message: PropTypes.string,
  giphyList: PropTypes.array,
};

class GiphySearchPage extends Component {
  constructor() {
    super();

    this.state = {
      message: 'Use the search bar to find giphy\'s',
      searchTerm: '',
    };

    this.onSubmitSearch = e => {
      // prevents a page refresh
      e.preventDefault();
    };
  }

  render() {
    const {
     searchTerm,
     ...other,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitSearch}>
          <p>
            Search:
            <input name="searchTerm" />
          </p>
        </form>
        <GiphyListView {...other} />
        <pre>state = {JSON.stringify(this.state, null, ' ')}</pre>
      </div>
    );
  }
}

export default GiphySearchPage;
