const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 6247;

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello Docker'});
});

app.listen(PORT, ()=> {
    console.log(`Server listening at http://localhost:${PORT}`)
});