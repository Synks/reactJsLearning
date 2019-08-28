import React from 'react';

const person = (props) => {
return (
    <div>
       <p>I am a Person and my name is {props.name} and {props.age} years old..!!</p>
       <p>{props.children}</p>
    </div>
)
};

export default person;