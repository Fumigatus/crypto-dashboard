import { Row, Col, Typography, Card, Statistic, Layout } from 'antd'
import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import News from './News'
import '../App.css'
import millify from 'millify'

const { Title, Text } = Typography



const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalMarketStats = data?.data?.stats;

  if (isFetching) return 'Loading...'
  return (
    <>
      <Layout className='home-layout'>
        <Title level={1}>Global Market Stats</Title>
        <Row gutter={32} className='home-stats'>
          <Col span={12}><Statistic title='Total Crypto Currencies' value={globalMarketStats.totalCoins}></Statistic></Col>
          <Col span={12}><Statistic title='Total Markets' value={millify(globalMarketStats.totalMarkets)}></Statistic></Col>
          <Col span={12}><Statistic title='Total Market Cap' value={millify(globalMarketStats.totalMarketCap)}></Statistic></Col>
          <Col span={12}><Statistic title='Total 24H Volume' value={millify(globalMarketStats.total24hVolume)}></Statistic></Col>
          <Col span={12}><Statistic title='Total Exchanges' value={globalMarketStats.totalExchanges}></Statistic></Col>
        </Row>
          <Title level={1}>News</Title>
          <News></News>
      </Layout>
    </>
  )
}

export default Home
