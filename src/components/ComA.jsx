import React, { createContext } from 'react'
import Contextdata from './contextdata';
const Name = createContext();

const ComA = () => {
  return (
    <>
        <Name.Provider value={"Rutvik"}>
            <Contextdata/>
        </Name.Provider>

    </>
  )
}

export default ComA;
export {Name};