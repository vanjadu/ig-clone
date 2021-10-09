import React from 'react';
import '../styles/profileIcon.scss';

const ProfileIcon = (props) => {
  const { iconSize, storyBorder, image } = props;

  const getRandomImage = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let randomImg = getRandomImage(1, 70);

  let profileImage = image
    ? image
    : `https://i.pravatar.cc/150/?img=${randomImg}`;

  return (
    <div className={storyBorder ? 'story-border' : ''}>
      <img
        src={profileImage}
        alt="profile"
        className={`profile-icon ${iconSize}`}
      />
    </div>
  );
};

export default ProfileIcon;
