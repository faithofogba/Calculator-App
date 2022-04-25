import React from 'react'
import AllButtons from './components/AllButtons';
import DisplayScreen from './components/DisplayScreen'

function Calculator() {
    
    

  return (
    <div className='calculator'>
        <DisplayScreen />
        <AllButtons />
    </div>
  )
}

export default Calculator