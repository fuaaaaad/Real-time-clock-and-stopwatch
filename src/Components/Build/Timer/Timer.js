import React from 'react';
import Styles from './Timer.module.css'

const timer = (props) => {
    return(
        <div className = {Styles.Timer}>
           <p> {(props.time.hour) >= 10 ? props.time.hour: '0' + props.time.hour}
            : {(props.time.minute) >= 10 ? props.time.minute: '0' + props.time.minute}
            : {(props.time.second) >= 10 ? props.time.second: '0' + props.time.second}
             : {(props.time.Millisecond) >= 10 ? props.time.Millisecond: '0' + props.time.Millisecond} </p>
        </div>
    );
}

export default timer;