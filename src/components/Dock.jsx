import React from 'react'
import './dock.scss'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Dock = ({windowState,setwindowState}) => {
  return (
    <div>
      <footer className='dock'>
        <div
        onClick={()=>{setwindowState(state=>({...state,github:true}))}}
         className='icon github'><img src="\doc-icons\github.svg"></img></div>
        <div
        onClick={()=>{setwindowState(state=>({...state,note:true}))}}

         className='icon note'><img src="\doc-icons\note.svg"></img></div>
        <div 
        onClick={()=>{setwindowState(state=>({...state,resume:true}))}}
        className='icon pdf'><img src="\doc-icons\pdf.svg"></img></div>
        <div
        onClick={()=>{window.open("https://calendar.google.com/","_blank")}} 
        className='icon calender'><img src="\doc-icons\calender.svg"></img></div>
        <div 
          onClick={()=>{setwindowState(state=>({...state,spotify:true}))}}
           className='icon spotify'><img src="\doc-icons\spotify.svg"></img></div>
        <div 
        onClick={() => window.open("mailto:varshneychhavi1616@gmail.com")}        className='icon mail'><img src="\doc-icons\mail.svg"></img></div>
        <div 
        onClick={()=>{window.open("https://www.linkedin.com/in/chhavivarshney/")}}
        className='icon link'><img src="\doc-icons\link.svg"></img></div>
        <div 
        onClick={()=>{setwindowState(state=>({...state,cli:true}))}}
        className='icon cli'><img src="\doc-icons\cli.svg"></img></div>
        
      </footer>
    </div>
  )
}

export default Dock
