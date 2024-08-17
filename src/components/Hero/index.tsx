import React from 'react';
import './styles.css';
import profilePicture from '../../assets/profile.jpeg';
import { FaGithubSquare, FaLinkedin, FaHtml5, FaCss3, FaJsSquare, FaReact } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiNextjsFill } from 'react-icons/ri';

interface HeroProps {
  language: boolean;
}

const Hero: React.FC<HeroProps> = ({ language }) => {

  const pt = [
    'Bem vindo',
    'Olá! Sou Guilherme Ferreira, um desenvolvedor em constante aprendizado. Aqui você encontrará meus projetos e experiências.',
    'Minhas redes',
    'Habilidades relevantes'
  ];
  const en = [
    'Welcome',
    'Hello! I\'m Guilherme Ferreira, a developer always learning. Here you will find my projects and experiences.',
    'Social Networks',
    'Relevant skills'
  ];

  return(
    <div className='hero'>
      
      <div className='welcome'>

        <h1>{!language ? pt[0] : en[0]}</h1>

        <img src={profilePicture} alt='Profile picture' className='picture' />

      </div>

      <div className='heroContent'>

        <p>{!language ? pt[1] : en[1]}</p>

        <div className='socialLinks'>
          <h2>{!language ? pt[2] : en[2]}</h2>

          <div className='links'>
            <a href='https://github.com/guilhermebf93' target='_blank'>
              <FaGithubSquare className='socialLink' />
            </a>
            <a href='https://www.linkedin.com/in/guiferreira93/' target='_blank'>
              <FaLinkedin className='socialLink' />
            </a>
            <a href='mailto:guilherme.bf93013@gmail.com' target='_blank'>
              <MdEmail className='socialLink' />
            </a>
          </div>
        </div>

        <div className='relSkills'>
          <h2>{!language ? pt[3] : en[3]}</h2>

          <div className='skills'>
            <FaHtml5 />
            <FaCss3 />
            <FaJsSquare />
            <FaReact />
            <RiNextjsFill />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero;

/*
    <div className='welcome'>
        <h1>Bem vindo</h1>
      </div>

      <div className='landingContent'>

        <div className='texts'>
          <p>Olá! Meu nome é Guilherme Ferreira, e sou aspirante a desenvolvedor baseado em Santos, Brasil.</p>
        </div>

        <div className='links'>
          <a href='https://github.com/guilhermebf93' target='_blank'>
            <FaGithubSquare className='socialLink' />
          </a>
          <a href='https://www.linkedin.com/in/guiferreira93/' target='_blank'>
            <FaLinkedin className='socialLink' />
          </a>
        </div>
      </div>
*/