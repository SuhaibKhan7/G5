import React from 'react'
import {useState,useRef} from 'react'
import './AddTask.css'
import Task from './Task'
export default function AddTask({tasks,setTask}) {
  console.log('AddTask')
// const[newtask,setnewTask]=useState('')

const vref=useRef();

function newTask(event)
{
  console.log(vref.current.value)
}
function delTask()
{
  
}
function addnewTask(event)
{
  event.preventDefault();
  console.log('Addding Task')

const createtask={
  id:Math.floor(Math.random()*100),
  name:vref.current.value,
  completed:false
}

setTask([...tasks,createtask])
}

  return (
    <div className='addTask'>
    <form >
    <label htmlFor="">Task</label>
    <input type="text" name='newtask' id='newtask' onChange={newTask}  ref={vref}/>
    <button className='btn addtask' onClick={addnewTask}>Add Task</button>
    <span className='btn cleartask' onClick={delTask}>Clear</span>
    </form>
        <h1></h1>

    </div>
  )
}
