const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('hbs', exhbs ({extname:'.hbs'}));
app.set('view engine', 'hbs');

app.get('/', (req,res)=> {
    const htmlPage = '<h2>Hello Endorfins!</h2><p>This is Neta with ENdorfins.<p/>';
      res.render('main', {body: htmlPage});
});

app.listen(3006, () => {
    console.log
});