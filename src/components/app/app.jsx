import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import ArtistQuestion from '../artist-question/artist-question';
import Auth from '../auth/auth';
import Game from '../game/game';
import GameOver from '../game-over/game-over';
import GenreQuestion from '../genre-question/genre-question';
import Result from '../result/result';
import Welcome from '../welcome/welcome';


const App = (props) => {

  const {numOfError, questions} = props;
  const [firstQuestion, secondQuestion] = questions;

  return (<React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <Welcome
              onPlayButtonClick={() => history.push(`/game`)}
              numOfError={numOfError}
            />
          )}
        />
        <Route exact path="/dev-artist">
          <ArtistQuestion
            question={secondQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestion
            question={firstQuestion}
            onAnswer={() => {}}
          />
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
        <Route exact path="/game">
          <Game
            numOfError={numOfError}
            questions={questions}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.Fragment>);
};

App.propTypes = {
  numOfError: PropTypes.number,
  questions: PropTypes.array.isRequired,
};

export default App;
