import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// Views
import { Home, GameSession } from './views';

class App extends React.Component {

  // componentDidMount() {
  //   const socket = io('http://localhost');
  //   socket.on('news', function (data) {
  //     console.log(data);
  //     socket.emit('my other event', { my: 'data' });
  //   });
  // }

  render() {

    return (
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/gamesession" component={GameSession} />
      </Fragment>
    );
  }
}

export default App;