import React from "react";
import Tweet from "./Tweet";

const Tweets = () => {
  const tweets = [
    { name: "John Doe", tweet: "this is my tweet for today" },
    { name: "Jane Doe", tweet: "this is another tweet for me" },

    { name: "Jane Doe", tweet: "this is another tweet for me" },
    { name: "Harry Doe", tweet: "this is my final tweet" },
  ];
  return (
    <div>
      <h2> Hello I have {tweets.length} tweets </h2>

      <div>
        {tweets.map((tweet) => (
          <Tweet name={tweet.name} tweet={tweet.tweet} />
        ))}
      </div>
    </div>
  );
};

export default Tweets;
