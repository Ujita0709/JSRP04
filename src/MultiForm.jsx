import { useState } from "react";

function MultiForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
  });

  // name属性(name / age)を使って一つのハンドラで両方を更新
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,        // 既存の値を展開
      [name]: value,  // name に対応するプロパティだけ上書き
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`名前：${form.name}、年齢：${form.age}`);
  };

return (
    <div>
      <h2>複数入力のイベント処理</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <input
            type="text"
            name="name"
            placeholder="名前"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            placeholder="年齢"
            value={form.age}
            onChange={handleChange}
          />
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default MultiForm;
