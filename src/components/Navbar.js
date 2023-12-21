import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '' // Initialize the search value in the component state
    };
  }

  handleInputChange = (e) => {
    this.setState({ searchValue: e.target.value }); // Update the search value in the component state
  };

  handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    const { searchValue } = this.state; // Retrieve the search value from component state
    this.props.searchTopic(searchValue); // Call the searchTopic function with the search value
  };

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ minWidth: "1000px" }}>
          <a href='/' class="navbar-brand">Home</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a href="/business" className='nav-link'>Bussiness<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a href="/science" className='nav-link' >Science<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a href="/entertainment" className='nav-link' >Entertainment</a>
              </li>
              <li class="nav-item active" >
                <a href="/health" className='nav-link'>Health</a>
              </li>
              <li class="nav-item active" >
                <a href="/sports" className='nav-link'>Sports</a>
              </li>
              <li class="nav-item active" >
                <a href="/technology" className='nav-link'>Technology</a>
              </li>
            </ul>
            <form id='form' class="form-inline my-2 my-lg-0" onSubmit={this.handleSearch
            }>
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.state.searchValue}
                onChange={this.handleInputChange} />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar