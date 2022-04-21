import './App.css';
import React, { Suspense } from 'react'
// import ComA from './components/ComA';
// import Axios2 from "./components/axios2";
// import Axios from "./components/axios";
// import Contextdata from "./components/contextdata";
// import GetData from "./components/getdata"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Adduser from './components/Adduser';
import Error from "./components/error";
import Edit from './components/Edit';
import Crud from './components/crud';
import View from './components/view';
const LazyCom = React.lazy(()=>import("./components/crud"))
function App() {
  return (
  <>
       {/* <Axios2/>  */}
       {/* <Axios/>  */}
       <BrowserRouter>
         <Routes>
           <Route path='/' element={  <Suspense fallback={<div>Loading...</div>}>
         <LazyCom/>
       </Suspense>}></Route>
           <Route path='/Adduser' element={ <Adduser/>}></Route>
           <Route path='*' element={ <Error/>}></Route>
           <Route path='/Edit/:id' element={ <Edit/>}></Route>
           <Route path='/View/:id' element={ <View/>}></Route>

         </Routes>
       </BrowserRouter>
     
       {/* <GetData/> */}
      {/* <ComA></ComA> */}
  </>
  );
}

export default App;
