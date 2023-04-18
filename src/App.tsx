import React, { Component, Fragment } from "react";

import * as request from "./services/requestMock";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Board from "./components/Board/Board";
import NotFoundPage from "./pages/NotFoundPage";
import AddNewCardPage from "./pages/AddNewCardPage";
import TimelinePage from "./pages/TimelinePage";

class App extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      accounts: null,
    };
  }

  handleSubmit = (newAccount) => {
    this.setState({
      accounts: [...this.state.accounts, newAccount],
    });
  };

  componentDidMount() {
    request
      .getAccounts()
      .then((accounts) => this.setState({ accounts }))
      .catch((err) => console.error(err));
  }


  render() {

      return (
        <Router>
          {this.state.accounts && <Board accounts={this.state.accounts} />}
          <div className={styles.pageContent}>
            <Routes>
              <Route
                path="/account/:accountId"
                element={<TimelinePage/>}
              />
              <Route
                path="/actions/add_card"
                element={<AddNewCardPage handleSubmit={this.handleSubmit} />}
              />
              <Route path="/some_fake_page" element={<NotFoundPage/>} />
            </Routes>
          </div>
        </Router>
      );
  }
}

export default App;
