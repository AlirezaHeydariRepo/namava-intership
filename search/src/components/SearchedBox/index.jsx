import React from 'react'
import './style.css'
import EmptyState from './Result/EmptyState'
import NotFound from './Result/NotFound'
import SearchResult from './Result/SearchResult'

export default function SearchedBox (props) {
  const { totalCount = 0, query, data } = props
  let view = 'empty'
  if (totalCount > 0) {
    view = 'result'
  } else if (!query) {
    view = 'empty'
  } else {
    view = 'not-found'
  }
  return (
    <div className='search-box'>
      { view === 'result' && <SearchResult data={data}/>}
      { view === 'empty' && <EmptyState />}
      { view === 'not-found' && <NotFound />}
    </div>
  )
}
