var Twitter = require("twitter");
var config = require("./config.sys");

var T = new Twitter(config);

var params = {
  q: "#presidentsday",
  count: 1,
  result_type: "recent",
  lang: "en"
};

setInterval(bot, 1000 * 20);

function bot() {
  T.get("search/tweets", params, function(err, data, response) {
    if (!err) {
      for (let i = 0; i < data.statuses.length; i++) {
        let id = data.statuses[i].id_str;
        // let user = data.statuses[i].user.screen_name;
        let screen_name = data.statuses[i].user.screen_name;
        T.post(
          "statuses/update",
          {
            in_reply_to_status_id: id,
            status: "@" + screen_name + "happy presidents day"
          },
          function(err, response) {
            if (err) {
              console.log(err[0].message);
            } else {
              // let username = response.user.screen_name,
              tweetId = response.id_str;
              console.log(`Replied to: ${screen_name}`);
            }
          }
        );
        T.post("friendships/create", { screen_name }, function(err, res) {
          // if there was an error, we could not follow the user, console.log err
          if (err) {
            console.log(err);
          } else {
            console.log(`Followed ${screen_name}!`);
          }
        });
        T.post("favorites/create", { id }, (err, data, response) => {
          if (err) {
            console.log(err);
          } else {
            console.log(`${data.text} tweet liked!`);
          }
        });
      }
      //TODO: put other post requests here
    } else {
      console.log(err);
    }
  });
}
