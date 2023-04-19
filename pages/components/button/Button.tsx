import React from "react";

export default function Button({ onclick, babel, className }) {
  return (
    <div>
      <button onClick={onclick} className={className}>
        {babel}
      </button>
    </div>
  );
}
