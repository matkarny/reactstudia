import React from "react";
import Image from "./Image";
import Title from "./Title";
import PostBody from "./PostBody";

const Post = ( { name, image, text } ) => (
    <div>
    <Image sorc={image}/>
    <Title titled={name}/>
    <PostBody text={text} />
    </div>
);

export default Post