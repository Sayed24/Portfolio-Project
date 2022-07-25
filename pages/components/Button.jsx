export const Button = ({ text }) => {
  return (
    <button
      className='btn btn-primary'
      onClick={(e) => (e.target.innerText = 'Clicked!')}
    >
      {text}
    </button>
  );
};
