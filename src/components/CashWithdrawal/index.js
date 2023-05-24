import "./index.css";
import { Component } from "react";
import Denomination from "../Denomination";

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  };
  withdrawCash = (value) => {
    if (this.state.amount > 0) {
      this.setState((e) => ({ amount: e.amount - value }));
    }
  };
  render() {
    const { denominationsList } = this.props;
    const { amount } = this.state;

    return (
      <div className="card">
        <div className="profile">
          <div className="profile-pic">
            <p className="initial">s</p>
          </div>
          <p className="name">Sarah Williams</p>
        </div>
        <div className="balance">
          <div>
            <p>Your Balance</p>
          </div>
          <div>
            <p>
              <p className="amount">{amount}</p> <br />
              In Rupees
            </p>
          </div>
        </div>
        <p className="name withdraw-heading">Withdraw</p>
        <p className="denomination-description">CHOOSE SUM (IN RUPEES)</p>
        <ul className="list-container">
          {denominationsList.map((item) => {
            return (
              <Denomination
                item={item}
                key={item.id}
                withdrawCash={this.withdrawCash}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CashWithdrawal;
