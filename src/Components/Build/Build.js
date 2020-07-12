import React from 'react';
import Timer from './Timer/Timer';
import Styles from './Build.module.css';

const build = (props) => {
    let button = null;
    if(props.status){
        button = (
            <button 
            className = {Styles.Pause}
            onClick = {props.stopwatch}>Pause</button>
            )
        }
    else{
        button = (
            <button 
            className = {Styles.Play}
            onClick = {props.stopwatch}>Start</button>
        )
        }
    return(
        <div className = {Styles.Build}>
        <Timer 
            time = {props.time}
        /> 
        <br/>
        {button}
        <button 
        onClick = {props.reset}
        className = {Styles.Reset}>Reset</button>
        </div>
    );

}


export default build;