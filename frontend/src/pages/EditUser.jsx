import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("male");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
            getUserById();
    }, []);
    
    const getUserById = async() => {
        try {
            const response = await axios.get(`http://localhost:7539/users/${id}`);
            setName(response.data[0].name);
            setEmail(response.data[0].email);
            setGender(response.data[0].gender);

            console.log(response.data);
            
        } catch (error) {
            console.error("Error fetching user data: ", error);
        }
    }


    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:7539/update-user/${id}`, {
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

                <Form onSubmit={updateUser}>
                    <Form.Group className='my-4'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="input name" 
                            defaultValue={name} 
                            onChange={(e) => setName(e.target.value) } 
                        />
                    </Form.Group>
                    <Form.Group className='my-4'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="input email" 
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value) }
                        />
                    </Form.Group>
                    <Form.Group className='my-4'>
                        <Form.Label>Gender</Form.Label>
                        <Form.Select
                            aria-label="Default select example" 
                            defaultValue={gender}
                            onChange={(e) => setGender(e.target.value) }
                        >
                            <option disabled>select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type='submit'>
                        Update
                    </Button>{' '}
                </Form>
            </Container>
        </>
    )
}
