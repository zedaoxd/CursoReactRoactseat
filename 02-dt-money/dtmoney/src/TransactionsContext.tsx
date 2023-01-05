import React, { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

type Transaction = {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createAt: string;
};

type TransactionInput = Omit<Transaction, "id" | "createAt">;

type TransactionsContextType = {
  transactions: Transaction[];
  createTransaction: (t: TransactionInput) => void;
};

export const TransactionsContext = createContext<TransactionsContextType>(
  {} as TransactionsContextType
);

type Props = {
  children: ReactNode;
};

export const TransactionsProvider = ({ children }: Props) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  const createTransaction = (transaction: TransactionInput) => {
    api.post("/transactions", transaction);
  };

  const value = { transactions, createTransaction };

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  );
};
