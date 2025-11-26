function Term({ value, onChange }) {
  return (
    <>
      <select data-testid="term" value={value} onChange={onChange}>
        <option value={15}>15 years</option>
        <option value={30}>30 years</option>
      </select>
    </>
  );
}

export default Term;
