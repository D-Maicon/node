import ItemFormulario from "./ItemFormulario"

function Contato(){
    return(
        <div>
            <h1>Contato</h1>
            <ItemFormulario label="Nome" name="nome" tipo="text" ph="Digite seu nome" />
            <ItemFormulario label="Email" name="email" tipo="text" ph="Digite seu email" />
            <ItemFormulario label="Assunto" name="assunto" tipo="text" ph="O que deseja?" />

                <textarea></textarea>
                <p>
                    <button >Enviar</button>
                </p>
        </div>
    )
}

export default Contato