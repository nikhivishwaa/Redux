import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreater } from "../state/index";
import { bindActionCreators } from "redux";

export default function Bank() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const balance = useSelector((state) => state.amount);

  //  method 2
  const { depositeMoney, withdrawMoney } = bindActionCreators(
    actionCreater,
    dispatch
  );

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center flex-column">
        <input
          type="number"
          className="w-50"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="d-flex justify-content-around w-50 my-4">
          <button
            className="btn btn-primary"
            onClick={() => {
              depositeMoney(parseInt(amount));
              setAmount(0);
            }}
          >
            Deposite
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              withdrawMoney(parseInt(amount));
              setAmount(0);
            }}
            disabled={balance === 0 || balance < amount}
          >
            Withdraw
          </button>
          {/* <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(actionCreater.depositeMoney(100));
            }}
          >
            Deposite
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(actionCreater.withdrawMoney(100));
            }}
          >
            Withdraw
          </button> */}
        </div>
      </div>
    </div>
  );
}
