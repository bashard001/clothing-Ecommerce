import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import React, { lazy, Suspense } from 'react';
import { connect } from "react-redux";
import { setCurrentUser, setAsGuest, setModalState } from "./redux/user/user.actions";
import HomePage from './pages/homepage/homepage.component';
import Footer from './components/footer/footer';
import SignInPopup from './components/sign-in-popup/sign-in-popup';
import Loader from './components/loader/Loader';


const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout'))
const SignInSignOutPage = lazy(() => import('./pages/sign-in-up/sign-in-out'))

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser, setAsGuest } = this.props
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
        setAsGuest()
      } else {
        setCurrentUser(userAuth)
      }
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {

    return (
      <div>
        {
          this.props.isGuest ? "" : <SignInPopup show={this.props.modalShow} />
        }
        <Header />
        <Switch>
          <Suspense  fallback={<Loader/>}>
            <Route path="/" component={HomePage} exact />

            <Route path="/shop" component={ShopPage} />

            <Route exact path="/checkout" component={CheckoutPage} />

            <Route exact path="/signin" render={() => this.props.currentUser ?
              (<Redirect to="/" />) : (<SignInSignOutPage />)} />
          </Suspense>
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
  isGuest: user.isGuest,
  modalShow: user.modalShow
})
const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    setAsGuest: () => dispatch(setAsGuest()),
    setModalState: (modal) => dispatch(setModalState(modal))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
