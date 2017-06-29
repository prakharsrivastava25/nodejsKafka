let kafka = require('kafka-node'),
    Producer = kafka.Producer,
    keyedMessage = kafka.keyedMessage,
    client =new kafka.Client(),
    producer = new Producer(client);
    // km = new keyedMessage('key','message'),
    payloads = [{ topic : 'test', messages:'Hello Prakhar',partition : 0},{ topic : 'test', messages:'How are you?',partition : 0}

    						// { topic : 'topic2', messages: ['hello','world',km]}
                            ];
    						producer.on('ready',function(){
    							producer.send(payloads, function(err, data){
    								console.log(data);
    							});
    						});
                            producer.on('error',function(err){})
