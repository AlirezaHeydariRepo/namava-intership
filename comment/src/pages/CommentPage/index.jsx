import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'
import EmptyState from '../../components/EmptyState'
import Comments from '../../components/Comments'
import NavBar from '../../components/NavBar'
import InputComment from '../../components/InputComment'
import LoginBox from '../../components/LoginBox'
import Cookies from 'js-cookie'
export default function CommentPage () {
  const [login, setLogin] = useState('isLogout')
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [fetchMore, setFetchMore] = useState(false)

  const setCookie = () => {
    Cookies.set('Login', 'isLogin')
  }

  const isAuthV2CookieAvailable = () => {
    const currCookie = Cookies.get('Login')
    setLogin(currCookie)
  }
  console.log(Cookies.get('Login'), login)

  const fetchData = (page) => {
    // 140274 , 1800
    setIsLoading(true)
    axios.get(`https://www.namava.ir/api/v1.0/comments?pi=${page}&ps=10&mediaId=140274`)
      .then(response => {
        setIsLoading(false)
        const dataObj = [...response.data.result]
        setFetchMore(response.data.result.length === 10)
        setData(prev => [...prev, ...dataObj])
      }).catch(
        console.log('failed')
      )
  }

  useEffect(() => {
    setCookie()
    isAuthV2CookieAvailable()
    fetchData(1)
  }, [])
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
          ? <Comments data={data} fetchData={fetchData} fetchMore={fetchMore} isLoading={isLoading}/>
          : <EmptyState />
        }
      </div>
    </div>
  )
}
