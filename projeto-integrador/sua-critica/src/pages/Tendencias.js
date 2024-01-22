import { Container, Col, Row } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemTendencias from "../components/ItemTendencias";
import hobbit from '../images/hobbit.png';
import morbius from '../images/morbius.jpg';
import atividadeparanormal from '../images/atividadeparanormal.jpg';
import impossivel from '../images/impossivel.jpg';
import sanguehonra from '../images/sanguehonra.jpg';
import entidade from '../images/entidade.jpg';
import aprocura from '../images/aprocura.jpg';
import capavermelha from '../images/capavermelha.jpg';
import emergencia from '../images/emergencia.jpg';



function Tendencias(){
    return(
    <div className="container f" >
        <Row className="row align-items-center">
            <Col>
                <h1>1</h1>
                <ItemTendencias titulo="Morbius" img={morbius} descricao="Ação e Terror" nota="5,0" alt="Filmes" />
            </Col>

            <Col>
                <h1>2</h1>
                <ItemTendencias titulo="O Hobbit" img={hobbit} descricao="Aventura" nota="5,0" alt="Filmes" />
            </Col>

            <Col>
                <h1>3</h1>
                <ItemTendencias titulo="Atividade Paranormal: Marcados pelo Mal" img={atividadeparanormal} descricao="Terror" nota="5,0" alt="Filmes" />
            </Col>

            <Col>
                <h1>4</h1>
                <ItemTendencias titulo="Missão Impossível" img={impossivel} descricao="Ação" nota="5,0" alt="Filmes" />
            </Col>

            <Col>
                <h1>5</h1>
                <ItemTendencias titulo="Sangue e Honra" img={sanguehonra} descricao="Ação" nota="5,0" alt="Filmes" />
            </Col>
        </Row>

        <Row className="d-flex justify-content-center">
            <Col>
                <h1>6</h1>
                <ItemTendencias titulo="A Entidade" img={entidade} descricao="Terror e Suspense" nota="5,0" alt="Filmes" />
            </Col>

            <Col>
                <h1>7</h1>
                <ItemTendencias titulo="A Procura da Felicidade" img={aprocura} descricao="Drama" nota="5,0" alt="Filmes" />
            </Col>

            <Col>
                <h1>8</h1>
                <ItemTendencias titulo="A Garota da Capa Vermelha" img={capavermelha} descricao="Mistério e Suspense" nota="5,0" alt="Filmes" />
            </Col>

            <Col>
                <h1>9</h1>
                <ItemTendencias titulo="Emergência" img={emergencia} descricao="Ação" nota="5,0" alt="Filmes" />
            </Col>

            <Col>
                <h1>10</h1>
                <ItemTendencias titulo="Repetido" img={morbius} descricao="Comédia" nota="5,0" alt="Filmes" />
            </Col>
        </Row>
    </div>
    )
}

export default Tendencias;