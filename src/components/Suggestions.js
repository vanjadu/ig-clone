import React from 'react';
import '../styles/suggestions.scss';
import Profile from './Profile';

const Suggestions = () => {
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Suggestions fro you</div>
        <a href="/">See All</a>
      </div>
      <Profile
        caption="Followed by champagnepapi + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by champagnepapi + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by champagnepapi + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by champagnepapi + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by champagnepapi + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
    </div>
  );
};

export default Suggestions;
