let { items } = require('../models/item')

exports.getItems = function (req, reply) {

      return reply.code(200).send(items)
}


exports.getItem = function (req, reply) {
      item = items.find(i=>i.id==req.params.id)
      if (item)
            return reply.send(item)
      return reply.send({})
}


exports.updateItem = function (req, reply) {
      let name = req.body.name
      let id = req.params.id
      items = items.map(i=>i.id==id?{id,name}:i)
      return reply.send({ id,name })
}


exports.deleteItem = function (req, reply) {
      item = items.find(i=>i.id==req.params.id)
      items = items.filter(i=>i.id!=req.params.id)

      if (item)
            return reply.send(item)
      return reply.send({})
}

exports.addItem = function (req, reply) {
      id = new Date().getTime().toString()

      items.push({id,name:req.body.name})
      return reply.send({id,name:req.body.name})
}


