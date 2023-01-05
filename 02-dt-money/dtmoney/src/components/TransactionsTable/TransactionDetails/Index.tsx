type Props = {
  title: string;
  type: string;
  category: string;
  amount: number;
  createAt: string;
};

const TransactionsDetails = (props: Props) => {
  return (
    <tr>
      <td>{props.title}</td>
      <td className={props.type}>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(props.amount)}
      </td>
      <td>{props.category}</td>
      <td>
        {new Intl.DateTimeFormat("pt-BR").format(new Date(props.createAt))}
      </td>
    </tr>
  );
};

export default TransactionsDetails;
