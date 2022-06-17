import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function PizzaForm({ }) {

  const history = useHistory();
  const dispatch = useDispatch();

  let [custToAdd, setCustToAdd] = useState({ name: '', address: '', city: '', zip: '', type: '' });


  const handleName = (evt) => {
    console.log(evt.target.value);

    setCustToAdd({
      ...custToAdd,
      name: evt.target.value,
    });
  }

  const handleAddress = (evt) => {
    console.log(evt.target.value);

    setCustToAdd({
      ...custToAdd,
      address: evt.target.value,
    });
  }

  const handleCity = (evt) => {
    console.log(evt.target.value);

    setCustToAdd({
      ...custToAdd,
      city: evt.target.value,
    });
  }

  const handleZip = (evt) => {
    console.log(evt.target.value);

    setCustToAdd({
      ...custToAdd,
      zip: evt.target.value,
    });
  }

  const handleType = (evt) => {
    console.log(evt.target.value);

    setCustToAdd({
      ...custToAdd,
      type: evt.target.value,
    });
  }

  const addCustInfo = (evt) => {
    evt.preventDefault();
    // onclick link to checkout page with the props of the cust info
    // send to history of the url where it belongs

    dispatch({
      type: 'ADD_NEW_CUSTOMER',
      payload: custToAdd
    })

    // need to dispatch custToAdd to store, where it is imported by confirmation page
    history.push('/confirmation');

  };


  return (

    <>
      <form onSubmit={(evt) => addCustInfo(evt)}>
        <input
          onChange={handleName}
          type='text'
          placeholder='name'
          value={custToAdd.name}
        />
        <input
          onChange={handleAddress}
          type='text'
          placeholder='address'
          value={custToAdd.address}
        />
        <input
          onChange={handleCity}
          type='text'
          placeholder='city'
          value={custToAdd.city}
        />
        <input
          onChange={handleZip}
          type='text'
          placeholder='zip'
          value={custToAdd.zip}
        />
        <div onChange={handleType}>
          <input type="radio" value="Pickup" name='type' /> Pickup
          <input type="radio" value="Delivery" name='type' /> Delivery
        </div>

        <button type='submit'>Next</button>
      </form>
    </>
  )
}

export default PizzaForm;