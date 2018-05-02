import React, { Component } from 'react'
import { Form, FormGroup, Input } from 'reactstrap';

class SearchBar extends Component {
  state = {
    searchTerm: ""
  }

  handleInputChange(searchTerm) {
    this.setState({ searchTerm: searchTerm });
    // run runSearch method passed in as a prop
    this.props.runSearch(searchTerm);
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Input
            type="text"
            placeholder="Type in search term"
            value={this.state.searchTerm}
            onChange={(e) => this.handleInputChange(e.target.value)}
          />  
        </FormGroup>
      </Form>
    )
  }
}

export default SearchBar;
