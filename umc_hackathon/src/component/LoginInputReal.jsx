import React from "react";

const LoginInput = ({ placeholder, type, value, onChange }) => {
  const handleInputValueChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputValueChange}
        style={{
          width: "256px",
          height: "40px",
          borderRadius: "20px",
          backgroundColor: "#ECECEC",
          border: "none",
          padding: "5px",
        }}
      />
    </>
  );
};

export default LoginInput;
