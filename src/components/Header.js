import React from 'react'

export default function Header({ handleToggleDarkMode}) {
  return (
    <div className='header'>
        <h1>My Notes</h1>
        <button onClick={()=>handleToggleDarkMode((previousDarkmode)=>!previousDarkmode)} className='save'>Toggle Mode</button>
      
    </div>
  )
}
