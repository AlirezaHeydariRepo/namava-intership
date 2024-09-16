import React, { useState, useEffect } from 'react'
import './style.css'
import InputBox from '../../components/InputBox'
import SearchedBox from '../../components/SearchedBox'
import axios from 'axios'
import FiltersBox from '../../components/FiltersBox'

export default function SearchPage () {
  const [type, setType] = useState('')
  const [input, setInput] = useState('')
  const [data, setData] = useState([])
  const [view, setView] = useState('empty')
  const [totalContent, setTotalContent] = useState('')
  const fetchData = () => {
    useEffect(() => {
      axios.get('https://www.namava.ir/api/v5.0/search/advance?type=series&count=20&page=1&query=%D8%B3%D9%84%D8%A7%D9%85%20')
        .then(response => {
          setTotalContent(response.data.result.result_items[0].groups.Media.total)
          setData(response.data.result.result_items[0].groups.Media.items)
        })
        .catch(error => console.log(error))
    }, [])
  }
  fetchData()
  return (
    <div className="searchPage">
      <div className="inputs">
        <FiltersBox type={type} setType={setType} />
        <InputBox input={input} setInput={setInput}/>
      </div>
      <SearchedBox data={data} totalContent={totalContent} input={input} view={view} setView={setView}/>
    </div>
  )
}
