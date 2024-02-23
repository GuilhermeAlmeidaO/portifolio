import { useState } from 'react';
import './style.css'
import '../../assets/vars.css'
import cssImage from '../../assets/img/css.png';
import htmlImage from '../../assets/img/html.png';
import javascriptImage from '../../assets/img/javascript.png';
import pythonImage from '../../assets/img/python.png';
import reactImage from '../../assets/img/react.png';

function Skill() {

    const listaImgCard = [
        { imagem: htmlImage, texto: "HTML5", },
        { imagem: cssImage, texto: "CSS3", },
        { imagem: javascriptImage, texto: "JavaScript", },
        { imagem: reactImage, texto: "React", },
        { imagem: pythonImage, texto: "Python", },
    ];

    const listaCurso = [
        { linguagem: "HTML5", texto: "Curso feito pelo o Curso em Video feito em 2022" },
        { linguagem: "CSS3", texto: "Curso feito pelo o Curso em Video feito em 2022" },
        { linguagem: "JavaScript", texto: "Curso feito pelo o Curso em Video feito em 2022" },
        { linguagem: "React", texto: "Curso feito pela a Alura feito em 2024" },
        { linguagem: "Python", texto: "Curso feito pelo Curso em Video feito entre 2023 e 2024" },
    ]

    const [popUpSkill, setPopUpSkill] = useState(false)
    const [selectedSkill, setSelectedSkill] = useState(null);

    const ButtonClosePopUpSkill = () => {
        return (
            <button onClick={() => { setPopUpSkill(false) }} className='popUpSkillDetails__button'>
                <i className="fa-solid fa-xmark"></i>
            </button>
        )
    }

    const popUpSkillDetails = (id) => {
        setSelectedSkill(listaImgCard[id]);
        setPopUpSkill(true);
    }

    return (
        <>
            <main className='habilidades'>
                <h1 className='habilidades__titulo'>Habilidades</h1>
                {
                    popUpSkill && selectedSkill && (
                        <>
                            <div className='popUpSkillDetailsProtectScreen'></div>
                            <div className='popUpSkillDetails'>
                                <ButtonClosePopUpSkill />
                                <h2>{selectedSkill.texto}</h2>
                                <p>{listaCurso[listaImgCard.findIndex(item => item.texto === selectedSkill.texto)].texto}</p>
                                <img alt='Logo da Linguagem de Programação' src={listaImgCard[listaImgCard.findIndex(item => item.texto === selectedSkill.texto)].imagem}/>
                            </div>
                        </>
                    )
                }
                <div className='habilidades__skill__card'>
                    {listaImgCard.map((item, index) => (
                        <div key={index} className='card' id={index} onClick={() => { popUpSkillDetails(index) }}>
                            <span>{item.texto}</span>
                            <img src={item.imagem} alt={`Habilidade ${index + 1}`} />
                            <div className='habilidades__skill__card__lineStyle'></div>
                        </div>
                    ))}
                </div>
            </main>

        </>
    )
}

export default Skill
