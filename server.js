const PORT = 3000;

const express = require("express");
const app = express();

const transactions =
    [
        {
            date: "05-12-2022",
            description: "Leet Code Annual Subscription",
            amount: 149.99,
        },
        {
            date: "05-16-2022",
            description: "Starbucks",
            amount: 7.99,
        },
        {
            date: "05-19-2022",
            description: "Iams Dog Food",
            amount: 19.99,
        },
    ]

app.get("/sync_transactions", (req, res) => {
    res.send(transactions);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

