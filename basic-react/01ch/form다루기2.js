const rootElement = document.querySelector("#root");

const App = () => {
  const [message, setMessage] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(phoneNumber);
  };

  const handleChange = (event) => {
    // 변수.startsWith(0) -> 변수의 첫 글자가 0으로 시작하는지 체크
    if (event.target.value.startsWith(0)) {
      setPhoneNumber(event.target.value);
      setMessage("Phone Number is valid");
    } else if (event.target.value.length === 0) {
      setPhoneNumber("");
      setMessage("");
    } else {
      setMessage("Phone Number should starts with 0");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="phone">Phone Number</label>
      <br />
      {/* input 값을 컨트롤하기 위해서는 value 값에 설정해둔 phoneNumber를 입력되게 하면 된다. */}
      <input
        id="phone"
        name="phone"
        onChange={handleChange}
        value={phoneNumber}
      />
      <p>{message}</p>
      <br />
      <br />
      <button
        type="submit"
        // disabled 속성으로 submit 버튼을 활성화 하고, 비 활성화 할 수 있다.
        disabled={
          phoneNumber.length === 0 || message !== "Phone Number is valid"
        }
      >
        Submit
      </button>
    </form>
  );
};

ReactDOM.render(<App />, rootElement);
