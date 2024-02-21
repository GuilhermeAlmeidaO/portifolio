import './style.css'
import '../../assets/vars.css'
import cssImage from '../../assets/img/css.png';
import htmlImage from '../../assets/img/html.png';
import javascriptImage from '../../assets/img/javascript.png';
import pythonImage from '../../assets/img/python.png';
import reactImage from '../../assets/img/react.png';

const listaImgCard = [
    { imagem: htmlImage, texto: "HTML5" },
    { imagem: cssImage, texto: "CSS3" },
    { imagem: javascriptImage, texto: "JavaScript" },
    { imagem: reactImage, texto: "React" },
    { imagem: pythonImage, texto: "Pyathon" },
];

function Skill(){
    return(
        <>
            <main className='habilidades'>
                <h1 className='habilidades__titulo'>Habilidades</h1>
                <div className='habilidades__skill__card'>
                    {listaImgCard.map((item, index) => (
                        <div key={index} className='card'>
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