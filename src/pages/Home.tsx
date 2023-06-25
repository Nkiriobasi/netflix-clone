import React from 'react'
import requests from '../Requests'
import Main from '../components/Main/Main'
import Row from '../components/Row/Row'

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID='1' title='UpComing' fetchURL={requests.requestUpcoming} />
      <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
      <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
      <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} />
    </>
  )
}

export default Home