import React from 'react'
import "./cli.scss"
import TerminalModule from 'react-console-emulator'
import MacWindow from './MacWindow'

const Terminal = TerminalModule.default

const commands = {
  about: {
    description: 'About Me',
    fn: () => `
👋 Hi, I'm Chhavi Varshney

Full Stack Developer passionate about building
modern web applications and interactive UIs.

Tech Stack:
• React.js
• JavaScript
• Node.js
• Express.js
• MongoDB
• C++
• Power BI
`
  },

  skills: {
    description: 'View My Skills',
    fn: () => `
💻 TECHNICAL SKILLS

Frontend:
• React.js
• JavaScript
• HTML5
• CSS3
• SCSS

Backend:
• Node.js
• Express.js

Database:
• MongoDB
• MySQL

Tools:
• Git
• GitHub
• Power BI
• VS Code

Languages:
• C++
• JavaScript
`
  },

  projects: {
    description: 'View Featured Projects',
    fn: () => `
🚀 FEATURED PROJECTS

1. Mac OS Portfolio
2. IPL Analytics Dashboard
3. Weather App
4. GitHub Portfolio
5. Task Manager
6. React Dashboard
7. Movie App
8. Portfolio Website
9. Notes App
10. Chat Application

Visit GitHub for complete project list.
`
  },

  education: {
    description: 'Education Information',
    fn: () => `
🎓 EDUCATION

Bachelor of Technology (B.Tech)
Computer Science Engineering

Currently focused on:
• Data Structures & Algorithms
• Full Stack Development
• Data Analytics
`
  },

  experience: {
    description: 'Experience',
    fn: () => `
💼 EXPERIENCE

• React Development
• Full Stack Projects
• Power BI Dashboards
• Problem Solving (DSA)
• Open Source Contributions
`
  },

  github: {
    description: 'Open GitHub Profile',
    fn: () => {
      window.open(
        'https://github.com/chhavi-varshney',
        '_blank'
      )
      return 'Opening GitHub Profile...'
    }
  },

  linkedin: {
    description: 'Open LinkedIn Profile',
    fn: () => {
      window.open(
        'https://www.linkedin.com/in/chhavivarshney/',
        '_blank'
      )
      return 'Opening LinkedIn Profile...'
    }
  },

  contact: {
    description: "Contact Information",
    fn: () => `
📞 CONTACT DETAILS

Name:
Chhavi Varshney

Phone:
+91 7906744899

Email:
varshneychhavi1616@gmail.com

GitHub:
https://github.com/chhavi-varshney

LinkedIn:
https://linkedin.com/in/your-profile

Feel free to reach out!
`,
  },

  resume: {
    description: "Open Resume",
    fn: () => {
      window.open("/chhaviresume.pdf", "_blank");
      return "Opening Resume...";
    },
  },
};

export default function Cli({ windowName, setwindowState }) {
  return (
    <MacWindow windowName={windowName}  setwindowState={setwindowState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={`
╔══════════════════════════════════════╗
║      CHHAVI VARSHNEY PORTFOLIO       ║
╚══════════════════════════════════════╝

Available Commands:

about
skills
projects
education
experience
github
linkedin
contact
resume
`}
          promptLabel="chhavi@portfolio:~$"
          promptLabelStyle={{ color: "lime" }}
          autoFocus
        />
      </div>
    </MacWindow>
  );
}