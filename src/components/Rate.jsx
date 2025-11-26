function Rate({ value, onChange }) {
  return (
    <input
      data-testid="rate"
      type="number"
      step="0.01"
      placeholder="Loan Rate"
      value={value}
      onChange={onChange}
    />
  );
}

export default Rate;
