import React from "react";
import Tweet from "./Tweet";

const Tweets = (props) => (
  <section>
    <h2> {props.me} </h2> <div> {props.age} </div>
    <Tweet />
  </section>
);

export default Tweets;
