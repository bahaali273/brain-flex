import avatar from "../../assets/Images/Mohan-muruge.jpg";
import "./NewCommentForm.scss";
import axios from "axios";

function NewCommentForm({ api_url, activeVideoId }) {
    const handelCommentSubmit = (event) => {
        event.preventDefault();
        const newComment = {
            comment: event.target.comment.value,
        };
        console.log(event.target.comment.value);

        if (newComment.comment) {
            axios
                .post(`${api_url}/videos/${activeVideoId}/comments`, newComment)
                .then(() => {})
                .catch((error) => {
                    console.log(error);
                });
            event.target.reset();
        }
    };

    return (
        <div className="new-comment">
            <div className="new-comment__avatar-section">
                <img className="new-comment__avatar" src={avatar} alt="" />
            </div>
            <form
                className="new-comment__form"
                id="comment-form"
                onSubmit={handelCommentSubmit}
            >
                <label className="new-comment__subheader" htmlFor="comment">
                    JOIN THE CONVERSATION
                </label>{" "}
                <br />
                <div className="new-comment__wrap">
                    <textarea
                        className="new-comment__comment-input"
                        name="comment"
                        id="comment"
                        placeholder="Add a new comment"
                    ></textarea>
                    <button
                        className="new-comment__btn"
                        type="submit"
                        id="commentBtn"
                    >
                        COMMENT
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NewCommentForm;
