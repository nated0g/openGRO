const fastify = require('fastify')({ logger: true })
const mqtt = require("mqtt")
const match = require('mqtt-match')
const Sequelize = require('sequelize')
const { Telemetry } = require('./models');

const mqttClient = mqtt.connect('mqtt://mqtt');

const sequelize = new Sequelize('postgres://postgres:example@db:5432/database_development', { dialect: 'postgres', protocol: 'postgres' });

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});


/*
* MQTT MESSAGE HANDLING
*/
// Keys are MQTT topics to subscribe to, values are Sequelize Model objects used to handle them 
const subs = {
  "+/telemetry": Telemetry
};

mqttClient.on('connect', () => {
  Object.keys(subs).forEach(key => {
    mqttClient.subscribe(key);
  })
})

mqttClient.on('message', (topic, msg) => {
  Object.entries(subs).forEach((sub) => {
    const [_topic, model] = sub;
    if (match(_topic, topic)) {
      const msgObj = JSON.parse(msg.toString('utf-8'));
      console.log("TOPIC IS:", topic);
      msgObj.location = topic.split('/')[0];
      msgObj.time = new Date().getTime();
      model
        .create(msgObj)
        .then(console.log(msgObj))
        .catch(e => console.error(e));
    }
  })
})


/*
* REST API
*/
fastify.route({
  method: 'GET',
  url: '/telemetry',
  schema: {
    // request needs to have a querystring with a `name` parameter
    querystring: {
      location: { type: 'string' }
    },
    // the response needs to be an object with an `hello` property of type 'string'
    response: {
      200: {
        type: 'object'
      }
    }
  },
  // this function is executed for every request before the handler is executed
  preHandler: async (request, reply) => {
    // E.g. check authentication
  },
  handler: async (request, reply) => {
    const location = request.params.location;
    let telemetry = await Telemetry.findOne({
      where: {
        location:location
      }
    })
    return telemetry;
  }
})

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()