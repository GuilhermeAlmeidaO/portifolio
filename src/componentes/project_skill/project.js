import './style.css';
import '../../assets/vars.css'

const Projetos = () => {
    return (
        <>
            <div className='destaque-projetos'>

            </div>
            <div className='todos-projetos'>
                <h1 className='todos-projetos__titulo'>Projetos</h1>
                <div className='todos-projetos__content'>
                    <div className='todos-projetos__content__card' id=''>
                        <h3 className='todos-projetos__content__card__repos_name'>
                            Wordle
                        </h3>
                        <p className='todos-projetos__content__card__descricao'>
                            Uma copia do jogo Wordle. Projeto proposto pelo 7DaysOfCode
                        </p>
                        <a className='todos-projetos__content__card__link' href=''>Va para o Repositório</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projetos;
