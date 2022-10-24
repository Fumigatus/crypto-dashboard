import { Row, Col, Typography, Card } from 'antd'
import React from 'react'
import News from './News'

const { Title, Text } = Typography



const Home = () => {


  return (
    <>
      <Title level={1}>News</Title>
      <News></News>
    </>
  )
}

export default Home
