import React, { useContext } from 'react'
import { Data } from "./axios";

const Axios2 = () => {

  let text = useContext(Data);

  return (
    <>
      {
        text.map((ele) => {
          return (
            <>
              {/* {console.log(ele)} */}
              <p>{ele.title}</p>
            </>
          )
        })
      }
    </>
  )
}

export default Axios2;