import React from 'react'



export default function About(props){

  return (
    <div className='container my-3'style={{color:props.mode === 'light'?'black':'grey'}}>
      <p  > A text utilisation app where a user can optimize text the way in which they want to use the paragraph.Removing particular pattern and apply different simple concept to optimize the text. </p>
    </div>
  )
}
