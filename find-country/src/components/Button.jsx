/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

function Button({ children, to }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (to === -1) {
      window.history.back(); // Navigates to the previous page
    } else if (to) {
      navigate(to);
    }
  };
  return (
    <div
      className="w-24 h-10 shadow-lg items-center flex justify-center mt-10 mb-16 cursor-pointer hover:-translate-y-1 transition-all ease-in"
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

export default Button;
