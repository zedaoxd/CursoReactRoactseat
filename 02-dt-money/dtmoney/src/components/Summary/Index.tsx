import { useContext } from "react";
import incomeImg from "../../assets/svgs/Entradas.svg";
import outcomeImg from "../../assets/svgs/Saidas.svg";
import totalImg from "../../assets/svgs/Total.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
};

export default Summary;
