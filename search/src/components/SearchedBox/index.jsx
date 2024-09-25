import React from 'react'
import './style.css'
import EmptyState from './EmptyState'
import NotFound from './NotFound'
import SearchResult from './SearchResult'

export default function SearchedBox (props) {
  const { query, data, page, totalPages, setPage, loading, fethcData, type } = props

  let view = 'empty'
  if (totalPages > 0 && query) {
    view = 'result'
  } else if (!query) {
    view = 'empty'
  } else {
    view = 'not-found'
  }

  return (
    <div className='search-box'>
      { view === 'result' &&
      <SearchResult
        data={data}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        loading={loading}
        fethcData={fethcData}
        query={query}
        type={type} />
      }
      { view === 'empty' && <EmptyState />}
      { view === 'not-found' && <NotFound />}
    </div>
  )
}
