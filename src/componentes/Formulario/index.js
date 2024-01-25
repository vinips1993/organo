import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = () => {
        console.log('Form foi Submetido')
    }

    return (
        <section className='formulario'>
            <div>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <form onSubmit={aoSalvar}>
                    <CampoTexto label="Nome" placeholder="Digite seu Nome" />
                    <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
                    <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem" />
                    <ListaSuspensa label="Time" itens={times}/>
                    <Botao>
                        Criar card
                    </Botao>
                </form>    
            </div>
        </section>
    )

}

export default Formulario