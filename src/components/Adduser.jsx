import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Adduser = () => {
     const navigate =  useNavigate();
    const [item, setItem] = useState({
        name: "",
        username: "",
        email: "",
        website: "",
        phone: ""
    })
    const handler = (e) => {
        let { name, value } = e.target;

        setItem({
                ...item,
                [name]: value
        })
    }

    const submiting = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3003/User",item);
        navigate("/");
   }
    return (
        <>
            <div className="container">
                <h1>Adduser</h1>
                <form onSubmit={submiting}>
                    <div class="mb-3">
                        <label htmlFor="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" name='name' value={item.name} class="form-control" onChange={handler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="exampleInputEmail1" class="form-label">UserName</label>
                        <input type="text" class="form-control" value={item.username} name='username' onChange={handler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" name='email' value={item.email} onChange={handler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="exampleInputEmail1" class="form-label">Website</label>
                        <input type="text" name='website' class="form-control" value={item.website} onChange={handler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="exampleInputPassword1" class="form-label">Phone</label>
                        <input type="number" class="form-control" name='phone' value={item.phone} onChange={handler} id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Adduser