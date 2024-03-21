/* eslint-disable react/prop-types */
function Button({ children }) {
  return (
    <div className="w-24 h-10 shadow-lg items-center flex justify-center mt-10 mb-16">
      {children}
    </div>
  );
}

export default Button;
