const mqtt = require('mqtt')
const client  = mqtt.connect('tcp://localhost:1883')
 
client.on('connect', function () {//Esperar a que se conecte al servicio mqtt
  client.subscribe('/prueba', function (err) {//Suscribir cliente a un topico (Pueden ser 1 o mas clientes)
    if (!err) {
      //client.publish('/prueba', 'Hello mqtt') // Publicar mensaje
    }
  })
  client.subscribe('/prueba2', function (err) {//Suscribir cliente a un topico (Pueden ser 1 o mas clientes)
    if (!err) {
      //client.publish('/prueba', 'Hello mqtt') // Publicar mensaje
    }
  })
})
 
client.on('message', function (topic, message) {//Esperar un mensaje, debe estar suscrito a un topico con anterioridad
  // message is Buffer
  console.log({topic, message: message.toString()})
})