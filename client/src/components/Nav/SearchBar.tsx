import React from 'react'
import * as Styled from '../styles/NavStyles/SearchBar.styled'

function SearchBar () {
  return (
    <>
      <Styled.SearchBar type="search" />
      <a href="">
        <span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M21.0004 20.9999L16.6504 16.6499" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </span>
      </a>
    </>
  )
}

export default SearchBar
