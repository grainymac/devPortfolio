import React from 'react'
import './Skills.sass'
import gsap from './assets/gsap-greensock.svg'
import lightroom from './assets/adobe-lightroom-svgrepo-com.svg'
import inDesign from './assets/adobe-indesign-svgrepo-com.svg'
import planner from './assets/microsoft-planner-2019-present-.svg'
import xd from './assets/adobe-xd-logo-svgrepo-com.svg'
import 'animate.css'

const Skills = () => {
  return (
    <>
      <div className='skills' id='skills'>
        <h2 className='animate__pulse skills-title'>Skills</h2>
        <div className='skills-container'>
          <img className='icon html' data-tooltip='HTML' title='HTML' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt='html icon'/>

          <img className='icon css' title='CSS' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt='css icon'/>

          <img className='icon sass' title='SASS' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt='sass icon'/>

          <img className='icon tailwind' title='Tailwind CSS' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt='tailwind css icon'/>

          <img className='icon mui' title='Material UI' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt='material ui icon'/>

          <img className='icon gsap' title='GreenSock Animation Platform' src={gsap} alt='gsap icon'/>

          <img className='icon js' title='JavaScript' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='javascript icon'/>

          <img className='icon ts' title='TypeScript' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt='typescript icon'/>

          <img className='icon react' title='React.js' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react icon'/>

          <img className='icon next' title='Next.js' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt='next.js icon'/>

          <img className='icon node' title='Node.js' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt='node.js icon'/>
          
          <img className='icon graphql' title='GraphQL' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt='graphql icon'/>

          <img className='icon express' title='Express.js' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt='express icon'/>

          <img className='icon circle' title='CircleCI' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg" alt='circleci icon'/>

          <img className='icon github' title='GitHub' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github icon'/>

          <img className='icon git' title='Git' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt='git icon'/>

          <img className='icon md' title='Markdown' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" alt='markdown icon'/>

          <img className='icon ps' title='Photoshop' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" alt='photoshop icon'/>

          <img className='icon ai' title='Illustrator' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg" alt='illustrator icon'/>

          <img className='icon lightroom' title='Lightroom' src={lightroom} alt='lightroom icon'/>

          <img className='icon indesign' title='InDesign' src={inDesign} alt='indesign icon'/>

          <img className='icon xd' title='Experience Design' src={xd} alt='xd icon'/>
          
          <img className='icon be' title='Behance' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/behance/behance-original.svg" alt='behance icon'/>

          <img className='icon trello' title='Trello' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" alt='trello icon'/>

          <img className='icon planner' title='Microsoft Planner' src={planner} alt='planner icon'/>

          <img className='icon canva' title='Canva' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt='canva icon'/>

          <img className='icon' title='Figma' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='figma icon'/>

          <img className='icon vscode' title='VSCode' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain.svg" alt='vscode icon'/>          

        </div>
      </div>
    </>
  )
}

export default Skills