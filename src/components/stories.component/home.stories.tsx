import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import ActionTypes from '../../constant/ActionTypes';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchStoriesList from '../../actions/storiesList';

const StoriesHome = () => {
    const dispatch = useDispatch();
    const storiesList = useSelector((state:any)=> state.storiesReducer);
    const [view, setView] = useState(false);
    
    console.log(storiesList);
    const handleClick = (title: string) => {
        dispatch({type: ActionTypes.SELECT_STORY_ACTION, payload: {selected: storiesList.list.find((story:any) => story.post_title === title)}})
        setView(true);
    }

    const ListView = () => {
        return (
            <div>
                {storiesList.list.map((story:any) => {
                    return (
                        <div>
                            <Grid container spacing={1}>
                                <Card>
                                    <CardContent>
                                        <Button onClick={() => handleClick(story.post_title)}>
                                            {story.post_title}
                                        </Button>
                                        <div>
                                            <Typography color="text.secondary">
                                                {story.post_like.length} likes
                                            </Typography>
                                            <Typography color="text.secondary">
                                                {story.updatedAt}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </div>
                    )
                })}
            </div>
        )
    };

    const HalfAndHalfView = () => {
        return (
            <div>
                <p>selected {storiesList.opend.post_title}</p> 
            </div>
        )
    };

    useEffect( () => {
        fetchStoriesList(dispatch);
    }, [])

    return (
        <div>
            <p>it's working</p>
            {view ? <HalfAndHalfView /> : <ListView />}
        </div>
    )
}
export default StoriesHome;