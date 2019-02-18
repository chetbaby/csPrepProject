var Twitter = require("twitter");
var config = require("./config.sys");

var T = new Twitter(config);

var params = {
  q: "love OR hate",
  count: 6,
  result_type: "mixed",
  lang: "en"
};

//console.log();

T.get("search/tweets", params, function(err, data, response) {
  // If there is no error, proceed
  if (!err) {
    // Loop through the returned tweets
    for (let i = 0; i < data.statuses.length; i++) {
      //create screen name of the person we want to follow
      let screen_name = data.statuses[i].user.screen_name;

      //
      T.post("friendships/create", { screen_name }, function(err, res) {
        // if there was an error, we could not follow the user, console.log err
        if (err) {
          console.log(err);
        } else {
          console.log(`${screen_name}  Yeah. Follow you!`);
        }
      });
    }
  } else {
    console.log(err);
  }
});
