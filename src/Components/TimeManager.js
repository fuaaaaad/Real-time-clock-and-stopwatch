import React, {useState} from 'react';
import RealTime from './Build/RealTime/RealTime';
import StopWatch from './Build/StopWatch/StopWatch';
import Styles from './TimeManager.module.css';

const TimeManager = (props) => {
        const [toggler,setToggler] = useState({
            realTime: true
        })
        let main = null,mainName = null;
        const switcher = () => {
            setToggler({
                realTime: !toggler.realTime
            })
        }


        if(toggler.realTime){
            main = (
                <RealTime className = {Styles.real}/>
            )
            mainName = "Stop Watch"
            }
            else{
            main = (
                <StopWatch className = {Styles.Stop}/>
            )
            mainName = "Current Time"
        }
        
        return (
            
        <div className={(toggler.realTime) ? Styles.real : Styles.stop}>
            <button 
            className = {(toggler.realTime) ? Styles.RealTime : Styles.StopWatch} 
            onClick = {switcher}
            >Switch to {mainName}</button>
            <br />
            {main}
            </div>
        );
    }

    


export default TimeManager;

    /*updateIncreseTimeHandler = () => {
        let oldTime = {...this.state.Time};
        let minute = oldTime.minute;
        let second = oldTime.second;
        let updatedSecond = second;
        let updatedMinute = minute;
        if(second > 50){
            updatedMinute = minute + 1;
            updatedSecond = 0;  
        }
        else {
            updatedSecond = second + 5;
            
        }

        this.setState({
            Time: {
                second: updatedSecond,
                minute: updatedMinute
            }
        });
    }

    updateDecreseTimeHandler = () => {
        let oldTime = {...this.state.Time};
        let minute = oldTime.minute;
        let second = oldTime.second;
        let updatedSecond = second;
        let updatedMinute = minute;
        if(minute === 0 && second === 0){
            alert("Cannot be decremented");
            return ;
        }
        if(minute >= 1 && second === 0){
            updatedMinute = minute - 1;
            updatedSecond = 55;  
        }
        else {
            updatedSecond = second - 5;

        }

        this.setState({
            Time: {
                second: updatedSecond,
                minute: updatedMinute
            }
        });
    }

    resetHandler = () => {
        let oldTime = {...this.state.Time}
        oldTime.minute = 0;
        oldTime.second = 0;
        this.setState({
            Time: {
                second: oldTime.second,
                minute: oldTime.minute
               }
        })
    }*/

  