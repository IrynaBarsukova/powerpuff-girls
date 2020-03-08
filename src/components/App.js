import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header/Header';
import Home from './Home/Home';
import Show from '../pages/Show/Show';
import Episode from '../pages/Episode/Episode';
import PageNotFound from './PageNotFound/PageNotFound';
import store from '../store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/shows/:showId" exact>
                        <Show />
                    </Route>
                    <Route path="/shows/:showId/episodes/:episodeId">
                        <Episode />
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
