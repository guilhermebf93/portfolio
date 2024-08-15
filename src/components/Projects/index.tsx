import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';

interface ReposData {
  name: string;
  description: string;
  html_url: string;
};

interface ProjectsProps {
  language: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const [repositorios , setRepositorios] = useState<ReposData[]>([]);

  const pt = ['Projetos'];
  const en = ['Projects'];

  useEffect(() => {
    async function getRepos() {
      try {
        const response = await api.get('users/guilhermebf93/repos');

        const data: ReposData[] = response.data;
        
        setRepositorios(data);          
      
      } catch(error) {
        console.log(error);
      }

           
    };

    getRepos();
  }, []);
  
  return(
    <div className='projects'>
      <h1 className='title'>{!language ? pt[0] : en[0]}</h1>

      {repositorios.map((repositorio) => {        
        return(
          <div key={repositorio.name} className='project'>
            <a href={repositorio.html_url} target='_blank'>{repositorio.name}</a>
            <p>{repositorio.description}</p>
          </div>
        )
      })}

    </div>
  )
}

export default Projects;