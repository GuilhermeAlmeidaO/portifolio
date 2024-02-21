import '../App.css';
import '../assets/vars.css'
import MinhaImagem from '../assets/img/Imagem.jpg'

function About(){
    return(
        <>
            <main className="apresentacao">
            <section className="apresentacao__conteudo">
                <h1 className="apresentacao__conteudo__titulo">Sobre mim</h1>
                <p className="apresentacao__conteudo__texto">
                Minha jornada na programação começou em 2021, quando eu tinha apenas 11 anos. Comecei a explorar o universo da tecnologia, mergulhando nos fundamentos do desenvolvimento web com HTML, CSS e JavaScript. Essas linguagens abriram as portas para a criação de páginas web dinâmicas e interativas, despertando meu interesse em explorar mais.
                </p>
                <p className="apresentacao__conteudo__texto">
                Logo após, aventurei-me no mundo versátil do Python, expandindo meu conhecimento e habilidades em programação. Aos 11 anos, meu entusiasmo já apontava para o desafio ambicioso de me tornar um programador fullstack, abraçando tanto o desenvolvimento de interfaces quanto o lado mais técnico dos sistemas.
                </p>
                <p className="apresentacao__conteudo__texto">
                Neste estágio inicial da minha jornada, mantenho o foco em aprimorar minhas habilidades, enfrentar desafios complexos e entender as nuances do desenvolvimento fullstack. Animado para contribuir para a comunidade de desenvolvedores, mantenho viva a chama da curiosidade e paixão pelo código. O futuro é promissor, e estou ansioso para continuar aprendendo e crescendo nesse emocionante mundo da programação.
                </p>
            </section>
                <img className="apresentacao__imagem" src={MinhaImagem} alt="Foto da Joana Santos programando"/>
            </main>
        </>
    )
}

export default About