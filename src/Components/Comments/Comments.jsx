import React from 'react';
import '../Comments/Comments.scss';
import deleteIcon from '../../assets/Icons/icon-delete.svg';

function Comments({ name, timestamp, comment }) {
  const handleCommentDelete = (event) => {
    console.log('Delete comment:', comment);
  };

  return (
    <div className="comment">
      <div className="comment__icon-section">
        <div className="comment__icon"></div>
      </div>
      <div className="comment__data">
        <div className="comment__heading">
          <div className="comment__name">{name}</div>
          <div className="comment__right">
            <img
              className="comment__delete-icon"
              src={deleteIcon}
              alt="delete"
              onClick={handleCommentDelete}
            />
            <div className="comment__date">{timestamp}</div>
          </div>
        </div>
        <div className="comment__body">
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
