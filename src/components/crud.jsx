import React, { useState , useEffect } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { ApiData } from './getdata';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';



const Crud = () => {
  // const context = useContext(ApiData);
  const navigate =  useNavigate();
  const [loading,setLoading] = useState(true);
  

   const Delete = async(id) =>{
         await axios.delete(`http://localhost:3003/User/${id}`);
        content();
   }
  
      const [state, setstate] = useState([]);
    
    
      async function content() {
        let res =await axios.get("http://localhost:3003/User");
        let orgData = await res.data.reverse() ;
        setstate(orgData);
        setLoading(false);
      }
    
      useEffect(() => {
       content();
      }, []);
    
  return (
    <>
   
   { loading ? <Loading/>:
      <div className='container my-5'>
     
        <table className="table table-dark table-striped shadow">
          <thead>
            <tr>
              <th scope="col">Sr</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {

            state.map((ele,index) => {
              return (
                <>
                  <tbody key={ele.id}>
                    <tr>
                      <th scope="row">{index+1}</th>
                      <td>{ele.name}</td>
                      <td>{ele.username}</td>
                      <td>{ele.email}</td>
                      <td>{ele.phone}</td>
                      <td>{ele.website}</td>
                      <td>
                       <span className='px-2 fs-4'> <Link to={`/View/${ele.id}`}><i className="fa-solid fa-eye"></i></Link></span>
                       <span className='px-2 fs-4'><Link to={`/Edit/${ele.id}`}><i className="fa-solid fa-pen-to-square"></i></Link></span>
                       <span className='px-2 fs-4'><i className="fa-solid fa-trash-can" onClick={()=>Delete(ele.id)}></i></span>
                      </td>
                    </tr>
                  </tbody>
                </>
              )
            })
          }

        </table>
             {/* <Link to="/Adduser" ><button className="btn btn-primary my-4" >Add User</button> </Link> */}
      </div>  }
    </>
  )
}

export default Crud;