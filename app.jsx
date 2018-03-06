var PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31, 
    id: 1
  },
  {
    name: "Andrew Chalkey",
    score: 33, 
    id: 2,
  },
  {
    name: "Alena Holligan",
    score: 42, 
    id: 3
  }
]

function Header(props) {
  return (
    <div className="header">
        <h1>{props.title}</h1>
      </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

// converted counter function into a component class.
// note that now the props.score must be this.props.score
var Counter = React.createClass({
  propTypes:{

  },

  getInitialState: function() {
    return {
      score: 0
    }
  },

  render: function() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <div className="counter-score"> {this.state.score} </div>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
});

// replace this.props.score with this.state.score, since score is our initial "state" object, then remove score from propTypes
// you can move the prop types into the class, instead of declaring them separately, if you want.

function Player(props) {
  return(
    <div className="player">
      <div className="player-name">
        {props.name}
       </div>
      <div className="player-score">
        <Counter />
      </div>
    </div>
  );
}
// removed score prop from <Counter /> because it's not a prop anymore, it's a state.

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
}

function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />
      <div className="players">
        {props.players.map(function(player) {
          return <Player name={player.name} score={player.score} key={player.id}/>;
          })
        }
      </div>
    </div>
  );
}

Application.propTypes = {
  //title: React.PropTypes.string.isRequired,
  title: React.PropTypes.string, 
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
      id: React.PropTypes.number.isRequired
    })).isRequired
  
};

Application.defaultProps = {
  title: "Scoreboard"
};

ReactDOM.render(<Application players={PLAYERS}/>, document.getElementById('container'));
//ReactDOM.render(<Application title="My Scoreboard"/>, document.getElementById('container'));