import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Alex"
                    timesAgo="Today at 6:00 AM"
                    content="This is a nice blog post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jane"
                    timesAgo="Yesterday at 6:00 AM"
                    content="This is a another nice blog post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Sam"
                    timesAgo="Today at 12:00 PM"
                    content="This is a nice blog post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));