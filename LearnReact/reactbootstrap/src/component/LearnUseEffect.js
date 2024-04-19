import React, { useEffect, useState } from 'react'
import { useFetch } from '../Hooks/useFetch'
export default function LearnUseEffect() {
  const [counter, setCounter] = useState(0)
  const [url, setUrl] = useState('http://localhost:3005/product')
  let {data,error}=useFetch(url);

  return (
    <div>
      <h1>counter:{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
      {console.log(data)}
      <br />
      <h4>{error}</h4>
      <button className='bg-primary' onClick={() => setUrl('http://localhost:3004/products?instock=true')} >Instock</button>
      <button className='bg-danger'>OutofStock</button>

      <div className='bg-success text-white'>
        {data.map((i) =>
          <li key={i.id}>{i.id}----{i.pname}---------{i.price}---<span className={JSON.parse(i.instock) ? 'bg-primary' : 'bg-danger'}>{JSON.parse(i.instock) ? 'Instock' : 'OutofStock'}</span>   </li>
        )}
      </div>
    </div>


  )
}
