import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Meal from "./Meal";


const Restaurant = () => {

     const[inputs,setinputs] = useState('');
    const[meals,setmeals] = useState([]);
    useEffect( ()=>{
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s= ${inputs} `
        fetch(url)
        .then(res=>res.json())
        .then(data=>setmeals(data.meals))
        console.log(meals)
    },[inputs])





     const searchtext= e =>{
        setinputs(e.target.value);
        console.log(inputs)
     }
    return (
        <div>
            <h1 className='sm:text-5xl pt-5 font-bold text-center '> search your favorite food </h1>
            <hr className="sm:w-1/3 mx-auto mt-2 " />
                 
                 <div className=" flex justify-center mt-10">
                    <div className="relative">
                    <input onChange={searchtext} id="user" className=" sm:border-b focus:outline-none py-1 focus:border-purple-600 focus:border-b-2 transition-colors sm:w-80 peer" type="text" />
                    <label  className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4" htmlFor="user">search here</label>
                    </div>
                            <h3 className="pl-9">result found: {meals.length} </h3>
                            
                </div>
                <div className="sm:grid grid-cols-3 mt-12 justify-items-center m-2">
                    {
                        meals.map(meal=><Meal
                        meal = {meal}  ></Meal>)
                    }

                </div>
            
        </div>
    );
};

export default Restaurant;