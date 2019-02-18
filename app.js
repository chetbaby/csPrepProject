var Twitter = require("twitter");
var config = require("./config.sys");

var T = new Twitter(config);

var params = {
  q: "#codesmith",
  count: 1,
  result_type: "recent",
  lang: "en"
};

setInterval(bot, 1000 * 5);

function bot() {
  T.get("search/tweets", params, function(err, data, response) {
    if (!err) {
      for (let i = 0; i < data.statuses.length; i++) {
        let id = data.statuses[i].id_str;
        let screen_name = data.statuses[i].user.screen_name;
        T.post(
          "statuses/update",
          {
            in_reply_to_status_id: id,
            status: "@" + screen_name + "🤖 greetings fellow dev!"
          },
          function(err, response) {
            if (err) {
              console.log(err);
            } else {
              tweetId = response.id_str;
              console.log(`Replied to: ${screen_name}`);
            }
          }
        );
        T.post("friendships/create", { screen_name }, function(err, res) {
          if (err) {
            console.log(err);
          } else {
            console.log(`Followed: ${screen_name}`);
          }
        });
        T.post("favorites/create", { id }, function(err, data, response) {
          if (err) {
            console.log(err);
          } else {
            console.log(`Liked tweet: ${data.text}`);
          }
        });
      }
      //TODO: put other post requests here
    } else {
      console.log(err);
    }
  });
}
