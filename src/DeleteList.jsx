import { useState } from "react";

function DeleteList() {
  const initialItems = ["りんご", "バナナ", "ぶどう"];
  const [items, setItems] = useState(initialItems);

  const handleDelete = (indexToDelete) => {
    // index が一致しないものだけ残す
    const newItems = items.filter((_, index) => index !== indexToDelete);
    setItems(newItems);
  };

  return (
    <div>
      <h2>削除ボタン付きリスト</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => handleDelete(index)}>
              削除
            </button>
          </li>
        ))}
      </ul>
      {items.length === 0 && <p>すべて削除されました。</p>}
    </div>
  );
}

export default DeleteList;