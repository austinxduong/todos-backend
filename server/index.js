import express from "express"

const app = express();
const PORT = 3000;

app.get("/", (requestAnimationFrame, resizeBy, next) => {
    res.send("hello world");
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});


