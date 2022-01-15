import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const {idMeal,strMealThumb} = props.meal
  
    const history = useHistory()
    const url = `/meals/${idMeal}`
    const handleMeals = (url)=>{
      history.push(`/meals/${idMeal}`)
    }
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
            <Link to={url}><button>More Information</button></Link>
            <br></br>
            
            <Link to={url}>Meals-More</Link>
            <br></br>
            <button onClick={()=>handleMeals()}>Meals-details</button>
          </Card.Body>
         </Card>
      </Col>
      </div>
    );
};

export default Meal;