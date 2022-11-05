import { buildTimeValue } from '@testing-library/user-event/dist/utils'
import { Card, Col, Row, Typography } from 'antd'
import React from 'react'
import { useGetCryptoNewsQuery } from '../services/newsApi'

const { Title } = Typography

const News = () => {
  const newsCategory = 'Cryptocurrency'
  const count = 6
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
                <a href={news.url} target='_blank'>
                  <Title level={4}>{news.name}</Title>
                </a>
                <a className='news-card-img-link'>
                  <img className='news-card-img' src={news.image ? news.image.thumbnail.contentUrl : 'https://cdn-icons-png.flaticon.com/512/3822/3822762.png'} alt='new-img'></img>
                </a>
              </div>
              <p className='news-desc'>{news.description}</p>
              <p className='news-date'><img className='provider-img' src={news.provider[0].image?news.provider[0].image.thumbnail.contentUrl:'https://cdn-icons-png.flaticon.com/512/3822/3822762.png'}/> - {news.provider[0].name}  ⚫ {news.datePublished.substring(0, 16).replace('T', ' ')}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default News
