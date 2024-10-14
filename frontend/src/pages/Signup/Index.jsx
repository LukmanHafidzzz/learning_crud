import {useState} from 'react'
import axios from 'axios'
import { Button, Container, Form } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom';

export default function Index() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:7539/create-user`, {
                name,
                email,
                password,
            });
            navigate('/');
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <>
            <Container className="vh-100 w-25 d-flex justify-content-center align-items-center">
                <Container>
                    <div className="fs-4 fw-semibold text-center">
                        Sign Up
                    </div>
                    <Form onSubmit={saveUser}>
                        <Form.Group className='my-4'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="input name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value) } 
                            />
                        </Form.Group>
                        <Form.Group className='my-4'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="input email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value) }
                            />
                        </Form.Group>
                        <Form.Group className='my-4'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="input password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value) }
                            />
                        </Form.Group>
                        <Button variant="primary" type='submit' className='w-100'>
                            Signup
                        </Button>{' '}
                    </Form>
                </Container>
            </Container>
        </>
    )
}
