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
app.get('/', async (req, reply) => {
    const userAgent = req.headers['user-agent'];
    const time = new Date().getTime();

    try {
        await PageLoads.create({ userAgent, time });

        const messages = await PageLoads.findAll();
        reply.send(messages);
    } catch (e) {
        console.log('Error inserting data', e);
    }
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