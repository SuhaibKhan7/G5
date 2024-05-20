import React, { useState } from 'react';

export default function Signup() {
    const [formdata, setFormdata] = useState({
        username: '',
        password: '',
        file: null // Initialize file as null
    });

    async function getinfo() {
        const response = await fetch("http://localhost:5000/data");
        console.log(response);
        const data = await response.text();
        console.log(data);
    }

    async function senddata(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', formdata.username);
        formData.append('password', formdata.password);
        formData.append('file', formdata.file);

        const response = await fetch("http://localhost:5000/data", {
            method: 'POST',
            body: formData,
            headers: {
                // Do not set Content-Type header here; it will be set automatically by the browser
            }
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
    }

    async function handlelogin(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/login", {
            method: 'POST',
            body: JSON.stringify({
                username: formdata.username,
                password: formdata.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
    }

    function handleinput(e) {
        const { name, value, files } = e.target;
        if (name === 'file') {
            setFormdata({ ...formdata, file: files[0] });
        } else {
            setFormdata({ ...formdata, [name]: value });
        }
    }

    return (
        <div>
            <form onSubmit={senddata}>
                <input type="text" name='username' onChange={handleinput} />
                <input type="password" name='password' onChange={handleinput} />
                <input type="file" name='file' onChange={handleinput} />
                <button type='submit'>Signup</button>
            </form>
            <br />
            <br />
            <form onSubmit={handlelogin}>
                <input type="text" name='username' onChange={handleinput} />
                <input type="password" name='password' onChange={handleinput} />
                <button type='submit'>Login</button>
            </form>
            <button onClick={getinfo}>Get Info</button>
        </div>
    );
}
