var Twitter = require("twitter");
var config = require("./config.sys");

var T = new Twitter(config);

var params = {
  q: "love OR hate",
  count: 2,
  result_type: "mixed",
  lang: "en"
};

T.get("search/tweets", params, function(err, data, response) {
  if (!err) {
    for (let i = 0; i < data.statuses.length; i++) {
      let id = data.statuses[i].id_str,
        user = data.statuses[i].user.screen_name;
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
            let username = response.user.screen_name,
              tweetId = response.id_str;
            console.log(`Replied to: ${username}`);
          }
        }
      );
      // console.log(id, user);
    }
    //TODO: put other post requests here
  } else {
    console.log(err);
  }
});
