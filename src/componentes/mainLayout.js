import '../assets/vars.css'
import '../App.css';
import MinhaImagem from '../assets/img/Imagem.jpg'

function Idade() {
    const dataDoUsuario = new Date();
    const antes15Agosto = new Date(dataDoUsuario.getFullYear(), 7, 15); // 7 representa agosto (0-indexed)
    const isAntesDe15DeAgosto = dataDoUsuario < antes15Agosto;

    let idade = dataDoUsuario.getFullYear() - 2009
    if (isAntesDe15DeAgosto){
        idade = idade - 1
    }
    return idade

}


function MainLayout(){
    return(
        <>
        
        <main className="apresentacao">
            <section className="apresentacao__conteudo">
                <h1 className="apresentacao__conteudo__titulo">
                    Potencialize seu projeto digital<strong className="titulo-destaque"> com um futuro fullstack comprometido!</strong>
                </h1>
                <p className="apresentacao__conteudo__texto">Olá! Sou Guilherme Almeida, um estudante a desenvolvedor fullstack de <Idade/> anos. Estou aprendendo ativamente várias tecnologias para conquistar experiência na área o mais rápido possível. Se busca alguém dedicado e motivado, estou pronto para colaborar em projetos empolgantes. Vamos conversar?</p>
                <div className="apresentacao__links">
                    <h2 className="apresentacao__links__subtitulo">Acesse minhas redes:</h2>
                    <a className="apresentacao__links__navegacao" href="https://github.com/GuilhermeAlmeidaO" target='blank'>
                        <i className="fa-brands fa-github"></i>
                        Github
                    </a>
                    <a className="apresentacao__links__navegacao" href="https://www.linkedin.com/in/guilherme-almeida-de-oliveira-bb9736283/" target='blank'>
                        <i className="fa-brands fa-linkedin"></i>
                        linkedin
                    </a>
                    <a className='apresentacao__links__navegacao' href='mailto:guilhermealmeida15088@gmail.com' target='blank'>
                        <i className="fa-solid fa-envelope"></i>
                        Email
                    </a>
                </div>
            </section>
            <img className="apresentacao__imagem" src={MinhaImagem} alt="Foto da Joana Santos programando"/>
        </main>
        </>
    )
}

export default MainLayout