import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import './Reasturents.css'
    
    const Resturents = () => {
        const [searchText,setSearchText] = useState('')
        const [meals,setMeals] = useState([])
        useEffect(()=>{
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
            fetch(url)
            .then(res=>res.json())
            .then(data=>setMeals(data.meals))
        },[searchText])
    const handleToSearchMeals = e =>{
        const searchTextValue = e.target.value
        setSearchText(searchTextValue);
        }
      
    return (
        <div>
            <h1>resturents</h1>
            <input onChange={handleToSearchMeals} type="text" placeholder='Search meals' />
            <br></br>
            <br></br>
           <div className='meals'>
           {
                 meals.map(meal=><Meal meal={meal} key={meal.idMeal}><Row xs={1} md={4} className="g-4">
                 
                 </Row></Meal>)
            }
           </div>

        </div>
    );
};

export default Resturents;

/* */