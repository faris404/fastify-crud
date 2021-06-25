const itemController = require('../controllers/items')



/**
 * schemas
 */

const item = {
      type: 'object',
      properties: {
            id: { type: 'string' },
            name: { type: 'string' }

      }
}
const itemsResp = {
      schema: {
            response: {
                  200: {
                        type: 'array',
                        items: item
                  }
            }
      }
}

const singleItemsResp = {
      schema: {
            params: {
                  id: { type: 'number' }
            },
            response: {
                  200: item
            }
      }
}

const addItemSchema = {
      schema: {
            body: {
                  type:'object',    
                  name: { type: 'string' },
                  required:['name']
            },
            response: {
                  200: item
            }
      }
}

const itemUpdateSchema = {
      schema: {
            body:{
                  name: { type: 'string' }
            },
            params: {
                  id: { type: 'number' }
            },
            response: {
                  200: item
            }
      }
}


async function routes(fastify, options) {

      fastify.post('/', addItemSchema, itemController.addItem)
      fastify.get('/', itemsResp, itemController.getItems)
      fastify.get('/:id', singleItemsResp, itemController.getItem)
      fastify.put('/:id', itemUpdateSchema, itemController.updateItem)
      fastify.delete('/:id', singleItemsResp, itemController.deleteItem)

}

module.exports = routes