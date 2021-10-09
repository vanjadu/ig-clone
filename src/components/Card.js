import React from 'react';
import '../styles/card.scss';
import Profile from './Profile';
import { ReactComponent as CardButton } from '../images/card-btn.svg';
import CardMenu from './CardMenu';
import Comment from './Comment';

const Card = (props) => {
  const { storyBorder, image, comments, likedByText, likedByNumber, hours } =
    props;

  return (
    <div className="card">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} />
        <CardButton className="card-button" />
      </header>
      <img src={image} alt="card content" className="card-image" />
      <CardMenu />
      <div className="liked-by">
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and{' '}
          <strong>{likedByNumber} others</strong>
        </span>
      </div>
      <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
      </div>
      <div className="time-posted">{hours} HOURS AGO</div>
      <div className="add-comment">
        <div className="comment-text">Add a comment...</div>
        <div className="post-text">POST</div>
      </div>
    </div>
  );
};

export default Card;
