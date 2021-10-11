import { lazy, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Spinner from '../spinner/Spinner';
import AppHeader from '../appHeader/AppHeader';
// import { ComicsPage, MainPage, Page404, SingleComicPage } from '../pages';


// динамические импорты
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));
const Page404 = lazy(() => import('../pages/404'));

const App = () => {

    return (
        <HashRouter>
            <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner />}>
                        <Switch>
                            <Route exact path='/'>
                                <MainPage />
                            </Route>

                            <Route exact path='/comics'>
                                <ComicsPage />
                            </Route>

                            <Route exact path='/comics/:comicId'>
                                <SingleComicPage />
                            </Route>

                            <Route exact path='*'>
                                <Page404 />
                            </Route>
                        </Switch>
                    </Suspense>
                </main>
            </div>
        </HashRouter>
    )
}

export default App;