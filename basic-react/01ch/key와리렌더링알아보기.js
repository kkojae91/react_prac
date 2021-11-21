const rootElement = document.querySelector("#root");

const todos = [
  [
    { id: 1, value: "wash dishes" },
    { id: 2, value: "Clean the bed" },
    { id: 3, value: "Running" },
    { id: 4, value: "Learning" },
  ],
  [
    { id: 4, value: "Learning" },
    { id: 1, value: "wash dishes" },
    { id: 2, value: "Clean the bed" },
    { id: 3, value: "Running" },
  ],
  [
    { id: 3, value: "Running" },
    { id: 4, value: "Learning" },
    { id: 1, value: "wash dishes" },
    { id: 2, value: "Clean the bed" },
  ],
  [
    { id: 2, value: "Clean the bed" },
    { id: 3, value: "Running" },
    { id: 4, value: "Learning" },
    { id: 1, value: "wash dishes" },
  ],
];

const App = () => {
  const [items, setItems] = React.useState(todos[0]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 3);
      // console.log("setInterval");
      setItems(todos[random]);
    }, 1000);

    return () => {
      // console.log("Clean Up");
      clearInterval(interval);
    };
  }, []);

  const handleDoneClick = (todo) => {
    // items에 todo가 일치 하지 않은 것들로 setItems한다.
    // setItems의 첫번째 인자는 items의 이전값을 가지고 있는 것!
    setItems((items) => items.filter((item) => item !== todo));
  };

  const handleRestoreClick = () => {
    setItems((items) => [
      ...items,
      todos.find((item) => !items.includes(item)),
    ]);
  };

  return (
    <>
      {items.map((todo) => (
        // key값은 최후의 수단으로는 index를 줘도 되지만, 해당하는 값이 가지고 있는 고유한 key값을 설정해야 정상적으로 작동할 수 있다.
        // index를 줬을 경우, 재배열이 되는 상황이라면 비효율적으로 동작한다.
        <div key={todo.id}>
          {/* handleDoneClick(인자값) 인자값을 전달 할 때는 () => handleDoneClick(todo) return 값으로 설정! */}
          <button onClick={() => handleDoneClick(todo)}>{todo.value}</button>
        </div>
      ))}
      <br />
      <br />
      <button onClick={handleRestoreClick}>Restore</button>
    </>
  );
};

ReactDOM.render(<App />, rootElement);
