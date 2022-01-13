import React from 'react';
import Badge from 'react-bootstrap/Badge'
import { Card, Col } from 'react-bootstrap';

const Meal = (props) => {
    const {idMeal,strMealThumb} = props.meal
    return (

      <div className='single-Meals'>
       <Col>
         <Card border="primary" style={{ width: '20rem' }} >
          <Card.Img variant="top" src={strMealThumb} />
          <Card.Body>
            <Card.Title>Card title {idMeal}</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
         </Card>
      </Col>
      </div>
    );
};

export default Meal;