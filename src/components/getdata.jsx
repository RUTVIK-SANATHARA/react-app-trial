// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import Crud from "./crud";

// let ApiData = createContext();
// const Getdata = () => {
//   const [state, setstate] = useState([]);


//   async function content() {
//     let res =await axios.get("http://localhost:3003/User");
//     let orgData = await res.data.reverse() ;
//     setstate(orgData);
//   }

//   useEffect(() => {
//    content();
//   }, []);


//   return(
//        <>
//             <ApiData.Provider value={state}>
//                 <Crud/>
//             </ApiData.Provider>
//       </>
//   );
// };

// export default Getdata;
// export {ApiData};

