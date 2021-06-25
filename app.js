
// Require the framework and instantiate it
const fastify = require('fastify')({
      logger: true
})
fastify.register(require('fastify-swagger'), {
      routePrefix: '/docs',
      exposeRoute:true,
      swagger: {
            info: {
              title: 'Items Docs',
              description: 'All APIs for items. ',
              version: '0.1.0'
            },
      }
})

fastify.register(require('./routes/items'))


// Run the server!
fastify.listen(3000, function (err, address) {
      if (err) {
            fastify.log.error(err)
            process.exit(1)
      }
      fastify.log.info(`server listening on ${address}`)
})