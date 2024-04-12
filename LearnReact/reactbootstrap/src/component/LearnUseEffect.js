import React, { useEffect, useState } from 'react'

export default function LearnUseEffect() {
    const[counter,setCounter]=useState(0)
       console.log("Enter◀︎")

        useEffect( ()=>{

        console.log("Mount"+counter)

        return ()=>{
            console.log("unmount"+counter)
        }

        },[counter])

  return (
    <div>
    <h1>counter:{counter}</h1>
    <button onClick={()=>setCounter(counter+1)}>Inc</button>

    </div>


  )
}
