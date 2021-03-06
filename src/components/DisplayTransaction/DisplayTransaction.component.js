import React, { useCallback, useEffect, useState } from "react";

import "./DisplayTransaction.css";

const DisplayTransaction = (props) => {
  const {
    data = {},
    // selectWallets,
    // onSelectedWallet 
  } = props;

  return (
    <>
      <div className="wallet-container w3-white w3-round-xlarge">
        <div className="transaction-container">
          <h1>Detail Transaction</h1>
          <table className="table-transaction">
            <thead>
              <tr>
                <th className="table-style">Transaction Type</th>
                <th className="table-style">Amount</th>
                <th className="table-style">To Wallet</th>
                <th className="table-style">Description</th>
                <th className="table-style">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((transactionDetail) => (
                <tr>
                  <td className="table-style">{transactionDetail.type}</td>
                  <td className="table-style">{transactionDetail.amount}</td>
                  <td className="table-style">{transactionDetail.walletToId}</td>
                  <td className="table-style">{transactionDetail.note}</td>
                  <td className="table-style">{transactionDetail.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default DisplayTransaction;