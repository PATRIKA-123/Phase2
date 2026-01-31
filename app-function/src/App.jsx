import React from 'react'

const App = () => {

  function inputChanging () {
    console.log('input is ')
  }

  return (
    <div> 
     
     <input onClick={()=> {
      console.log('click karo')
     }} type="text" placeholder='Enter Name'/>
    </div>
  )
}

export default App

