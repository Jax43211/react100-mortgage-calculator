import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Balance from "./components/Balance.jsx";
import Rate from "./components/Rate.jsx";
import Term from "./components/Term.jsx";
import Button from "./components/Button.jsx";
import Output from "./components/Output.jsx";

function App() {
  const [balance, setBalance] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState(15);
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMonthlyPayment = () => {
    const numBalance = Number(balance);
    const numRate = Number(rate);
    const monthlyRate = numRate / 100 / 12;
    const numberOfPayments = term * 12;

    const payment =
      numBalance *
      ((monthlyRate * (1 + monthlyRate) ** numberOfPayments) /
        ((1 + monthlyRate) ** numberOfPayments - 1));

    setMonthlyPayment(payment);
  };

  return (
    <>
      <Header />
      <Balance
        value={balance}
        onChange={(e) => setBalance(Number(e.target.value))}
      />
      <Rate value={rate} onChange={(e) => setRate(Number(e.target.value))} />
      <Term value={term} onChange={(e) => setTerm(Number(e.target.value))} />
      <Button onClick={calculateMonthlyPayment} />
      {monthlyPayment && <Output payment={monthlyPayment} />}
    </>
  );
}

export default App;
