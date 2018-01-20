import React from 'react'

export const PostList=(props)=>(
    <ul>
        {
            props.posts.map(post =>(
            <li key={post.id}>
                {post.description}
                <button onClick={() => props.deletePost(post.id)}>Delete</button>
            </li>
            )
        )}
        </ul>
);