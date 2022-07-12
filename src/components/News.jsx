import { Card, Col, Row, Typography } from 'antd'
import React from 'react'
import { useGetCryptoNewsQuery } from '../services/newsApi'

const { Title, Text } = Typography

const News = () => {
  const newsCategory = 'Cryptocurrency'
  const count = 5
  const { data: newsData, isFetching } = useGetCryptoNewsQuery({ newsCategory, count })
  if (isFetching) return 'loading....'
  console.log(newsData)
  return (
    <>
      <Row>
        {newsData.value.map((news) => (
          <Col xs={24} sm={16} lg={6} className='card-container'>
            <Card className='news-card'>
              <Title level={4}>{news.name}</Title>
              <img className='news-card-image' src={news.image.thumbnail.contentUrl} alt='new-img'></img>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default News
