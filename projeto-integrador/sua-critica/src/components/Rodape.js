import {Col, Row} from 'reactstrap';
import icontik4 from '../images/icontik4.png';
import iconinsta1 from '../images/iconinsta1.png';

function Rodape(){
    return(
        <div>
            <Row>
            <Col className='col-3 bg-black text-light text-center py-5'>
                <img src={icontik4} class="img-fluid" alt="Rede Social Tiktok" /><br />
                <span>Política de Privacidade  Condições de Uso<br />Dúvidas</span>
            </Col>
            <Col className='col-6 bg-black text-light text-center py-5'>
                <span>&copy; SUACRÍTICA 2023 - Todos os direitos reservados.<br /></span>
                <span>Os direitos autorais de todas as imagens de filmes, séries, etc são<br /> propriedades de seus respectivos donos.</span>
            </Col>
            <Col className='col-3 bg-black text-light text-center py-5'>
                <img src={icontik4} class="img-fluid" alt="Rede Social Tiktok" />
                <img src={iconinsta1} class="img-fluid m-4" alt="Rede Social Tiktok" />
            </Col>
            </Row>
        </div>
        
    )
}

export default Rodape