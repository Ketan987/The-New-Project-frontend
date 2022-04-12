import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import ActionTypes from '../../constant/ActionTypes';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchStoriesList from '../../actions/storiesList'

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
                        <div >
                            <Grid container spacing={1} sx={{padding:1}}>
                                <Card style={{width: "100%"}}>
                                    <CardContent >
                                        <Button onClick={() => handleClick(story.post_title)}>
                                            {story.post_title}
                                        </Button>
                                        <div style={{float: "right"}}>
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
            <div style={{display: "flex"}}>
                <div style={{flex:"0.3"}}>
                {storiesList.list.map((story:any) => {
                    return (
                        <div >
                            <Grid container spacing={1} sx={{padding:1}}>
                                <Card style={{width: "100%"}}>
                                    <CardContent >
                                        <Button onClick={() => handleClick(story.post_title)}>
                                            {story.post_title}
                                        </Button>
                                        </CardContent>
                                </Card>
                            </Grid>
                        </div>
                    )
                })}
                </div>

                <div style={{ textAlign:"center", flex:"0.7"}}>
                <p>selected {storiesList.opend.post_title}</p> 
                </div>
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