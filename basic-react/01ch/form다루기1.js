const rootElement = document.querySelector("#root");

const App = () => {
  const handleSubmit = (event) => {
    // 해당 이벤트의 기본 동작을 멈춘다.
    event.preventDefault();

    // dir document 구조를 확인할 수 있게 해준다.
    // event.target.elements -> 에 form tag 구조를 확인할 수 있다.
    console.dir(event.target.elements);

    alert(
      `LastName: ${event.target.elements.lname.value} FirstName: ${event.target.elements.fname.value}
      choosed Car: ${event.target.elements.cars.value}
      `
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* label의 for -> htmlFor로 치환해주어야한다. */}
      <label htmlFor="fname">First name:</label>
      <br />
      {/* input의 value -> defaultValue로 치환해주어야한다. */}
      <input type="text" id="fname" name="fname" defaultValue="John" />
      <br />
      <label htmlFor="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname" defaultValue="Doe" />
      <br />
      <br />
      <label htmlFor="cars">Choose a car:</label>
      <select id="cars" name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>

      <input type="submit" value="Submit" />
    </form>
  );
};

ReactDOM.render(<App />, rootElement);
