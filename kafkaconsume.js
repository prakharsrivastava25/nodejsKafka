var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client('localhost:2181'),
    consumer = new Consumer(
        client,
        [
            { topic: 'test', partition: 0, offset:0 }
        ],
        {
            autoCommit: true
        }
    );
    consumer.on('message',function(message){
        console.log("Message is:",message.value);
    });
    consumer.on('error',function(err)
    {
            console.log('error',err);
    });
