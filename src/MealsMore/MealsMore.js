import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MealsMore = () => {
    const {mealsMoreId} = useParams()
    const history = useHistory()
    const [singleMeal,setSingleMeal] = useState({})
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsMoreId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setSingleMeal(data.meals[0]))
    },[mealsMoreId])
    const handleMealsMore = ()=>{
        history.push(`/resturents`)  
    }
    return (
        <div>
            <h1>Meals-More</h1>
            <h2>IdMeal : {singleMeal?.idMeal}</h2>
            <p>Chiken : {singleMeal.strCategory}</p>
            <p>StrMeal: {singleMeal.strMeal}</p>
            <button onClick={()=>handleMealsMore()}>Home-Page</button>
        </div>
    );
};

export default MealsMore;