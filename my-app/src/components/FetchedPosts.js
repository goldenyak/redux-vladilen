import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions";
import Post from "./Post";
import {postsReducer} from "../redux/postsReduser";
import Loader from "./Loader";

export default () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loading = useSelector(state => state.app.loading)

    if (loading === true) {
        return (
          <Loader />
        )
    }

    if (!posts.length) {
        return <button
            onClick={() => dispatch(fetchPosts())}
            className="btn btn-primary">Загрузить посты</button>
    }
    return posts.map(post => <Post post={post} key={post.id}/>)
}