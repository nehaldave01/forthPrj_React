import React from 'react'
import Prop2 from './Prop2'
import arr from './data1.json'

function Prop1() {
  return (
    <div>
        <Prop2 arr = {arr}/>
    </div>
  )
}

export default Prop1