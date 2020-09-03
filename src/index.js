const app = require("./app");
const { Connect } = require("./database");

const start = async () => {
    try {
        await Connect();
        await app.listen(app.get("port"));

        console.log("Server on port", app.get("port"));
    } catch (error) {
        console.log(error);
    }
}

start();