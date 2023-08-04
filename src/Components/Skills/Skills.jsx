import React from 'react'
import './Skills.sass'
import gsap from './assets/gsap-greensock.svg'
import lightroom from './assets/adobe-lightroom-svgrepo-com.svg'
import inDesign from './assets/adobe-indesign-svgrepo-com.svg'
import planner from './assets/microsoft-planner-2019-present-.svg'
import xd from './assets/adobe-xd-logo-svgrepo-com.svg'
import 'animate.css'
import vite from './assets/vite.svg'

const Skills = () => {
  return (
    <>
      <div className='skills' id='skills'>
        <h2 className='animate__pulse skills-title'>Skills</h2>
        <div className='skills-container'>
          <img className='icon html animate__jello' data-tooltip='HTML' title='HTML' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt='html icon'/>

          <img className='icon css animate__jello' title='CSS' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt='css icon'/>

          <img className='icon sass animate__jello' title='SASS' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt='sass icon'/>

          <img className='icon tailwind animate__jello' title='Tailwind CSS' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt='tailwind css icon'/>

          <img className='icon mui animate__jello' title='Material UI' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt='material ui icon'/>

          <img className='icon gsap animate__jello' title='GreenSock Animation Platform' src={gsap} alt='gsap icon'/>

          <img className='icon js animate__jello' title='JavaScript' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='javascript icon'/>

          <img className='icon ts animate__jello' title='TypeScript' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt='typescript icon'/>

          <img className='icon react animate__jello' title='React.js' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react icon'/>
          
          <img className='icon vite animate__jello' title='Vite.js' src={vite} alt='vite.js icon'/>

          <img className='icon next animate__jello' title='Next.js' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt='next.js icon'/>

          <img className='icon node animate__jello' title='Node.js' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt='node.js icon'/>
          
          <img className='icon graphql animate__jello' title='GraphQL' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt='graphql icon'/>

          <img className='icon express animate__jello' title='Express.js' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt='express icon'/>

          <img className='icon firebase animate__jello' title='Firebase' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt='firebase icon'/>

          <img className='icon circle animate__jello' title='CircleCI' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg" alt='circleci icon'/>

          <img className='icon github animate__jello' title='GitHub' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github icon'/>

          <img className='icon git animate__jello' title='Git' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt='git icon'/>

          <img className='icon md animate__jello' title='Markdown' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" alt='markdown icon'/>

          <img className='icon ps animate__jello' title='Photoshop' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" alt='photoshop icon'/>

          <img className='icon ai animate__jello' title='Illustrator' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg" alt='illustrator icon'/>

          <img className='icon lightroom animate__jello' title='Lightroom' src={lightroom} alt='lightroom icon'/>

          <img className='icon indesign animate__jello' title='InDesign' src={inDesign} alt='indesign icon'/>

          <img className='icon xd animate__jello' title='Experience Design' src={xd} alt='xd icon'/>
          
          <img className='icon trello animate__jello' title='Trello' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" alt='trello icon'/>

          <img className='icon planner animate__jello' title='Microsoft Planner' src={planner} alt='planner icon'/>

          <img className='icon canva animate__jello' title='Canva' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt='canva icon'/>

          <img className='icon animate__jello' title='Figma' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='figma icon'/>

        </div>
      </div>
    </>
  )
}

export default Skills