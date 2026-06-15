import { useState } from 'react'
import Dock from './components/Dock'
import './app.scss'
import Nav from './components/Nav'
import MacWindow from './components/windows/MacWindow'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import { use } from 'react'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { resume } from 'react-dom/server'

function App() {
  const[windowState,setwindowState]=useState({
    github:false,
    note:false,
    resume:false,
    spotify:false,
    cli:false
  })

  return (
    <main>
      <Nav/>
      <Dock windowState={windowState} setwindowState={setwindowState}/>
      {windowState.github && <Github windowName="github"  setwindowState={setwindowState}/>}
      {windowState.note &&<Note windowName="note"  setwindowState={setwindowState}/>}
      {windowState.resume &&<Resume windowName="resume"  setwindowState={setwindowState}/>}
      {windowState.spotify && <Spotify windowName="spotify" setwindowState={setwindowState}/>}
      {windowState.cli && <Cli windowName="cli"  setwindowState={setwindowState}/>}
    </main>
  )
}

export default App
