import { Container } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalNavigator from './components/globalNavigation.component/Navigation';
import HomeProfession from './components/profession.component/home.professional';

const One = () => {
    return (
        <div>
            this page
        </div>
    )
}

const Two = () => {
    return (
        <div>
            this page 02
        </div>
    )
}


export default () => {
    return (
        <div>
            <Router>
                <GlobalNavigator />
                {/* <NavigationLocal /> */}
                <Container>
                <Routes>
                    <Route path='/' element={<One />}></Route>
                    <Route path='/professions' element ={<HomeProfession />}></Route>
                    <Route path='/stories' element={<Two />}></Route>
                </Routes>
                </Container>
            </Router>
        </div>
    )
};