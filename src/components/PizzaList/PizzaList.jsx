import React from 'react';
import { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';
import axios from 'axios';

function PizzaList () {
    const dispatch =  useDispatch();
    useEffect(()=> {
        getPizzas();
    }, [])

    const history = useHistory();

    const sendToForm = () => {
        history.push('/form')
    }

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

        <button className='pizzaNextBtn' onClick={sendToForm}>Next</button>
        </div>
       
    )
}
export default PizzaList;