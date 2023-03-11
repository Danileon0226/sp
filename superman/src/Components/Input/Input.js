import React from 'react'

function Input(props) {
    return ( 
        
        <div>

            
            <input
                id={props.id}
                name={props.name}
                onClick={props.myOnClick}
                className={props.class}
                type={props.type}
                onChange={props.change}
                defaultValue={props.defaultValue}
                disabled={props.disabled}>
            </input>


        </div>
        
        );
}

export default Input;