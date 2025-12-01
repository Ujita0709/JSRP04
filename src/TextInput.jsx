import { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    // e.target.value に入力中の文字が入っている
    setText(e.target.value);
  };

  return (
    <div>
      <h2>テキスト入力イベント</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="入力してみてください"
      />
      <p>入力値：{text}</p>
    </div>
  );
}

export default TextInput;