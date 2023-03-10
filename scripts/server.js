const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(require('./db.js')());
const middlewares = jsonServer.defaults({ static: 'public/assets/images' });

server.use((req, res, next) => {
    setTimeout(next, 400);
});
server.use(middlewares);
server.use(router);
server.listen(3001, () => {
    console.log('JSON Server is running');
});
