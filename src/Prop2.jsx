import React from 'react'

function Prop2(props) {
  return (
    <>
        <div className='d-flex flex-wrap'>

        {props.arr.map((e)=>{
          
            return (
                <>
                <div className='container w-25 py-5'>
                <p>{e.id}</p>
                <h1>{e.title.slice(0,10)}</h1>
                <h1>{e.price}</h1>
                <img src={e.image} style={{width: "200px", height: "200px" }}></img><br/>
                <button>Buy Me</button>
                <hr/>
                </div>
                </>
            )
        })}
        </div>
    </>
  )
}

export default Prop2