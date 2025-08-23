import express from "express"
import { getAllTodos, getATodos, updateATodos, deleteATodos, addATodos } from "../controllers/todo.js";

const router = express.Router();

router.get("/", getAllTodos);
// REST routes

router.post("/", addATodos)

router.put("/:id", updateATodos);

// router.put("/:id", (req, res, next) => {
//     console.log(req.params.id);
//     res.send(`updated a todo with id: ${req.params.id}`);
// });

router.get("/:id", getATodos);

router.delete("/:id", deleteATodos);


export default router;