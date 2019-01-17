import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
        
            <div className="content">
                <a href="/" className="author">
                    Ed Sheeran
                </a>
                <div className="metadata">
                    <span className="date">11:00 AM</span>
                </div>

                <div className="text">
                    Nice blog post!
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;