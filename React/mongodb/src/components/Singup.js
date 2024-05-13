import React from 'react'
import { useState } from 'react'
export default function Singup() {
    const [formdata, setFormdata] = useState({
        username: '',

    })
    function handlesubmit(e) {
        e.preventDefault();
        try{
            const response = fetch('http://localhost:4001/singup',{
            method:'POST',
            body:JSON.stringify(formdata),
            headers:{
                'Content-Type':'application/json'
            }
            })
            console.log(response);
            const data=response.json();
            console.log(data);


        }
catch{

}





    }



    function inputchange(e) {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form action="" onSubmit={handlesubmit}>
                <input type="text" name='username' onChange={inputchange} />
                <button type='submit'>save</button>


            </form>


        </div>
    )
}
