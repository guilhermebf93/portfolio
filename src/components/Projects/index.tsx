import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';
import ProjectInfo from './components/Project';

interface ReposData {
  name: string;
  description: string;
  html_url: string;
};

interface ProjectsProps {
  isEnglish: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isEnglish }) => {
  const [repositorios , setRepositorios] = useState<ReposData[]>([]);

  const pt = ['Projetos'];
  const en = ['Projects'];

  const reposToIgnore = [
    'scm'
  ]

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
      <h1 className='title'>{!isEnglish ? pt[0] : en[0]}</h1>

      {repositorios.map((repositorio) => {    
        if (!reposToIgnore.includes(repositorio.name)) {    
            return(
            <ProjectInfo
                name={repositorio.name}
                url={repositorio.html_url}
                description={repositorio.description}
                isEnglish={isEnglish}
            />
            )
        }
      })}

    </div>
  )
}

export default Projects;