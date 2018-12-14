import React from "react";

const PostBody = ( {text}) =>
    <section className="jumbotron text-center">
        <div className="container">
           <p className="lead text-muted">
               {text}
            </p>
        </div>
    </section>

export default PostBody