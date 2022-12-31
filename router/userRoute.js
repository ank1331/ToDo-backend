const express = require("express");

const { home, createUser, getUsers, editUser, deleteUser, addnewtask, removetask, searchtask,} = require("../controller/userController");
const router = express.Router();




router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.put("/editUser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser)
router.post("/addnewtask", addnewtask)
router.post("/removetask", removetask)
router.get("/searchtask/:id", searchtask)




module.exports = router