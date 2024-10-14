// import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

import Header from "../../components/Header/Index"
import Footer from "../../components/Footer/Index"

export default function Index() {
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
    return (
        <>
            <Header />
            <div className="my-5">
                Ini halaman homepage
            </div>
            <Footer />
        </>
    )
}
