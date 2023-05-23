
// import React from 'react';
// import NewCommentForm from '../NewCommentForm/NewCommentForm';
// import Comments from '../Comments/Comments';
// // import commentData from '../../assets/Data/video-details.json'; 
// import '../NewCommentForm/NewCommentForm.scss';
// import './CommentSection.scss';
// import '../Comments/Comments.scss';

// function CommentSection({ activeVideoId, currentVideo }) {
//   const numberOfComments = currentVideo.length;

//   return (
//     <section className='comment-section'>
//       <div className='comment-section__heading'>
//         <h5 className='comment-section__comment-counter'>{numberOfComments} Comments</h5>
//       </div>
//       <NewCommentForm activeVideoId={activeVideoId} />
//       <div className='comment__container'>
//         {currentVideo.comments.map((comment) => {
//           console.log(comment);
//          return  <Comments
//             key={comment.id}
//             name={comment.name}
//             timestamp={comment.timestamp}
//             comment={comment.comment}
//             activeVideoId={activeVideoId}
//             commentId={comment.id}
//           />
//         })}
//       </div>
//     </section>
//   );
// }

// export default CommentSection;


import React from 'react';
import NewCommentForm from '../NewCommentForm/NewCommentForm';
import Comments from '../Comments/Comments';
import '../NewCommentForm/NewCommentForm.scss';
import './CommentSection.scss';
import '../Comments/Comments.scss';

function CommentSection({ activeVideoId, currentVideo }) {
  const numberOfComments = currentVideo.comments.length;

  return (
    <section className='comment-section'>
      <div className='comment-section__heading'>
        <h5 className='comment-section__comment-counter'>{numberOfComments} Comments</h5>
      </div>
      <NewCommentForm activeVideoId={activeVideoId} />
      <div className='comment__container'>
        {currentVideo.comments.map((comment) => (
          <Comments
            key={comment.id}
            name={comment.name}
            timestamp={comment.timestamp}
            comment={comment.comment}
            activeVideoId={activeVideoId}
            commentId={comment.id}
          />
        ))}
      </div>
    </section>
  );
}

export default CommentSection;
