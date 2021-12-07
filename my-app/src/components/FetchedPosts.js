import React from "react";

export default ({posts}) => {
    if (!posts.length) {
        return <button className="btn btn-primary">Загрузить посты</button>
    }
    return (
        <div>{posts}</div>
    )
}