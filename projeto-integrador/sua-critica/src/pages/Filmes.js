import { Col, Row } from "reactstrap"
import CardFilm from "../components/CardFilm";
import capavermelha from '../images/capavermelha.jpg';
import aprocura from '../images/aprocura.jpg';
import sanguehonra from '../images/sanguehonra.jpg';
import entidade from '../images/entidade.jpg'





function Filmes() {
    return (
        <div>

            <Row>
                <Col>
                    <h1 className="mt-3 mb-3">Filmes:</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CardFilm titulo="Jogos Vorazes" img={entidade} descricao="Anos antes de se torne de Panemido para ser mentor de Lucy Gray Baird, uma garota tributo..." />
                </Col>

                <Col>
                    <CardFilm titulo="Jogos Vorazes" img={capavermelha} descricao="Anos antes de se torne de Panemido para ser mentor de Lucy Gray Baird, uma garota tributo..." />
                </Col>

                <Col>
                    <CardFilm titulo="Jogos Vorazes" img={aprocura} descricao="Anos antes de se torne de Panemido para ser mentor de Lucy Gray Baird, uma garota tributo..." />
                </Col>

                <Col>
                    <CardFilm titulo="Jogos Vorazes" img={sanguehonra} descricao="Anos antes de se torne de Panemido para ser mentor de Lucy Gray Baird, uma garota tributo..." />
                </Col>
            </Row>


            <Row>
                <Col>
                    <CardFilm titulo="Jogos Vorazes" img={entidade} descricao="Anos antes de se torne de Panemido para ser mentor de Lucy Gray Baird, uma garota tributo..." />
                </Col>

                <Col>
                    <CardFilm titulo="Jogos Vorazes" img={capavermelha} descricao="Anos antes de se torne de Panemido para ser mentor de Lucy Gray Baird, uma garota tributo..." />
                </Col>

                <Col>
                    <CardFilm titulo="Jogos Vorazes" img={aprocura} descricao="Anos antes de se torne de Panemido para ser mentor de Lucy Gray Baird, uma garota tributo..." />
                </Col>

                <Col>
                    <CardFilm titulo="Jogos Vorazes" img={entidade} descricao="Anos antes de se torne de Panemido para ser mentor de Lucy Gray Baird, uma garota tributo..." />
                </Col>
            </Row>


            <Row>
                <Col>
                    <CardFilm titulo="Jogos Vorazes" img={sanguehonra} descricao="Anos antes de se torne de Panemido para ser mentor de Lucy Gray Baird, uma garota tributo..." />
                </Col>

                <Col>
                    <CardFilm titulo="Jogos Vorazes" img={entidade} descricao="Anos antes de se torne de Panemido para ser mentor de Lucy Gray Baird, uma garota tributo..." />
                </Col>

                <Col>
                    <CardFilm titulo="Jogos Vorazes" img={capavermelha} descricao="Anos antes de se torne de Panemido para ser mentor de Lucy Gray Baird, uma garota tributo..." />
                </Col>

                <Col>
                    <CardFilm titulo="Jogos Vorazes" img={aprocura} descricao="Anos antes de se torne de Panemido para ser mentor de Lucy Gray Baird, uma garota tributo..." />
                </Col>
            </Row>
        </div>
    )
}

export default Filmes;