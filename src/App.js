import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
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
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md="12">
              <SearchBar runSearch={this.runSearch.bind(this)} />
            </Col>
          </Row>
          <Row>
            <Col md="8">
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </Col>
            <Col md="4">
              Video List
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
