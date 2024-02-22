import './style.css';
import '../../assets/vars.css'
import { getRepos } from './servico';
import { useState } from 'react';
import { useEffect } from 'react';

const Projetos = () => {

    const [repos, setRepos] = useState([])
    async function fetchRepos() {
        const servico = await getRepos()

        setRepos(servico)
    }

    useEffect(() =>{
        fetchRepos()
    }, [])

    return (
        <>
            <div className='destaque-projetos'>

            </div>
            <div className='todos-projetos'>
                <h1 className='todos-projetos__titulo'>Projetos</h1>
                <div className='todos-projetos__content'>
                    {
                        repos.map(repo => (
                            <div className='todos-projetos__content__card' id={repo.id} key={repo.id}>
                                <h3 className='todos-projetos__content__card__repos_name'>
                                    {repo.name}
                                </h3>
                                <p className='todos-projetos__content__card__descricao'>
                                    {repo.description === null ? 'Sem descrição' : repo.description}
                                </p>
                                <div className='todos-projetos__content__card__link__div'>
                                    <i className="fa-solid fa-arrow-right"></i>
                                    <a href={repo.html_url} target='_blank' rel="noreferrer"> Vá Para o Repositório</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Projetos;
