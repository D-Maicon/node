import { Col, Row } from "reactstrap";
import CardFilm from "../components/CardFilm";
import capavermelha from '../images/capavermelha.jpg';
import aprocura from '../images/aprocura.jpg';
import sanguehonra from '../images/sanguehonra.jpg';
import entidade from '../images/entidade.jpg';
import ucm3ps from '../images/ucm3ps.jpg';
import suacor1 from '../images/suacor1.png';




function Home(){
    return(
        <div className="container f" >
                <Row className="row align-items-center">
                    <Col>
                        <img src={ucm3ps} className="img-fluid" alt="Notícia de Filmes"></img>
                    </Col>
                </Row>
            
            <Row>
                <Col className="text-center my-3">
                    <img src={suacor1} className="img-fluid" alt="Título Suacrítica"></img>
                </Col>
            </Row>
            <hr />
            <Row>
                <h2>Filmes</h2>
                <Col>
                    <CardFilm titulo="A Garota da Capa Vermelha" img={capavermelha} descricao="Fantasia e Mistério"  />
                </Col>
                <Col>
                    <CardFilm titulo="A Entidade" img={entidade} descricao="Terror"  />
                </Col>
                <Col>
                    <CardFilm titulo="Sangue e Honra" img={sanguehonra} descricao="Ação e Drama"  />
                </Col>
                <Col>
                    <CardFilm titulo="A Procura da Felicidade" img={aprocura} descricao="Ação"  />
                </Col>
            </Row>
            <hr />
            <Row>
                <h2>Séries</h2>
                <Col>
                    <CardFilm titulo="A Garota da Capa Vermelha" img={capavermelha} descricao="Fantasia e Mistério"  />
                </Col>
                <Col>
                    <CardFilm titulo="A Entidade" img={entidade} descricao="Terror"  />
                </Col>
                <Col>
                    <CardFilm titulo="Sangue e Honra" img={sanguehonra} descricao="Ação e Drama"  />
                </Col>
                <Col>
                    <CardFilm titulo="A Procura da Felicidade" img={aprocura} descricao="Ação"  />
                </Col>
            </Row>
            <hr />
            <Row>
                <h2>Animes</h2>
                <Col>
                    <CardFilm titulo="A Garota da Capa Vermelha" img={capavermelha} descricao="Fantasia e Mistério"  />
                </Col>
                <Col>
                    <CardFilm titulo="A Entidade" img={entidade} descricao="Terror"  />
                </Col>
                <Col>
                    <CardFilm titulo="Sangue e Honra" img={sanguehonra} descricao="Ação e Drama"  />
                </Col>
                <Col>
                    <CardFilm titulo="A Procura da Felicidade" img={aprocura} descricao="Ação"  />
                </Col>
            </Row>

        </div>
    )
}

export default Home;