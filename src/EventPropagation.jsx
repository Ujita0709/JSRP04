function EventPropagation() {
  const handleParentClick = () => {
    console.log("親がクリックされました");
  };

  const handleChildClick = (e) => {
    // 親へのイベント伝播を止める
    e.stopPropagation();
    console.log("子がクリックされました");
  };

  return (
    <div
      onClick={handleParentClick}
      style={{ padding: 20, backgroundColor: "#eef" }}
    >
      親領域（ここをクリックすると親のログ）
      <div
        onClick={handleChildClick}
        style={{
          marginTop: 10,
          padding: 20,
          backgroundColor: "#ddf",
        }}
      >
        子領域（ここをクリックすると子のみのログ）
      </div>
    </div>
  );
}

export default EventPropagation;