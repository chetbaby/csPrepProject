var Twitter = require("twitter");
var config = require("./config.sys");

var T = new Twitter(config);

var params = {
  q: "#allstarweekend",
  count: 10,
  result_type: "mixed",
  lang: "en"
};

T.get("search/tweets", params, function(err, data, response) {
  // If there is no error, proceed
  if (!err) {
    //   // Loop through the returned tweets
    for (let i = 0; i < data.statuses.length; i++) {
      //     // Get the tweet Id from the returned data
      let id = data.statuses[i].id_str,
        user = data.statuses[i].user.screen_name;
      //       // Try to Favorite the selected Tweet
      // // client.post('statuses/update', {in_reply_to_status_id: id_str,
      // // status: '@' + screen_name + ' I think you mean "blockchain"'},

      T.post(
        "statuses/update",
        {
          in_reply_to_status_id: id,
          status: "@" + user + " is this the superball?"
        },
        function(err, response) {
          //     // If the favorite fails, log the error message
          if (err) {
            console.log(err[0].message);
          }
          // If the favorite is successful, log the url of the tweet
          else {
            let username = response.user.screen_name;
            let tweetId = response.id_str;
            console.log(
              "Replied to: ",
              `https://twitter.com/${username}/status/${tweetId}`
            );
          }
        }
      );
      // console.log(id, user);
    }
  } else {
    console.log(err);
  }
});
