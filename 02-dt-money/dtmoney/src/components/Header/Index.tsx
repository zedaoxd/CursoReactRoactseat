import { useState } from "react";
import logoImg from "../../assets/svgs/Logo.svg";
import { Container, Content } from "./styles";

type Props = {
  handleOpenNewTransactionModal: () => void;
};

const Header = ({ handleOpenNewTransactionModal }: Props) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};

export default Header;
