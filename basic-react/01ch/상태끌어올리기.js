const rootElement = document.querySelector("#root");

const Id = ({ handleIdChange }) => {
  return (
    <>
      <label htmlFor="id">ID : </label>
      <input type="text" id="id" name="id" onChange={handleIdChange} />
    </>
  );
};

const Password = ({ handlePwChange }) => {
  return (
    <>
      <label htmlFor="password">PW : </label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={handlePwChange}
      />
    </>
  );
};

// 상태관리를 App이 하고, <Id />, <Password /> Component에 props로 내려준다.
const App = () => {
  const [id, setId] = React.useState("");
  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const [pw, setPw] = React.useState("");
  const handlePwChange = (event) => {
    setPw(event.target.value);
  };

  const handleLoginClick = () => {
    alert(`id: ${id}, pw: ${pw}`);
  };

  return (
    <>
      <Id handleIdChange={handleIdChange} />
      <br />
      <Password handlePwChange={handlePwChange} />
      <br />
      <br />
      <button
        disabled={!id.length > 0 || !pw.length > 0}
        onClick={handleLoginClick}
      >
        Login
      </button>
    </>
  );
};

ReactDOM.render(<App />, rootElement);
