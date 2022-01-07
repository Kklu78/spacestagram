import React, { useEffect, useState, useContext } from 'react'
import { Card, Loader, Dimmer, } from "semantic-ui-react";
import PostCard from './Card'
import { AppContext } from '../context/AppContext';




export default function Feed() {
    const {posts, loading, apiSearch} = useContext(AppContext)

    useEffect(() => {
        apiSearch()
    }, [])

    const postCards = posts.map((post, i) => <PostCard key={i} post={post} />)

    return (
        <>
            {loading ? (
          <Dimmer active inverted>
            <Loader size="large">Loading</Loader>
          </Dimmer>
      ) : 
        <Card.Group className={'CardGroup'} itemsPerRow={3} stackable>
            {postCards}
      </Card.Group>
}
        </>
    )    
}