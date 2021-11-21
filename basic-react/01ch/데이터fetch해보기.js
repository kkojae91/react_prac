const rootElement = document.querySelector("#root");

const App = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.data.people);
        setData(myJson.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  // data 송수신중 error가 발생할 경우
  if (error !== null) {
    return <p>There is some Error!</p>;
  }

  // data === null 일 경우를 설정하지 않을 경우 data 불러오기전에 호출이 일어날 수 있기 때문에 error 발생
  if (data === null) {
    return <p>Loading...</p>;
  }

  // error, data 모두 문제 없이 불러와질 경우
  return (
    <div>
      <p>People</p>
      {data.people.map((person) => (
        <div>
          <span>name: {person.name}</span>
          <span> age: {person.age}</span>
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
