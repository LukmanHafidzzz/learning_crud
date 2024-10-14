// import User from "../models/UserModels"
// const User = require("../models/UserModels")
const db = require("../config/AppConfig");

const getUsers = async (req, res) => {
    try {
        const [response] = await db.query(`SELECT * FROM users`)
        res.status(200).json(
            response
        );
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ 
            error: error.message 
        });
    }
}

const getUserById = async (req, res) => {
    const {id} = req.params;
    try {
        const [response] = await db.query(`SELECT * FROM users WHERE id = ${id}`)
        res.status(200).json(
            response
        );
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: error.message 
        });
    }
}

const createUser = async (req, res) => {
    const {name, email, gender} = req.body;
    try {
        await db.query(`INSERT INTO users (name, email, gender, createdAt, updatedAt) VALUES ('${name}', '${email}', '${gender}', NOW(), NOW())`)
        res.status(200).json({
            message: "User created!"
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: error.message 
        });
    }
}

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {name, email, gender,} = req.body;
    try {
        const [currentUser] = await db.query(`SELECT * FROM users WHERE id = '${id}'`)
        const currentCreatedAt = currentUser[0].createdAt;

        await db.query(`UPDATE users SET name = '${name}', email = '${email}', gender = '${gender}', updatedAt = NOW() WHERE id = ${id}`);
        res.status(200).json({
            message: "User updated!"
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: error.message 
        });
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        await db.query(`DELETE FROM users WHERE id = ${id}`)
        res.status(200).json({
            message: "User deleted!"
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: error.message 
        });
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}