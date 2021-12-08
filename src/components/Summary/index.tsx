import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { Container } from "./styles";
import { Card } from "./../Card/index";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === "deposit") {
        accumulator.deposits += transaction.amount;
        accumulator.total += transaction.amount;
      } else {
        accumulator.withdraws += transaction.amount;
        accumulator.total -= transaction.amount;
      }
      return accumulator;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <Card
        title="Entradas"
        icon={incomeImg}
        alt="Entradas"
        valor={summary.deposits}
      />
      <Card
        title="Saídas"
        icon={outcomeImg}
        alt="Saídas"
        valor={summary.withdraws}
      />
      <Card
        color="highlight-background"
        title="Total"
        icon={totalImg}
        alt="Total"
        valor={summary.total}
      />
    </Container>
  );
}
