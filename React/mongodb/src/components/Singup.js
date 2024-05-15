import React, { useState } from 'react'

export default function Singup() {
    const [formdata, setFormdata] = useState({
        username: ''

    })

    async function getinfo() {
        const response = await fetch("http://localhost:5000/data")
        console.log(response);
        const data = await response.json();
        console.log(data);
    }
    async function senddata(e) {
        try {
            const response = await fetch("http://localhost:5000/data", {
                method: 'POST',
                body: JSON.stringify(formdata),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
            console.log(response);
            const data = await response.json();
            console.log(data);

        }
        catch (error) {
            console.log(error)
        }
    }


    function handleinput(e) {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }


    return (
        <div>

            <form action="">
                <input type="text" name='username' onChange={handleinput} />
                <button onClick={senddata}>save</button>
            </form>




            <button onClick={getinfo}>getinfo</button>
        </div>
    )
}
