import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalNavigator from './components/globalNavigation.component/Navigation';
import NavigationLocal from './components/localNavigationComponent/Navigation';

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
                <NavigationLocal />
                <Routes>
                    <Route path='/'>
                        <Route index element={<One />}></Route>
                        <Route path="professions" element={<Two />}>
                            <Route index element={<Two />}></Route>
                            <Route path=":professionId" element={<Two />}></Route>
                            <Route path="edit" element={<Two />}></Route>
                        </Route>
                        <Route path="stories" element={<One />}>
                            <Route path=":storyId" element={<One />}></Route>
                            <Route path="edit" element={<One />}></Route>
                        </Route>

                    </Route>
                </Routes>
            </Router>

        </div>
    )
};