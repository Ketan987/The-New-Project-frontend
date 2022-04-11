import { Container } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalNavigator from './components/globalNavigation.component/Navigation';
import HomeProfession from './components/profession.component/home.professional';
import StoriesHome from './components/stories.component/home.stories';


export default () => {
    return (
        <div>
            <Router>
                <GlobalNavigator />
                {/* <NavigationLocal /> */}
                <Container>
                <Routes>
                    <Route path='/' ></Route>
                    <Route path='/professions' element ={<HomeProfession />}></Route>
                    <Route path='/stories' element={<StoriesHome />}></Route>
                </Routes>
                </Container>
            </Router>
        </div>
    )
};