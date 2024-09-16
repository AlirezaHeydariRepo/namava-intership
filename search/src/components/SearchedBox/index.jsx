import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import EmptyState from './Result/EmptyState'
import NotFound from './Result/NotFound'
import SearchResult from './Result/SearchResult'

SearchedBox.propTypes = {
  data: PropTypes.any,
  totalContent: PropTypes.any,
  input: PropTypes.any,
  setView: PropTypes.any,
  view: PropTypes.any
}
export default function SearchedBox (props) {
  if (props.totalContent > 0) {
    props.setView('result')
  } else if (props.totalContent === 0 && props.input === '') {
    props.setView('empty')
  } else {
    props.setView('not-found')
  }
  return (
    <div className='search-box'>
      { props.view === 'result' && <SearchResult data={props.data}/>}
      { props.view === 'empty' && <EmptyState />}
      { props.view === 'not-found' && <NotFound />}
    </div>
  )
}
