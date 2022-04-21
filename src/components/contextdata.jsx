import React ,{useContext} from 'react'
import { Name } from './ComA';

const Contextdata = () => {
  const context = useContext(Name)
  return (
    <>
        <p>Contextdata  {context}</p>
    </>
  )
}

export default Contextdata