import React, { Component, PropTypes } from 'react';
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

    this.onChangeSearchTerm = e => this.setState({
      ...this.state,
      searchTerm: e.target.value,
    });

    this.onSubmitSearch = e => {
      // prevents a page refresh
      e.preventDefault();
      const { searchTerm } = this.state;
      searchGiphy(searchTerm)
      .then(
        ({ data }) => this.setState({ giphyList: data, message: undefined })
      )
      .catch(
        (error) => this.setState({ message: error.toString(), giphyList: undefined })
      );
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
            <input name="searchTerm" value={searchTerm} onChange={this.onChangeSearchTerm} />
          </p>
        </form>
        <GiphyListView {...other} />
        <pre>state = {JSON.stringify(this.state, null, ' ')}</pre>
      </div>
    );
  }
}

export default GiphySearchPage;
