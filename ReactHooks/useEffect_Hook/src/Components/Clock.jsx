import { useState, useEffect } from 'react';
import classes from './Clock.module.css';

const Clock=()=>{
    const [time, setTime] = useState(new Date())
  
  useEffect(()=>{
    console.log("🙂Use Effect started, it is setting up timer")
    const timer = setInterval(()=>{
      setTime(new Date())
    },1000);
    return()=>{console.log("🧹Cleanup function in action")
      clearInterval(timer)}
    },[])

  return(
    <div className={classes.clock}>
            <h1 >Time is {time.toLocaleTimeString()}</h1>
            <h2 >Exploring useEffect Hook</h2>
    </div>)

}
export default Clock;