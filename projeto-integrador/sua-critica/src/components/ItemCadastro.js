import { FormGroup, Label, Input } from "reactstrap";

function ItemCadastro({ label, name, type, ph }) {
    return (

        <FormGroup>
            <Label for={name}>
                {label}:
            </Label>
            <Input 
                id={name}
                name={name}
                placeholder={ph}
                type={type}
            />
        </FormGroup>

    )
}

export default ItemCadastro;