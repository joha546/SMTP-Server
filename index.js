// Requiring smtp server in js file.
const SMTPServer = require("smtp-server").SMTPServer;

// SMTP Server instance.
const server = new SMTPServer({

});

server.listen(25, ()=> console.log('Server Running on 25 port.'))