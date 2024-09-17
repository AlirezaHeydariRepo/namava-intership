import React, { useState, useEffect } from 'react'
import './style.css'
import InputBox from '../../components/InputBox'
import SearchedBox from '../../components/SearchedBox'
import axios from 'axios'
import FiltersBox from '../../components/FiltersBox'

export default function SearchPage () {
  const [type, setType] = useState('')
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    if (!query) {
      setData([])
      return
    }
    axios.get(`https://www.namava.ir/api/v5.0/search/advance?type=${type}&count=20&page=1&query=${query}`)
      .then(response => {
        setData(response?.data?.result?.result_items[0]?.groups?.Media?.items)
      })
      .catch(error => console.log(error))
  }, [type, query])

  return (
    <div className="searchPage">
      <div className="inputs">
        <FiltersBox
          type={type}
          setType={setType}
        />
        <InputBox
          query={query}
          setQuery={setQuery}
        />
      </div>
      <SearchedBox
        data={data}
        totalCount={data?.length}
        query={query}
      />
    </div>
  )
}
