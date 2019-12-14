let express = require('express');
let app = express();

let port = 2851 || $PORT;
app.use('/resources',express.static('resources'));

app.get('/' , function(req,res) {
    res.sendFile(__dirname+'/view/index.html');
});

app.listen( port ,()=> {
    console.log('server started on port '+port);
});
