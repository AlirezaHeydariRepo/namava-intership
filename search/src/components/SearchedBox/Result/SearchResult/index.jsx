import React from 'react'
import Card from '../../../ui/Card'
import PropTypes from 'prop-types'
import './style.css'
SearchResult.propTypes = {
  data: PropTypes.any
}
export default function SearchResult (props) {
  return (
    <div className='search-result'>
      {props.data.map((e) => {
        return <Card key={e.id} id={e.id} name={e.name} image_url={e.image_url} url={e.url}/>
      })}
    </div>
  )
}
