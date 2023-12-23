import React from 'react'
import { useState } from 'react';


export default function Navbar(props) {
  const [searchValue, setsearchValue] = useState('')
  const handleInputChange = (e) => {
    setsearchValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    searchValue==='' ? alert("Please enter the topic you want to search"): props.searchTopic(searchValue); 
   // Call the searchTopic function with the search value
  };

  return (
    <div> <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light" style={{ minWidth: "1000px" }}>
      <a href='/' class="navbar-brand"  aria-current="page">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a href="/business" className='nav-link' aria-current="page">Bussiness</a>
          </li>
          <li class="nav-item">
            <a href="/science" className='nav-link' aria-current="page" >Science</a>
          </li>
          <li class="nav-item">
            <a href="/entertainment" className='nav-link' aria-current="page" >Entertainment</a>
          </li>
          <li class="nav-item" >
            <a href="/health" className='nav-link' aria-current="page">Health</a>
          </li>
          <li class="nav-item" >
            <a href="/sports" className='nav-link' aria-current="page">Sports</a>
          </li>
          <li class="nav-item" >
            <a href="/technology" className='nav-link' aria-current="page">Technology</a>
          </li>
        </ul>
        <form id='form' class="form-inline my-2 my-lg-0" onSubmit={handleSearch
        }>
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={searchValue}
            onChange={handleInputChange} />
          <a href="#"><button class="btn btn-outline-dark my-2 my-sm-0" type="submit">search</button></a>
        </form>
      </div>
    </nav></div>
  )
}







