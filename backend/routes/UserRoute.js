import express  from "express";
import {
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/mahasiswa', getUsers);
router.get('/mahasiswa/:id', getUsersById);
router.post('/mahasiswa', createUser);
router.patch('/mahasiswa/:id', updateUser);
router.delete('/mahasiswa/:id', deleteUser);



export default router;