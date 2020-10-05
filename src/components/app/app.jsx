import React from "react";
import Welcome from '../welcome/welcome';
import ArtistQuestion from '../artist-question/artist-question';
import GenreQuestion from '../genre-question/genre-question';
import Auth from '../auth/auth';
import Result from '../result/result';
import GameOver from '../game-over/game-over';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = ({numOfError}) => {

  return (<React.Fragment>
    <Welcome name={numOfError} />
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Welcome numOfError={numOfError} />
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestion />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestion />
        </Route>
        <Route exact path="/login">
          <Auth />
        </Route>
        <Route exact path="/result">
          <Result />
        </Route>
        <Route exact path="/lose">
          <GameOver />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.Fragment>);
};

App.propTypes = {
  numOfError: PropTypes.number
};

export default App;
