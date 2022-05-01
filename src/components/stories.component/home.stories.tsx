import { Button, Card, CardContent, Grid, Typography, Container } from '@mui/material';
import ActionTypes from '../../constant/ActionTypes';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchStoriesList} from '../../actions/storiesList'
import { useNavigate } from "react-router-dom";
import LocalNavbar from "../localNavigationComponent/Navigation"

const StoriesHome = () => {
    const dispatch = useDispatch();
    const storiesList = useSelector((state:any)=> state.storiesReducer);
    const [view, setView] = useState(false);
    const navigate = useNavigate();
    
    console.log(storiesList);
    const handleClick = (title: string) => {
        dispatch({type: ActionTypes.SELECT_STORY_ACTION, payload: {selected: storiesList.list.find((story:any) => story.post_title === title)}})
        setView(true);
    }


    const ListView = () => {
        return (
            <div >
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
            <div style={{display: "flex", height:"100vh"}}>
                <div style={{flex:"0.3", overflowX:"scroll"}}>
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

                <div style={{ textAlign:"center", flex:"0.7", border: '1px solid #4CAF50', overflowX:"scroll"}}>
                    <p>selected {storiesList.opend.post_title}</p> 
                    <div dangerouslySetInnerHTML={{__html: storiesList.opend.post_content}}></div>
                    <Button onClick={() => {
                        navigate(`/story/edit?id=${storiesList.opend._id}`)
                    } 
                    }>EDIT</Button>
                </div>
            </div>
        )
    };

    useEffect( () => {
        fetchStoriesList(dispatch);
    }, [])

    return (
        <div>
            <Container maxWidth="lg">
            <LocalNavbar />
            </Container>
            
            {view ? <HalfAndHalfView /> : <ListView />}
        </div>
    )
}
export default StoriesHome;