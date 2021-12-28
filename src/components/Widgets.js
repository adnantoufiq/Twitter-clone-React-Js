import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widegets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1475339971380666368"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="toufiq3245"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/arif.raaj.56"}
          options={{ text: "#reactjs is awesome", via: "toufiq3245" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
