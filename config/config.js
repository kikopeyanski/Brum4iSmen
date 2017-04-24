const path = require('path');
const rootPath = path.normalize(path.join(__dirname, '/../../'));
const PORT = process.env.PORT || 1337;

module.exports = {
    development: {
        rootPath: rootPath,
        connectionString: 'mongodb://localhost/brum4ismen',
        port: PORT,
        secret: 'taina'
    },
    production: {
        rootPath: rootPath,
        connectionString: 'mongodb://localhost/brum4ismen',
        port: PORT,
        secret:'taina'
    }
};