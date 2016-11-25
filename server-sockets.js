var socketio = require('socket.io');

module.exports.listen = function(app) {
    io = socketio.listen(app);
    io.on('connection', function(socket){
        console.log('a user connected');  
        socket.on('contractDeployment', function(msg){
            console.log(msg.socket + ", contract: " + msg.contract);
        });  
    });
}