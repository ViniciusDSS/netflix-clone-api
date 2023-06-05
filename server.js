const express = require('express');
const path = require('path');

let inicial_path = path.join(__dirname);

let app = express();
app.use(express.static(inicial_path));

app.get('/', (req, res) => {
    res.sendFile(path.join(inicial_path, "index.html"));
})

app.listen(3300, () => {
    console.log('listening on port 3300');
} ) 