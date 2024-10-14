import {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Table, Container } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

export default function UserList() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    },[]);

    const getUsers = async() => {
        const response = await axios.get(`http://localhost:7539/users`)
        console.log(response.data);
        setUser(response.data);        
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:7539/delete-user/${id}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Container>
                <div className="fw-semibold fs-4 text-center my-4">
                    Learning CRUD
                </div>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {
                            return (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>
                                        <Link to={`/edit/${user.id}`}>
                                            <FaEdit />
                                        </Link>
                                        <Link 
                                            onClick={() => deleteUser(user.id)}
                                        >
                                            <FaTrashCan />
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })};
                    </tbody>
                </Table>
                <Link to={'/add'} className="d-flex align-items-center gap-3">
                    <FaPlus />
                    Create User
                </Link>
            </Container>
        </>
    )
}
