import React, { useState, useEffect, useRef } from 'react'
import './style.css'
import InputBox from '../../components/InputBox'
import SearchedBox from '../../components/SearchedBox'
import axios from 'axios'
import FiltersBox from '../../components/FiltersBox'
import { useSearchParams } from 'react-router-dom'

export default function SearchPage () {
  const [data, setData] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('query') || '')
  const [type, setType] = useState(searchParams.get('type') || '')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const totalPages = useRef(0)
  const changeParams = () => {
    const allFilters = { query, type }
    const filtersWithValue = {}
    for (const filter in allFilters) {
      if (allFilters[filter]) {
        filtersWithValue[filter] = allFilters[filter]
      }
    }
    setSearchParams(filtersWithValue)
  }

  const fethcData = (currType, currQuery, currPage) => {
    setLoading(true)
    // console.log('query', currQuery)

    if (currQuery) {
      axios.get(`https://www.namava.ir/api/v5.0/search/advance?type=${currType}&count=20&page=${currPage}&query=${currQuery}`)
        .then(response => {
          setLoading(false)
          const { data = {} } = response // Destructure with default values
          const { result = {} } = data
          const resultItems = result.result_items || [] // Handle potential missing result_items

          // Check if resultItems is an array before accessing elements
          if (!Array.isArray(resultItems)) {
            console.error('Unexpected data format in resultItems. Not an array.')
            // Handle the error (e.g., display an error message or set an error state)
            return // Exit the function if data format is unexpected
          }

          const resultItem = resultItems[0] || {} // Get the first result item (handle potential absence)
          const groups = resultItem.groups || {} // Handle potential missing groups
          const Media = groups.Media || {} // Handle potential missing Media
          const { items = [], total = 0 } = Media // Destructure with default values

          totalPages.current = (total / 20) === parseInt(total / 20) ? (total / 20) : parseInt((total / 20) + 1)
          // console.log(`total page ${totalPages.current}`)

          if (currPage > 1) {
            setData(prev => [...prev, ...items])
          } else {
            setData(items)
          }
        })
        .catch(error => console.log(error))
    }
  }

  useEffect(() => {
    changeParams()
    if (!query) {
      setData([])
    }
    fethcData(type, query, 1)
  }, [type, query])

  return (
    <div className="searchPage">
      <div className="inputs">
        <FiltersBox
          type={type}
          setSearchParams={setSearchParams}
          setType={setType}
        />
        <InputBox
          query={query}
          setQuery={setQuery}
          setSearchParams={setSearchParams}
        />
      </div>
      <SearchedBox
        data={data}
        query={query}
        page={page}
        totalPages={totalPages.current}
        setPage={setPage}
        loading={loading}
        fethcData={fethcData}
        type={type}
      />
    </div>
  )
}
