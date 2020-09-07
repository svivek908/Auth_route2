import React from 'react';
import './App.css';

function tweet({name,message}){
    return(
        <div className="tweet">
            <h1>{name}</h1>
            <p>{message}</p>
            <h3>Number of likes </h3>
        </div>
    );
}

export default tweet;