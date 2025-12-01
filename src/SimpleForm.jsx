import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    // ページのリロード（デフォルトのフォーム送信）を止める
    e.preventDefault();
    alert(`送信されました: ${name}`);
  };

  return (
    <div>
      <h2>フォーム送信イベント</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="名前を入力"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default SimpleForm;