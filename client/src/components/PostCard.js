import React from 'react';
import { Card, Icon, Label, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function PostCard({ post: {body, createdAt, id, username, likeCount, commentCount, likes}}) {

    function likePost() {
        console.log('Hi');
    }

    function commentOnPost() {
        console.log('Hello')
    }
    return (
        <Card fluid>
            <Card.Content>
                <Image
                floated="right"
                size="mini"
                src="https://react.semantic-ui.com/images/avatar/large/molly.png"
                />
                <Card.Header>{username}</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`} >
                {moment(createdAt).fromNow(true)}
                </Card.Meta>
                <Card.Description>{body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="ui labeled button" onClick={likePost} tabIndex="0">
                    <div className="ui teal button">
                        <i className="heart icon"></i>
                    </div>
                    <a className="ui basic teal left pointing label">
                        {likeCount}
                    </a>
                </div>

                <div className="ui labeled button" onClick={commentOnPost} tabIndex="0">
                    <div className="ui blue button">
                        <i className="comments icon"></i>
                    </div>
                    <a className="ui basic blue left pointing label">
                        {commentCount}
                    </a>
                </div>
            </Card.Content>
        </Card>
    )
}

export default PostCard