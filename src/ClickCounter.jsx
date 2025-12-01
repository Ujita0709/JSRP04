import { useState } from "react";

function ClickCounter() {
  // count という状態を 0 で初期化
  const [count, setCount] = useState(0);

  // ボタンがクリックされたときに呼ばれる関数
  const handleClick = () => {
    setCount(count + 1); // count を 1 増やす
  };

  return (
    <div>
      <h2>クリックイベント</h2>
      <p>現在の回数：{count}</p>
      <button onClick={handleClick}>増やす</button>
    </div>
  );
}

export default ClickCounter;