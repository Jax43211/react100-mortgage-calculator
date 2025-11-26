function Button({ onClick }) {
  return (
    <button data-testid="submit" onClick={onClick}>
      Calculate
    </button>
  );
}

export default Button;
