import React from "react";
import MaskedInput from "react-maskedinput";

import Button from "../Button/Button";

import styles from "./NewAccountForm.module.css";

export default class NewAccountForm extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      cardNumber: "",
      month: "",
      year: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.state.cardNumber || !this.state.month || !this.state.year) {
      return;
    }

    const number = `Привязанная карта *${this.state.cardNumber.split(" ")[3]}`;

    const newAcc = {
      id: Date.now(),
      title: number,
      type: "external",
    };
    this.props.handleSubmit(newAcc);
    this.setState({ cardNumber: "", month: "", year: "" });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Привязка банковской карты</h2>
        <div className={styles.cardForm}>
          <MaskedInput
            mask="1111 1111 1111 1111"
            name="cardNumber"
            value={this.state.cardNumber}
            onChange={this.handleInputChange}
            placeholder="Номер карты"
            className={styles.input}
          />
          <div className={styles.validThruFieldset}>
            <label className={styles.label}>VALID THRU</label>
            <input
              className={`${styles.input} ${styles.inputDate}`}
              placeholder="MM"
              name="month"
              onChange={this.handleInputChange}
              value={this.state.month}
            />
            <input
              className={`${styles.input} ${styles.inputDate}`}
              placeholder="YY"
              name="year"
              onChange={this.handleInputChange}
              value={this.state.year}
            />
          </div>

          <Button type="submit">Привязать</Button>
        </div>
      </form>
    );
  }
}
