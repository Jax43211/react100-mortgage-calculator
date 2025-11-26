function Output({ payment }) {
  return <div data-testid="output">${payment.toFixed(2)} is your payment</div>;
}

export default Output;
