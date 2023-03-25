import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const SearchForm = () => {
    return (
        <div className='bg-black p-5 rounded shadow-lg'>
            <Form>
                <Row className='gap-2'>
                    <Col md='8'>
                        <Form.Control type="email" placeholder="Enter movie name" />
                    </Col>
                    <Col>
                        <div className='d-grid'>
                            <Button variant="warning" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Col>

                </Row>


            </Form >

        </div>

    );
}
