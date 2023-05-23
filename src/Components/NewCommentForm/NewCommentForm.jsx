import React, { useState } from 'react';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

import './NewCommentForm.scss'
const NewCommentForm = ({ addComment }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment(commentText);
    setCommentText('');
  };

  return (



<div className='new-comment'>
			<div className='new-comment__avatar-section'>
				<img className='new-comment__avatar' src={avatar} alt='' />
			</div>
			<form className='new-comment__form' id='comment-form'>
				<label className='new-comment__subheader' htmlFor='comment'>
					JOIN THE CONVERSATION
				</label>{' '}
				<br />
				<div className='new-comment__wrap'>
					<textarea
          value={commentText}
              onChange={(event) => setCommentText(event.target.value)}
						className='new-comment__comment-input'
						name='comment'
						id='comment'
						placeholder='Add a new comment'
					></textarea>
					<button className='new-comment__btn' type='submit' id='commentBtn'>
						COMMENT
					</button>
				</div>
			</form>
		</div>




    // <form onSubmit={handleSubmit}>
    //   <textarea
    //     value={commentText}
    //     onChange={(event) => setCommentText(event.target.value)}
    //   />
    //   <button type="submit">Add Comment</button>
    // </form>
  );
};

export default NewCommentForm;
