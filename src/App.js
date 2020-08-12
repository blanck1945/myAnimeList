import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

//Components imports
import NavBar from './Componets/NavBar/NavBar';
import MainBar from './Componets/MainBar/MainBar';
import DownBar from './Componets/MainBar/DownBar';
import HomePage from './Componets/Home/HomePage';
import TopDisplayPage from './Pages/TopDisplayPage';
import UpFooter from './Componets/Footer/UpFooter';
import DownFooter from './Componets/Footer/DownFooter';
import { useDispatch } from 'react-redux';
import { fetchAnimeAndCharaShort } from './Store/actions.js/FooterActions';
import AddAnimeToDb from './Pages/AddAnimeTo/AddAnimeToDb';
import FullAnimeDisplay from './Pages/FullAnimeDisplay/FullAnimeDisplay';
import Charge from './Pages/Charge/Charge';
import Login from './Pages/LogPage/Login';
import SearchAnimePage from './Pages/SearchAnime/SearchAnimePage';
import SeasonalAnime from './Pages/SeasonalAnime/SeasonalAnime';
import Profile from './Pages/Profile/Profile';
import StudioSearch from "./Pages/StudioSearch/StudioSearch"
import SearchAwait from './Pages/StudioSearch/SearchAwait';
import AdminDashBoard from './AdminPages/AdminDashBoard/AdminDashBoard';
import AdminNav from './AdminPages/Layouts/AdminNav';
import NewsDisplay from './Pages/NewsDisplay/NewsDisplay';

//CSS Imports
import './App.css';
import "./Css/templates/NavBar.css"
import "./Css/templates/MainBar.css"
import Manga from './MangaComponents/Manga';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAnimeAndCharaShort())
  }, [])

  const permition = "visitor"
  return (
    <>
      {permition === "visitor" ?
        <Router>
          <div className="App">
            <NavBar />
            <MainBar />
            <DownBar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/topanime" component={TopDisplayPage} />
              <Route path="/adminAdd" component={AddAnimeToDb} />
              <Route path="/animeDis" component={FullAnimeDisplay} />
              <Route path="/animeSearch" component={SearchAnimePage} />
              <Route path="/sesonalAnime" component={SeasonalAnime} />
              <Route path="/setQuery" component={SearchAwait} />
              <Route path="/studioSearch" component={StudioSearch} />
              <Route path="/signIn" component={Login} />
              <Route path="/logIn" component={Login} />
              <Route path="/profile" component={Profile} />
              <Route path="/charge" component={Charge} />
              <Route path="/news" component={NewsDisplay} />
              <Route path="/mangas" component={Manga} />
              <Route path="/*">
                <Redirect to="/" />
              </Route>
            </Switch>
            <UpFooter />
            <DownFooter />
            <Switch>
            </Switch>
          </div>
        </Router>
        : <Router>
          <div className="AppAdmin">
            <AdminNav />
            <Switch>
              <Route path="/" component={AdminDashBoard} />
            </Switch>
          </div>
        </Router>}
    </>
  );
}

export default App;
