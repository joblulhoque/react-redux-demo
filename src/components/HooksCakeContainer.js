import React from 'react';
import {buyCake} from '../redux/cake/cakeAction'
import { useSelector,useDispatch } from 'react-redux';

function HooksCakeContainer() {
    const numOfCakes = useSelector( state => state.numOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
          <h2>Number of cakes: {numOfCakes}</h2> 
          <button onClick = {()=>dispatch(buyCake())}>buy cake</button> 
        </div>
    )
}

export default HooksCakeContainer;
