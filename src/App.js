import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { SearchForm } from './Components/SearchForm';
import { CustomCard } from './Components/CustomCard';

function App() {
  return (

    <div className='wrapper bg-dark text-warning'>
      <Container>
        <Row>
          <Col>
            <h1 className='mt-5 text-center'>My Movie Colleciton</h1>
          </Col>
        </Row>
        <hr />

        <SearchForm />



      </Container>

    </div >

  );
}

export default App;
