import { Container } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalNavigator from './components/globalNavigation.component/Navigation';
import LocalNavigator from './components/localNavigationComponent/Navigation'
import HomeProfession from './components/profession.component/home.professional';
import StoriesHome from './components/stories.component/home.stories';
import Editor from './components/stories.component/creation.stories';
import HomePath from './components/path.component/home.path';
import SelectPath from './components/path.component/select.path';
import UserPage from './components/user.component/userPage';
import NotFoundPage from './components/NotFound';


export default () => {
    return (
        <div>
            <Router>
                <GlobalNavigator />
                <LocalNavigator />
                <Container>
                <Routes>
                    <Route path='/' ></Route>
                    <Route path='/professions' element ={<HomeProfession />}></Route>
                    <Route path='/stories' element={<StoriesHome />}></Route>
                    <Route path='/story/:action' element ={<Editor />} />
                    <Route path='/paths' element={<HomePath />}></Route>
                    <Route path='/path/:name' element={<SelectPath />}></Route>
                    <Route path='/user/:userName' element={<UserPage />}></Route>
                    <Route path='*' element={<NotFoundPage />}></Route>
                </Routes>
                </Container>
            </Router>
        </div>
    )
};