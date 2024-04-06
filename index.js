const express = require("express")
const app = express();

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

app.get("/", async (req, res) => {
    fibonacci(40)
    res.json({
        message: "Hello world"
    })
})


app.get("/v2", async (req, res) => {
    fibonacci(40)
    res.json({
        message: "Hello world v2"
    })
})

app.listen(3000, () => console.log("Server is runnint at http://localhost:3000"))