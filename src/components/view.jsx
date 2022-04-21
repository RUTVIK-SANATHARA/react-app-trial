import axios from 'axios';
import React,{useState , useEffect} from 'react'
import { useParams } from 'react-router-dom';

const View = () => {
    let {id}=useParams();
   
    const [item, setItem] = useState({
        name: "",
        username: "",
        email: "",
        website: "",
        phone: ""
    })
    useEffect(() => {
       const see=async()=>{
            let view = await axios.get(`http://localhost:3003/User/${id}`);
            setItem(view.data);
          
       }
       see();
    }, [])
  return (
    <>
    <div className="container">
        <p>{item.name}</p>
        <p>{item.username}</p>
        <p>{item.phone}</p>
        <p>{item.email}</p>
        <p>{item.website}</p>
    </div>
    </>
  )
}

export default View;