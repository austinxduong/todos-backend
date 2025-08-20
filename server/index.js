import express from "express"
import AuthRoute from "/routes/auth.js"

const app = express();
const PORT = 3000;

app.use("/api/user", AuthRoute);

app.get("/", (requestAnimationFrame, resizeBy, next) => {
    res.send("hello world");
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});


