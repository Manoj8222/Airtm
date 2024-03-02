import React from "react";

function Button({ label, className, state }) {
  return (
    <div>
      <button className={className} onClick={!state}>
        {label}
      </button>
    </div>
  );
}

export default Button;
