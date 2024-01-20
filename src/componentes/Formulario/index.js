import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className='formulario'>
            <div>
                <h2>Preencha os dados do colaborador.</h2>
                <form>
                    <CampoTexto label="Nome" placeholder="Digite seu Nome" />
                    <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
                    <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem" />
                </form>
            </div>
        </section>
    )

}

export default Formulario