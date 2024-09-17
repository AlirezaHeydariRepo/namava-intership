import React from 'react'
import Card from '../../../ui/Card'
import './style.css'

export default function SearchResult (props) {
  const { data } = props
  return (
    <div className='search-result'>
      {data.map((e) => {
        return <Card key={e.id} name={e.name} imageUrl={e.image_url} url={e.url}/>
      })}
    </div>
  )
}
