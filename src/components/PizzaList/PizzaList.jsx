import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';

function PizzaList () {
    const dispatch =  useDispatch();
    useEffect(()=> {
        getPizzas();
    }, [])

    const getPizzas = () => {
        axios({
            method: 'GET',
            url: '/api/pizza'
        }).then((res)=> {
            console.log('in GET pizza')
            dispatch ({
                type: 'GET_PIZZA_LIST',
                payload: res.data
            })
        }).catch((error)=>{
            console.log('error in GET pizzas', error)
        })
    };

    const pizzaList = useSelector ((store)=> store.pizzaList)
    return (
       
        <div>
            {pizzaList.map((pizza) => 
            <PizzaItem key={pizza.id} pizza={pizza}
        /> 
        )} 
        </div>
       
    )
}
export default PizzaList;