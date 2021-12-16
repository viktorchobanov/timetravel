function Button({
    className,
    text,
    onClick
}) {
  return (
    <button 
      className="bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded custom-btn"
      onClick={onClick}
    >
        Time Travel
    </button>
  );
}

export default Button;
