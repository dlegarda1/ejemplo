import React, { useRef } from 'react';

function Enfoque() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Enfocar input</button>
    </div>
  );
}

export default Enfoque;