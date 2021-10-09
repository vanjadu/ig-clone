import React from 'react';
import '../styles/menu.scss';
import { ReactComponent as HomeIcon } from '../images/menu-icon.svg';
import { ReactComponent as MessageIcon } from '../images/message-icon.svg';
import { ReactComponent as ExploreIcon } from '../images/explore-icon.svg';
import { ReactComponent as HeartIcon } from '../images/heart-icon.svg';
import ProfileIcon from '../images/ProfileIcon';
import MyProfileImage from '../images/my-profile.jpg';

const Menu = (props) => {
  return (
    <div className="menu">
      <HomeIcon className="menu__icon" />
      <MessageIcon className="menu__icon" />
      <ExploreIcon className="menu__icon" />
      <HeartIcon className="menu__icon" />
      <ProfileIcon iconSize="small" image={MyProfileImage} />
    </div>
  );
};

export default Menu;
