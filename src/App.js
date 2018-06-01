import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import YouTubeSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
const apiKey = 'AIzaSyB7srbWTcZwSArOobujn6uljhdUq0mk7o0';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  runSearch(searchTerm) {
    YouTubeSearch({ key: apiKey, term: searchTerm }, videos => {
      console.log(videos);
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  componentDidMount() {
    this.runSearch("puppies");
  }

  render() {
    // Using lodash library     _.debounce(func, [wait=0], [options={}])
    const debouncedRunSearch = _.debounce(this.runSearch.bind(this), 700)
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md="12">
              <SearchBar runSearch={debouncedRunSearch} />
            </Col>
          </Row>
          <Row>
            <Col md="8">
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </Col>
            <Col md="4">
              <VideoList 
                videos={this.state.videos} 
                videoSelect={ (selectedVideo) => this.setState({ selectedVideo })}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
