import React, { useEffect, useState } from "react";
import api from "../../../api";
import PropTypes from "prop-types";
import Comment from "./comment";
import NewComment from "./newComment";

const CommentsList = ({ userPageId }) => {
    const [comments, setComments] = useState();
    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((info) => setUsers(info));
        api.comments
            .fetchCommentsForUser(userPageId)
            .then((data) => setComments(data));
    }, []);

    const handleRemove = (commentId) => {
        api.comments.remove(commentId);
        api.comments
            .fetchCommentsForUser(userPageId)
            .then((data) => setComments(data));
    };

    const handleSubmit = (data) => {
        api.comments.add({
            pageId: userPageId,
            userId: data.userName,
            content: data.comment
        });
        api.comments
            .fetchCommentsForUser(userPageId)
            .then((data) => setComments(data));
    };

    if (comments) {
        return (
            <>
                <div className="card mb-2">
                    <NewComment
                        userPageId={userPageId}
                        onSubmit={handleSubmit}
                        users = {users}
                    />
                </div>
                <div className="card mb-3">
                    <div className="card-body ">
                        <h2>Comments</h2>
                        <hr />
                        {comments
                            .sort(
                                (a, b) =>
                                    Number(b.created_at) - Number(a.created_at)
                            )
                            .map((comment) => (
                                <Comment
                                    key={comment._id}
                                    commentId={comment._id}
                                    pageId={comment.pageId}
                                    userId={comment.userId}
                                    content={comment.content}
                                    handleRemove={handleRemove}
                                    time={comment.created_at}
                                />
                            ))}
                    </div>
                </div>
            </>
        );
    }
    return <h2>Loading</h2>;
};

CommentsList.propTypes = {
    userPageId: PropTypes.string,
    handleRemove: PropTypes.func
};

export default CommentsList;
