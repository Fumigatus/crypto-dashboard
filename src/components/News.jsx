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
      <Row className='news-row'>
        {newsData.value.map((news) => (
          <Col xs={24} sm={16} lg={6} className='card-container'>
            <Card className='news-card'>
              <div className='card-header-container'>
                <Title level={4}>{news.name}</Title>
                <img className='news-card-img' src={news.image.thumbnail.contentUrl} alt='new-img'></img>
              </div>
              <p className='news-desc'>{news.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default News
