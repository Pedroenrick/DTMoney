import { CardBody } from "./styles";
interface CardProps {
  title: string;
  icon: string;
  alt: string;
  valor: number;
  color?: string;
}

export function Card(props: CardProps) {
  return (
    <CardBody className={props.color}>
      <header>
        <p>{props.title}</p>
        <img src={props.icon} alt={props.alt} />
      </header>
      <strong>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(props.valor)}
      </strong>
    </CardBody>
  );
}
