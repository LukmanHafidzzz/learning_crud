import {useState} from 'react'
import axios from 'axios'
import { Button, Container, Form } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom';

export default function AddUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("male");
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:7539/create-user`, {
                name,
                email,
                gender
            });
            navigate('/');
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <>
            <Container>
                <div className="fw-semibold fs-4 text-center my-4">
                    Create User
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
                        <Form.Label>Gender</Form.Label>
                        <Form.Select
                            aria-label="Default select example" 
                            value={gender}
                            onChange={(e) => setGender(e.target.value) }
                        >
                            <option disabled>select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type='submit'>
                        Add user
                    </Button>{' '}
                </Form>
            </Container>
        </>
    )
}
