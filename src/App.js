import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header';
import SignInSignOutPage from './pages/sign-in-up/sign-in-out';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import React from 'react';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, ()=>{
            console.log(this.state)
          })
        })
        console.log(this.state)
      } else {
        this.setState({currentUser:userAuth})
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/signin">
            <SignInSignOutPage />
          </Route>

        </Switch>
      </div>
    );
  }
}

export default App;
