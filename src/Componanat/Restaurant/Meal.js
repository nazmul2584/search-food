import React from 'react';

const Meal = (props) => {

    const {strMealThumb,strMeal,strIngredient6}=props.meal
    return (
        <div  className='div border-2 border-green-300 rounded overflow-hidden mt-10'>
           <div className='rounded  shadow-lg overflow-x-hidden '>
           <img className='h-60 w-full max-w-sm' src= {strMealThumb} alt="" />  
           </div>
           <div className='mt-4 flex space-x-1 justify-center  text-lg'>
           <h4> {strMeal} </h4>
            <p> {strIngredient6} </p>
           </div>
        </div>
    );
};

export default Meal;