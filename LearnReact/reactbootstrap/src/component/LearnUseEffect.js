import React, { useEffect, useState } from 'react'

export default function LearnUseEffect() {
  const [counter, setCounter] = useState(0)
  const [data, setData] = useState([])



  useEffect(() => {
    fetch('http://localhost:3004/products')
      .then(response => response.json())
      .then(result => {
        setData(result)

      }
      )
  }, [])
  return (
    <div>
      <h1>counter:{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
      {console.log(data)}

      <div className='bg-success text-white'>
        {data.map((i) =>
          <li key={i.id}>{i.id}----{i.pname}---------{i.price}---<span className={JSON.parse(i.instock)?'bg-primary':'bg-danger'}>{JSON.parse(i.instock)?'Instock':'OutofStock'}</span>   </li>
        )}
      </div>
    </div>


  )
}
