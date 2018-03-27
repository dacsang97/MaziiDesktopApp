import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import Kana from './pages/Kana';
import { Kotoba } from './pages/Kotoba';
import { KanjiBasic } from './pages/KanjiBasic';
import { KanjiAdvance } from './pages/KanjiAdvance';
import { Phrase } from './pages/Phrase';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

export const routes = () => (
  <div>
    <Route exact={true} path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/kana" component={Kana} />
    <Route path="/kotoba" component={Kotoba} />
    <Route path="/kanji-basic" component={KanjiBasic} />
    <Route path="/kanji-advance" component={KanjiAdvance} />
    <Route path="/phrase" component={Phrase} />
  </div>
);
