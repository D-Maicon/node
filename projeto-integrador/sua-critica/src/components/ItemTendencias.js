import { CardBody, Card, CardTitle, CardText, CardSubtitle, Tooltip } from 'reactstrap';
import {useState, useId} from 'react';

function ItemTendencias({ img, titulo, descricao, nota }) {

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    const idUnico = useId().replaceAll(/:/g, "");

    return (
        <div>
            <Card
                 className="card text-bg-dark mb-3"

                 style={{
                    width: '18rem',
                    minHeight: '425px'
                 }}
             >
                <img
                    alt={titulo}
                    src={img}
                />

                <CardBody>
                    <CardTitle tag="h5">
                        {titulo}
                    </CardTitle>
                    <CardText id={idUnico} >
                        {descricao.substring(0, 60)}{descricao.length >= 60 && '...'}
                    </CardText>
                    <CardText id={idUnico} >
                    <Tooltip
                        isOpen={tooltipOpen}
                        target={idUnico}
                        toggle={toggle}>
                        {descricao}
                    </Tooltip>
                        {nota}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default ItemTendencias;