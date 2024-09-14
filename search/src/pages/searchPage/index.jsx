import React from 'react';
import './style.css';
import InputBox from '../../components/InputBox';
import SearchResult from '../../components/SearchedBox';
import FilterBox from '../../components/FilterBox';

export default function SearchPage() {
  return (
    <div className="searchPage">
      <div className="inputs">
        <FilterBox />
        <InputBox />
        </div>
        <SearchResult />
    </div>
  )
}
