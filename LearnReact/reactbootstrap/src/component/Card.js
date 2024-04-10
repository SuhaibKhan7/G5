 import React from 'react'
 
export default function Card({ id, title, des, img }) {
    console.log()
   return (
       <div className='w-25'>
           <div className="card">
               <img src={img} className="card-img-top" alt="..." />
               <div className="card-body">
                   <h5 class="card-title">{title}</h5>
                   <p class="card-text">{des}.</p>
                   <a href="#" class="btn btn-primary">Go somewhere</a>
               </div>
           </div>

       </div>
   )
 }
 