import express from "express"

const router = express.Router();

router.post("/login", (req, res, next) => {
    res.send("login router")
});

router.post("/register", (req, res, next) => {
    res.send("register router")
});

router.post("/logout", (req, res, next) => {
    res.send("logout router")
});

export default router;