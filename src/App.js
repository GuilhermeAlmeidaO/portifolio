import './assets/vars.css'
import React, { useState } from 'react';
import './App.css';
import MainLayout from './componentes/mainLayout';
import About from './componentes/about';
import ProjectSkill from './componentes/project_skill';

function App() {
  const [mainLayoutVisible, setMainLayoutVisible] = useState(true);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [sideLateralVisible, setSideLateralVisible] = useState(false);
  const [project_SkillVisible, setProject_SkillVisible] = useState(false)
  
  function abrirSideLateral() {
    setSideLateralVisible(true);
    let div = document.getElementById("cabecalho__menu__sideLateral__opened");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.gap = "10px";
    div.style.transition = "all 0.3s ease";
  }
  
  function closeSideLateral(){
    setSideLateralVisible(false);
    let div = document.getElementById("cabecalho__menu__sideLateral__opened");
    div.style.display = "none";
  }

  function abrirOuFecharSideLateral() {
    if (sideLateralVisible) {
      closeSideLateral();
    } else {
      abrirSideLateral();
    }
  }
  
  function mudarTela(event) {
    const id = event.target.id;
  
    const estadoPorId = {
      'home': { main: true, about: false, project_skill: false },
      'aboutMe': { main: false, about: true, project_skill: false },
      'project_skill': { main: false, about: false, project_skill: true }
    };
  
    const { main, about, project_skill } = estadoPorId[id];
    setMainLayoutVisible(main);
    setAboutVisible(about);
    setProject_SkillVisible(project_skill);
    closeSideLateral()
  }

  return (
    <>
      <header className="cabecalho" id='cabecalho'>
        <nav className="cabecalho__menu">
        <div className='cabecalho__menu__sideLateral'>
            <i className="fa-solid fa-bars" onClick={abrirOuFecharSideLateral}></i>
            <div className='cabecalho__menu__sideLateral__opened' id='cabecalho__menu__sideLateral__opened'>
              <a className="cabecalho__menu__link__sideLateral" id='home' href='#cabecalho' onClick={mudarTela}>
                Home
              </a>
              <a className="cabecalho__menu__link__sideLateral" id='aboutMe' href='#cabecalho' onClick={mudarTela}>
                Sobre mim
              </a>
              <a className="cabecalho__menu__link__sideLateral" id='project_skill' href='#cabecalho' onClick={mudarTela}>
                Projetos e Habilidades
              </a>
            </div>
          </div>
          <div className='cabecalho__menu__links'>
            <a className="cabecalho__menu__link" id='home' href='#cabecalho' onClick={mudarTela}>
              Home
            </a>
            <a className="cabecalho__menu__link" id='aboutMe' href='#cabecalho' onClick={mudarTela}>
              Sobre mim
            </a>
            <a className="cabecalho__menu__link" id='project_skill' href='#cabecalho' onClick={mudarTela}>
              Projetos e Habilidades
            </a>
          </div>
        </nav>
      </header>

      {mainLayoutVisible && <MainLayout />}
      {aboutVisible && <About />}
      {project_SkillVisible && <ProjectSkill />}

      <footer className="rodape">
        <p>Desenvolvido por Guilherme Almeida</p>
      </footer>
    </>
  );
}

export default App;
