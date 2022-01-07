import React, { useEffect, useState } from 'react'
import { Card, Icon, Image} from "semantic-ui-react";


export default function PostCard( {post} ) {

    const [liked, setLiked] = useState(false)
    const clickHandler = () => setLiked(!liked)
    const likedColor = liked ? 'red' : 'grey'
    const copy = post?.copyright ? <>{post.copyright} <Icon size='small' name={'copyright outline'} /></> : ''

    


    return (
            <Card style={{ 'border': '.5px solid', 'boxShadow': '1px 1px 2px #888888' }}>            
        <Card.Content>
            <Card.Header className={"ui center aligned"}>
                {post.title}
            </Card.Header>
            <Card.Content extra textAlign={"center"}>
            Date Posted: {post.date}
        </Card.Content>
        </Card.Content>
        <Image src={`${post.hdurl}`} wrapped ui={false} />
        <Card.Content>
            Description
            <Card.Description>{post.explanation}</Card.Description>
            {} 
        </Card.Content>
        <Card.Content extra textAlign={"center"}>
        <Icon name={"heart"} size="large" color={likedColor} onClick={clickHandler} />
            Like
        </Card.Content>
    </Card>
    )    
}