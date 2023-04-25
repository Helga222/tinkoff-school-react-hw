import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./App.module.css";
import { loadAccounts, addAccount } from "./redux/actions";
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

  fetchAccounts = () => this.props.loadAccounts();

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
  loadAccounts: (): any => dispatch(loadAccounts()),
  addAccount: (payload: any): any => dispatch(addAccount(payload)),
});

export { App };

export default connect(mapStateToProps, mapDispatchToProps)(App as any);
