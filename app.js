var Twitter = require("twitter");
var config = require("./config.sys");

var T = new Twitter(config);

var params = {
  q: "#venicebeach",
  count: 2,
  result_type: "mixed",
  lang: "en"
};

T.get("search/tweets", params, function(err, data, response) {
  if (!err) {
    for (let i = 0; i < data.statuses.length; i++) {
      let id = data.statuses[i].id_str;
      let user = data.statuses[i].user.screen_name;
      let screen_name = data.statuses[i].user.screen_name;
      T.post(
        "statuses/update",
        {
          in_reply_to_status_id: id,
          status: "@" + user + "🤖"
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
      // console.log(id, user);
      T.post("friendships/create", { screen_name }, function(err, res) {
        // if there was an error, we could not follow the user, console.log err
        if (err) {
          console.log(err);
        } else {
          console.log(`Followed ${screen_name}!`);
        }
      });
    }
    //TODO: put other post requests here
  } else {
    console.log(err);
  }
});
