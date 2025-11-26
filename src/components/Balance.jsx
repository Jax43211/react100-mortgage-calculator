function Balance({ value, onChange }) {
  return (
    <input
      data-testid="balance"
      placeholder="Loan Balance"
      value={value}
      onChange={onChange}
    />
  );
}

export default Balance;
