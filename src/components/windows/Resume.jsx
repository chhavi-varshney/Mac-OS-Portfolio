import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({windowName,setwindowState}) => {
  return (
    <MacWindow  windowName={windowName}  setwindowState={setwindowState}>
        <div className="resume-window">
            <iframe src="/FrontendResume (1).pdf" frameborder="0"></iframe>
        </div>
    </MacWindow>
  )
}

export default Resume
