import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Grid } from 'semantic-ui-react';
import PostCard from '../components/PostCard'
import PostForm from '../components/PostForm'

import { AuthContext } from '../context/auth';

function Home() {
  const { user } = useContext(AuthContext);
  const { loading, data, error} = useQuery(FETCH_POSTS_QUERY);

  if(data) {
    console.log(data);
    const { getPosts: posts } = data;

    return (
      <Grid columns={3}>
        <Grid.Row className='page-title'>
          <h1>Recent posts</h1>
        </Grid.Row>
        <Grid.Row>
          {user && (
            <Grid.Column>
              <PostForm/>
            </Grid.Column>
          )}
          {loading ? (
            <h1>Loading posts...</h1>
          ) : (
            posts && posts.map(post => (
              <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                <PostCard post={post}/>
              </Grid.Column>
            ))
          )}
        </Grid.Row>
      </Grid>
    )
  }

  if(error) {
    console.log(error);
    return "error"; // blocks rendering
  }
}

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default Home;
