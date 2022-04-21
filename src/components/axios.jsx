import React,{useState , useEffect, createContext} from 'react'
import axios from "axios";
import Axios2 from './axios2';


let Data = createContext();
const Axios = (props) => {
   
  const [first, setfirst] = useState([]);
  // const [btn, setbtn] = useState("")
   
  

   async  function getData (){
    let obj = await axios.get("https://jsonplaceholder.typicode.com/posts");
    let org = await obj.data;
    setfirst(org);
}
  useEffect(() => {
   
      getData();
  },[]);
  return (
    <>
        {/* <button >Get Data</button> */}
      
      <Data.Provider value={first}>
        {/* {props.children} */}
        <Axios2/>
      </Data.Provider>      

        {/* <button onClick={btnclick}></button> */}
    </>

  )
}

export default Axios
export {Data} ;