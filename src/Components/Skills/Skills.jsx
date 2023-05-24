import React from 'react'
import './Skills.sass'
import gsap from './assets/gsap-greensock.svg'
import lightroom from './assets/adobe-lightroom-svgrepo-com.svg'
import inDesign from './assets/adobe-indesign-svgrepo-com.svg'
import planner from './assets/microsoft-planner-2019-present-.svg'

const Skills = () => {
  return (
    <>
      <div id='skills'>
        <h2 className='skills-title'>Skills</h2>
        <div className='skills-container'>
          <img className='icon html' title='html' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt='html icon'/>

          <img className='icon css' title='css' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt='css icon'/>

          <img className='icon sass' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt='sass icon'/>

          <img className='icon tailwind' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt='tailwind css icon'/>

          <img className='icon mui' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt='material ui icon'/>

          <img className='icon gsap' src={gsap} alt='gsap icon'/>

          <img className='icon js' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='javascript icon'/>

          <img className='icon ts' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt='typescript icon'/>

          <img className='icon react' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react icon'/>

          <img className='icon next' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt='next.js icon'/>

          <img className='icon node' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt='node.js icon'/>

          <img className='icon vue' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" alt='vue.js icon'/>
          
          <img className='icon graphql' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt='graphql icon'/>

          <img className='icon express' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt='express icon'/>

          <img className='icon circle' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg" alt='circleci icon'/>

          <img className='icon github' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github icon'/>

          <img className='icon git' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt='git icon'/>

          <img className='icon md' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" alt='markdown icon'/>

          <img className='icon ps' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" alt='photoshop icon'/>

          <img className='icon ai' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg" alt='illustrator icon'/>

          <img className='icon lightroom' src={lightroom} alt='lightroom icon'/>

          <img className='icon indesign' src={inDesign} alt='indesign icon'/>
          
          <img className='icon be' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/behance/behance-original.svg" alt='behance icon'/>

          <img className='icon trello' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" alt='trello icon'/>

          <img className='icon planner' src={planner} alt='planner icon'/>

          <img className='icon canva' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt='canva icon'/>

          <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='figma icon'/>

          <img className='icon vscode' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain.svg" alt='vscode icon'/>

          <img className='icon azure' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt='azure icon'/>
          

        </div>
      </div>
    </>
  )
}

export default Skills