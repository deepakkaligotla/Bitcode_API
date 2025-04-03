const app = require("./app");
const http = require("http");
const server = http.createServer(app);
console.log(process.env.PORT)

server.listen(process.env.PORT, () => {
    console.log(`Server running on port localhost`);
});