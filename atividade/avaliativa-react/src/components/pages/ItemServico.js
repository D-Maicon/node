function ItemServico({nome, img, servico}){
    return(
        <div>
            <li>{nome}</li>
            <img src={img} alt={nome} />
            <p>{servico}</p>
        </div>
    )
}

export default ItemServico