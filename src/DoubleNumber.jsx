import { useState } from "react";

function DoubleNumber() {
  const [num, setNum] = useState(1);

  const handleDouble = () => {
    setNum(num * 2);
  };

  return (
    <div>
      <h2>値を2倍にするボタン</h2>

      <p>現在の値：{num}</p>
      <button onClick={handleDouble}>2倍にする</button>
    </div>
  );
}

export default DoubleNumber;