import axios from 'axios';
import React, { useState , useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const navigate =  useNavigate();

    let {id} = useParams();
     
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
        await axios.patch(`http://localhost:3003/User/${id}`,item);
        navigate("/");
   }

   const loadUser = async () =>{
       let res = await axios.get(`http://localhost:3003/User/${id}`);
       let old = await res.data;
       setItem(old)
      
   }

   useEffect(() => {
      loadUser();
   },[])
  return (
    <>
      <div className="container">
                <h1>Edituser</h1>
                <form onSubmit={submiting}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" name='name' value={item.name} className="form-control" onChange={handler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">UserName</label>
                        <input type="text" className="form-control" value={item.username} name='username' onChange={handler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={item.email} onChange={handler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Website</label>
                        <input type="text" name='website' className="form-control" value={item.website} onChange={handler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                        <input type="text" className="form-control" name='phone' value={item.phone} onChange={handler} id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Edit</button>
                </form>
            </div>
    </>
  )
}

export default Edit;