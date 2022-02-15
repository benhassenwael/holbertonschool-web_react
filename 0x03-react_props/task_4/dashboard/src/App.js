import "./App.css";
import { Header } from "./Header/Header";
import Login from "./Login/Login";
import Footer from "./Footer/Footer";
import { Notifications } from "./Notifications/Notifications";
import { Fragment } from "react";
import PropTypes from "prop-types";
import CourseList from "./CourseList/CourseList";

function App({ isLoggedIn }) {
  return (
    <Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
