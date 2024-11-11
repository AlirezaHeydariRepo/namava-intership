import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import axios from 'axios'
import EmptyState from '../../components/EmptyState'
import Comments from '../../components/Comments'
import NavBar from '../../components/NavBar'
import InputComment from '../../components/InputComment'
import LoginBox from '../../components/LoginBox'

export default function CommentPage () {
  const [login, setLogin] = useState('isLogout')
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const dataCount = useRef(0)
  const setCookie = () => {
    document.cookie = `${'Login'}=${'isLogin'}`
  }

  const isAuthV2CookieAvailable = () => {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split('=')
      const cookieKey = cookie[0].trim()
      const cookieValue = cookie[1]
      if (cookieKey === 'Login') {
        return setLogin(cookieValue)
      }
    }
  }
  const fetchData = (page) => {
    // 140274 , 1800
    setIsLoading(true)
    axios.get(`https://www.namava.ir/api/v1.0/comments?pi=${page}&ps=10&mediaId=140274`)
      .then(response => {
        setIsLoading(false)
        const dataObj = [...response.data.result]
        dataCount.current = dataObj.length
        setData(prev => [...prev, ...dataObj])
      })
  }

  useEffect(() => {
    setCookie()
    isAuthV2CookieAvailable()
    fetchData(1)
  }, [])
  // data.length = 0
  console.log(data)

  return (
    <div className='commentPage'>
      <NavBar login={login}/>
      {login === 'isLogout' && <div className="titleLogout">نظرات کاربران</div>}
      <div className="content">
        {login === 'isLogin'
          ? <InputComment data={data} setData={setData}/>
          : <LoginBox />
        }
        {data.length
          ? <Comments data={data} fetchData={fetchData} dataCount={dataCount.current} isLoading={isLoading}/>
          : <EmptyState />
        }
      </div>
    </div>
  )
}
