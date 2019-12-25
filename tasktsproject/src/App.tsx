import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import DisplayGit from "./components/DisplayGit";
import FavouritesUsers from "./components/FavouritesUsers";
interface State {
  name: string;
  hits: any;
  bites: any;
  hasError: boolean;
  user: any;
  login: string;
  avatar_url: string;
  public_repos: string;
  followers: string;
  following: string;
  _id:string;
  usersS:any;
  age:string;
}

class App extends React.Component<any, State> {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hits: [],
      hasError: false,
      user: "",
      login: "",
      avatar_url: "",
      public_repos: "",
      followers: "",
      following: "",
      bites: [],
      _id: "",
      age: "",
      usersS: [],
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }
  private save = (name: string) => {
    fetch(`https://api.github.com/users/${name}/repos`)
      .then(response => response.json())
      .then(hits => this.setState({ hits: hits }));
  };
  private user = (user: string) => {
    fetch(`https://api.github.com/users/${user}`)
      .then(response => response.json())
      .then(user =>
        this.setState({
          login: user.login,
          avatar_url: user.avatar_url,
          public_repos: user.public_repos,
          followers: user.followers,
          name: user.name
        })
      );
  };
  private following = (following: string) => {
    fetch(`https://api.github.com/users/${following}/following`)
      .then(response => response.json())
      .then(bites => this.setState({ bites: bites.slice(0, 16) }));
  };
  private users = (users: string) => {
    fetch(`http://localhost:5000/api/${users}`) 
    .then(response => response.json())
    .then(usersS => this.setState({ usersS: usersS }));
  };
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <ErrorBoundary>
          <div id='header'></div>
          <Navbar />
          <Route path='/DisplayGit' component={DisplayGit} />
          <Route path='/FavouritesUsers' component={FavouritesUsers} />
          <div className='mainPage'>
            <h1 className='GitViewer'>GitViewer</h1>
          </div>
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}

export default App;
