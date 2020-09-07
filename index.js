const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => console.log(`Server listening on port ${port}....`));