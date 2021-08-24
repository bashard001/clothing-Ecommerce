import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header';
import SignInSignOutPage from './pages/sign-in-up/sign-in-out';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import React from 'react';
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import CheckoutPage from './pages/checkout/checkout';
import Footer from './components/footer/footer';
import SignInPopup from './components/sign-in-popup/sign-in-popup';


class App extends React.Component {
  
  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
        console.log(this.state)
      } else {
        console.log("hello")
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div >
        {
         this.props.currentUser ? (<Redirect to="/" />) : <SignInPopup />
        }
        
        <Header />
        <Switch>
          <Route path="/" exact>
            
            <HomePage  />
          </Route>

          <Route path="/shop" component={ShopPage} />

          <Route exact path="/checkout" component={CheckoutPage} />

          <Route exact path="/signin" render={() => this.props.currentUser ?
             (<Redirect to="/" />) : (<SignInSignOutPage/>)}  />

        </Switch>
        <Footer />

      </div>
    );
  }
}

const mapStateToProps = ({user})=>({
  currentUser: user.currentUser,
  isGuest: user.isGuest
})
const mapDispatchToProps = dispatch => ({
setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App);
