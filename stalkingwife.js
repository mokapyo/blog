var googlehome = require('google-home-notifier');
var twitter = require('twitter');
var language = 'ja';

// 取得したTwitter API用の設定---
var client = new twitter({
    consumer_key: 'piyo',
    consumer_secret: 'piyopiyo',
    access_token_key: 'piyopiyopiyo',
    access_token_secret: 'piyopiyopiyopiyo',
});

// 同一ネットワーク内からGoogle Homeを見つけてくる
googlehome.device('Google Home', language); 


var params = {screen_name: '!!wife!!'}; // 監視アカウント名
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        // Tweet情報からユーザー固有IDを取得
        var user_id = tweets[0].user.id_str;
        // ストリーミングで監視するオプション
        var option = {follow: user_id};
        client.stream('statuses/filter', option, function(stream){
            stream.on('data',function(data){
                console.log(data.text);
                // 喋る
                googlehome.notify(data.text, function(res) {
                    console.log(res);
                  });
            })
        })
    }
}); 

