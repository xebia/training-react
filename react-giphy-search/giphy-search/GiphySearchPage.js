import React, { Component, PropTypes } from 'react';
// import { searchGiphy } from './giphy-search-service.js';

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
  render() {
    return (
      <div>
        <form>
          <p>
            Search:
            <input name="searchTerm" />
          </p>
        </form>
        <GiphyListView message="To be implemented" />
        <pre>state = {JSON.stringify(this.state, null, ' ')}</pre>
      </div>
    );
  }
}

export default GiphySearchPage;
