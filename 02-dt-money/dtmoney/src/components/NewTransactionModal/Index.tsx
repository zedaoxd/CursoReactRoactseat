import closeImg from "../../assets/svgs/Close.svg";
import incomeImg from "../../assets/svgs/Entradas.svg";
import outcomeImg from "../../assets/svgs/Saidas.svg";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import Modal from "react-modal";
import { FormEvent, useContext, useState } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const NewTransactionModal = ({ isOpen, onRequestClose }: Props) => {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const { createTransaction } = useContext(TransactionsContext);

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();
    createTransaction({ title, amount, category, type });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
          type="text"
        />
        <input
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Valor"
          type="number"
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => setType("deposit")}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => setType("withdraw")}
          >
            <img src={outcomeImg} alt="Entrada" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Categorias"
          type="text"
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default NewTransactionModal;
