import ItemServico from "./ItemServico"
function Servicos(){
    return(
        <div>
            <h1>Serviços</h1>
            <ItemServico nome="Incêndio" img="https://picsum.photos/200" servico="Temos três equipes com seus respectivos caminhões, sempre a disposição de chamadas." />
            <ItemServico nome="Skynet" img="https://picsum.photos/200" servico="Nossos programadores e coloboradores do TI estão preparados para qualquer ataque de IA maligna." />
            <ItemServico nome="Paradoxo" img="https://picsum.photos/200" servico="Se existe problema temporal, pode ter certeza que a gente vai saber lidar com ele." />
        </div>
    )
}

export default Servicos