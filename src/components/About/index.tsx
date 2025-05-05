import React from 'react';
import './styles.css';

interface AboutProps {
  isEnglish: boolean;
}

const About: React.FC<AboutProps> = ({ isEnglish }) => {

  const pt = [
    'Sobre',
    'Natural de Santos, iniciei minha jornada no desenvolvimento de software em 2023, buscando uma mudança de carreira. Autodidata em HTML, CSS e JavaScript, desenvolvi projetos pessoais para consolidar meus conhecimentos. Atualmente curso Análise e Desenvolvimento de Sistemas na FATEC Baixada Santista, com previsão de conclusão em julho de 2026. Embora ainda não possua experiência profissional formal, sou um entusiasta da área e busco ativamente oportunidades para aplicar meus conhecimentos e contribuir para projetos inovadores.',
    'Certificações',
    'Contato'
  ]

  const en = [
    'About',
    'I\'m a Santos native who started coding in 2023 as a career change. I\'m self-taught in HTML, CSS, and JavaScript, and I\'ve built a bunch of personal projects to practice my skills. I\'m currently studying Systems Analysis and Development at FATEC Baixada Santista, and I\'m set to graduate in July 2026. I\'m eager to join a team and start building creative and innovative projects!',
    'Certificates',
    'Contact me'
  ]

  return(
    <div className='about'>

      <div className='aboutText'>
        <h1>{!isEnglish ? pt[0] : en[0]}</h1>

        <p>
          {!isEnglish ? pt[1] : en[1]}
        </p>
      </div>

      <div className='aboutCert'>
        <h1>{!isEnglish ? pt[2] : en[2]}</h1>

        <ul>
          <span className='certTitle'>Responsive Web Design</span><p>freeCodeCamp.</p>
        </ul>
        <ul>
          <span className='certTitle'>Javascript Algorithms and Data Structure</span><p>freeCodeCamp</p>
        </ul>
        <ul>
          <span className='certTitle'>NextJS do zero ao avançado na pratica 2024</span><p>Udemy</p>
        </ul>
        <ul>
          <span className='certTitle'>SQL and PostgreSQL: The Complete Developer's Guide</span><p>Udemy</p>
        </ul>
      </div>
    </div>
  )
}

export default About;
