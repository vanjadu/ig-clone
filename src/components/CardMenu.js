import React from 'react';
import '../styles/cardMenu.scss';
import { ReactComponent as Inbox } from '../images/message-icon.svg';
import { ReactComponent as Comments } from '../images/comments-icon.svg';
import { ReactComponent as Notifications } from '../images/heart-icon.svg';
import { ReactComponent as Bookmark } from '../images/bookmark-icon.svg';

const CardMenu = () => {
  return (
    <div className="card-menu">
      <div className="interactions">
        <Notifications className="icon" />
        <Comments className="icon" />
        <Inbox className="icon" />
      </div>
      <Bookmark className="icon" />
    </div>
  );
};

export default CardMenu;
