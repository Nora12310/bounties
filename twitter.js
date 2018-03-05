var Twit = require('./node_modules/twit');

var duyph = new Twit({
  consumer_key:         'hvFSPbYhtTFwK0KSXtIbSZ9NP',
  consumer_secret:      'SwjOHp5nTuX1QHp5NOvZCeec0agf0TC3E4UbmhimaYLGzpwJeo',
  access_token:         '2568138684-RsIZLMaR2b07Ick0wxtrW2RtkHMT8BhIvhhRqUy',
  access_token_secret:  '8pbQm0jcAPbXo8HdKFo9rdAr0xxZ3vpYFFo2MbmWVBNrN',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})


duyph.post('statuses/update',{status:'hello nodejs, this is a tweet from server'},function(error, data, response){
  console.log(data);
})
