import React from 'react';
import { connect } from 'react-redux';
import buyIcecream from '../redux/iceCream/iceCreamAction';


function IceCreamContainer(props) {
    return (
        <div>
          <h2> Number of icecream: {props.numOfIceCreams}</h2> 
          <button onClick={props.buyIcecream}>buy icecream</button> 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.icecream.numOfIceCreams
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyIcecream:()=>dispatch(buyIcecream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(IceCreamContainer);
