import React, { Component } from "react";
import { connect } from "react-redux";

import * as request from "./services/requestMock";
import styles from "./App.module.css";
import {
  loadAccountsAction,
  addAccount,
  loadAccountsSuccess,
  loadOperationsFailureAction,
} from "./redux/actions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Board from "./components/Board/Board";
import NotFoundPage from "./pages/NotFoundPage";
import AddNewCardPage from "./pages/AddNewCardPage";
import TimelinePage from "./pages/TimelinePage";
import store from "./redux/store/store";

class App extends Component<any, any> {
  componentDidMount() {
    this.fetchAccounts();
  }
  fetchAccounts = () => async (dispatch) => {
    dispatch(loadAccountsAction);
    try {
      const accounts = await request.getAccounts();
      dispatch(loadAccountsSuccess(accounts));
    } catch (error) {
      dispatch(loadOperationsFailureAction);
    }
  };

  handleSubmit = (newAccount) => this.props.addAccount(newAccount);

  render() {
    return (
      <Router>
        <Board accounts={this.props.accounts} />
        <div className={styles.pageContent}>
          <Routes>
            <Route path="/account/:accountId" element={<TimelinePage />} />
            <Route
              path="/actions/add_card"
              element={<AddNewCardPage handleSubmit={this.handleSubmit} />}
            />
            <Route path="/some_fake_page" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state: any): any => ({ accounts: state.accounts });
const mapDispatchToProps = (dispatch: any): any => ({
  loadAccountsAction: (): any => dispatch(loadAccountsAction()),
  addAccount: (payload: any): any => dispatch(addAccount(payload)),
});

export { App };

export default connect(mapStateToProps, mapDispatchToProps)(App);
