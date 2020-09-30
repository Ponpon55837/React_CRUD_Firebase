import React from 'react'
import { jumbotronStyle } from '../../style/style'
import weather from '../../style/weather.css'
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap'

const WeatherProfile = () => {

  return (
    <Jumbotron style={jumbotronStyle} className='m-5'>
      <h1 className='mb-5'>This is Weather Part</h1>
      <Container className='my-4'>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                weather content
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default WeatherProfile
