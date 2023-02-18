// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(ACf0cc9974206940584f9b65e386b9f665, a8dde211fd3382fd6ed426f2bfddc3d5);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?', // CHANGE BODY
     from: '+18172038257',
     to: '+12142741474'
   })
  .then(message => console.log(message.sid));