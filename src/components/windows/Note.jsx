import React, { useState } from 'react'
import { useEffect } from 'react'
import Markdown from 'react-markdown'   
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
// import notes from '../../../public/notes.txt'
import "./note.scss"

import MacWindow from './MacWindow'

const Note = ({windowName,setwindowState}) => {
    
    const [markdown,setmarkdown]=useState(null)
    useEffect(()=>{
        fetch('/note1.txt')
        .then(res=>res.text())
        .then(text=>setmarkdown(text))
        
    }

    )
  return (
    <MacWindow  windowName={windowName}  setwindowState={setwindowState}>
        <div className="note-window">
            {markdown?<SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markdown}</SyntaxHighlighter>:<p>Loding...</p>}
        </div>
    </MacWindow>
  )
}

export default Note
