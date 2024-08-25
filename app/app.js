const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set up EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define the route to render the article
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Travel Article',
    photos: [
      'photo1.jpg',
      'photo2.jpg',
      'photo3.jpg',
      'photo4.jpg',
      'photo5.jpg',
      'photo6.jpg',
      'photo7.jpg',
      'photo8.jpg',
      'photo9.jpg'
    ]
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
