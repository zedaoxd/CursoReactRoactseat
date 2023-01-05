import React, { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";
import TransactionsDetails from "./TransactionDetails/Index";

const TransactionsTable = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <TransactionsDetails
              key={t.id}
              amount={t.amount}
              category={t.category}
              createAt={t.createAt}
              title={t.title}
              type={t.type}
            />
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
