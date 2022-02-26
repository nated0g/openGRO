const app = require('fastify')({
    logger: true
})
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:example@db:5432/database_development', { dialect: 'postgres', protocol: 'postgres' });


let PageLoads = sequelize.define('page_loads', {
    userAgent: { type: Sequelize.STRING, primaryKey: true },
    time: { type: Sequelize.DATE, primaryKey: true }
}, { timestamps: false });


// Declare a route
app.get('/', function (req, reply) {
    reply.send({ hello: 'nated0g' })
})

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

// Run the server!
app.listen(3000, '0.0.0.0', (err, address) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`server listening on ${address}`)
})