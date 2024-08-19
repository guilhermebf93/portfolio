import React from 'react';
import './styles.css';

interface ProjectProps {
  name: string;
  url: string;
  description: string;
  isEnglish: boolean;
}

const ProjectInfo: React.FC<ProjectProps> = ({ name, url, description, isEnglish }) => {
  const formattedName = name.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  let pageUrl = `https://guilhermebf93.github.io/${name}`;
  const customDomains = {devcontrole: 'https://devcontrole-zeta.vercel.app/'}

  const pt = [
    'Repositório',
    'Projeto Ao Vivo'
  ];

  const en = [
    'Repository',
    'Live Project'
  ]

  if(customDomains.hasOwnProperty(name)) {
    pageUrl = customDomains[name as keyof typeof customDomains]
  }

  return(
    <div className='project'>
      <h2>{formattedName}</h2>
      <p>{description}</p>

      <div className='projectLinks'>
        <a target='_blank' href={url}>{!isEnglish ? pt[0] : en[0]}</a>
        <a target='_blank' href={pageUrl}>{!isEnglish ? pt[1] : en[1]}</a>
      </div>
    </div>
  )
};

export default ProjectInfo;