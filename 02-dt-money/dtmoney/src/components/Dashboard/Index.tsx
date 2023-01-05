import React from "react";
import Summary from "../Summary/Index";
import TransactionsTable from "../TransactionsTable/Index";
import { Container } from "./styles";

const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
};

export default Dashboard;
