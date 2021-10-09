import React from 'react';
import '../styles/comment.scss';

const Comment = (props) => {
  const { accountName, comment } = props;

  return (
    <div className="comment-container">
      <div className="account-name">{accountName}</div>
      <div className="comment">{comment}</div>
    </div>
  );
};

export default Comment;
