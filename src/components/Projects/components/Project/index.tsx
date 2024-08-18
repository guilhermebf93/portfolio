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
  const basePageUrl = 'https://guilhermebf93.github.io/';

  const pt = [
    'Repositório',
    'Projeto Ao Vivo'
  ];

  const en = [
    'Repository',
    'Live Project'
  ]

  return(
    <div className='project'>
      <h2>{formattedName}</h2>
      <p>{description}</p>

      <div className='projectLinks'>
        <a target='_blank' href={url}>{!isEnglish ? pt[0] : en[0]}</a>
        <a target='_blank' href={basePageUrl + name}>{!isEnglish ? pt[1] : en[1]}</a>
      </div>
    </div>
  )
};

export default ProjectInfo;

/* 
<div key={repositorio.name} className='project'>
            <a href={repositorio.html_url} target='_blank'>{repositorio.name}</a>
            <p>{repositorio.description}</p>
          </div>
*/