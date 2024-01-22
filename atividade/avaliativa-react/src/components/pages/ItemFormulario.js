
function ItemFormulario({name, label, tipo, ph}){
    return(
        <p>
            <label htmlFor={name}>{label}: </label>
            <input type={tipo} name={name} id={name} placeholder={ph} />

            <hr />

        </p>
        
    )
}

export default ItemFormulario