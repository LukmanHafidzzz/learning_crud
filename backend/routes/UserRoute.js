// import express from "express";
// import { getUsers } from "../controllers/UserController.js";

const express = require("express");
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/UserController");

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/create-user', createUser);
router.patch('/update-user/:id', updateUser);
router.patch('/update-user/:id', updateUser);
router.delete('/delete-user/:id', deleteUser);

module.exports = router;