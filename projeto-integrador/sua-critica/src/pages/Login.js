import {Col, Row, Button} from 'reactstrap';
import ItemCadastro from '../components/ItemCadastro';
import logomelhorada6 from '../images/logomelhorada6.png';


function Login(){
    return(
        <div className='container f' >
            <Row className="row align-items-center" >
                <div className="container-fluid mt-3 mb-3">
                <Row>
                    <div className='col-4'></div>
                    <div className="col-12 col-md-4 text-bg-dark p-5">
                        <Row>
                            <Col>
                                <h3 className="display-3 text-center">Cadastre-se</h3>
                                
                            </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src={logomelhorada6} className="img-fluid" alt="Logo da Suacrítica" ></img>
                                    <ItemCadastro label="Nome" name="nome" type="text" ph="Digite seu nome" />
                                    <ItemCadastro label="Data de Nascimento" name="data" type="date" />
                                    <ItemCadastro label="E-mail" name="email" type="email" ph="Digite seu e-mail" />
                                    <ItemCadastro label="Senha" name="senha" type="password" ph="Digite sua senha" />
                                    <ItemCadastro label="Confirme sua senha" name="senha" type="password" ph="Repita a senha" />
                                </Col>
                            </Row>
                            <Row>
                            <Col>
                                <Button  className="btn btn-danger d-grid gap-2 col-6 mx-auto" >Cadastrar</Button>
                            </Col>
                        </Row>           
                    </div>
                    <div className='col-4'></div>
                </Row>
                </div>
            </Row>
        </div>
            
    )
}
        
export default Login;