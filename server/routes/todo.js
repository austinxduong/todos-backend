import express from "express"
import { getAllTodos, getATodos, updateATodos, deleteATodos, addATodos } from "../controllers/todo";

const router = express.Router();

router.get("/", getAllTodos);
// REST routes

router.post("/", addATodos)

router.post("/", (req, res, next) => {
    res.send("get all todos");
});

router.put("/:id", updateATodos);

// router.put("/:id", (req, res, next) => {
//     console.log(req.params.id);
//     res.send(`updated a todo with id: ${req.params.id}`);
// });

router.get("/:id", (req, res, next) => {
    console.log(req.params.id);
    res.send(`get todo with id ${req.params.id}`);
});

router.delete("/:id", (req, res, next) => {
    console.log(req.params.id);
    res.send(`deleted a todo with id: ${req.params.id}`);
});


export default router;