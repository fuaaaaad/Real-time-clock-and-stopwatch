import React ,{ Component } from 'react';
import Styles from '../Build.module.css';


class RealTime extends Component {
    constructor() {
        super()
        this.state ={
            time: new Date()
        }
    }

    current = () =>{
        this.setState({
            time: new Date()
        })
    }

    componentWillMount() {
        setInterval(()=>this.current(),1000)
    }


    render(){
        return(<div className = {Styles.Build}
        style = {{alignContent:'center'}}>
            <div className = {Styles.Timer}>
                <p  style = 
                {{color: 'white',
                position: 'absolute',
                left: '50%',
                top: '25%',
                transform: 'translate(-50%, -50%)'
                  }}>Current Time</p>
                <br/>
               <p 
                style = 
                {{color: 'white',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
                  }}>{this.state.time.toLocaleTimeString()}</p>
            </div>
            </div>
        )
    }
}

export default RealTime;