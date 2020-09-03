const low = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

let db;

const Connect = async () => {
    const adapter = new FileAsync('db.json')
    db = await low(adapter);
    db.defaults({ tasks: [] }).write();
}

const getConnection = () => db;

module.exports = {
    Connect,
    getConnection
}