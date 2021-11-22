import "./App.css";
import axios from "axios";
// import { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-query";

function App() {
  // const [isLoading, setLoading] = useState(false);
  // const [isError, setError] = useState(false);
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setError(false);
  //     setLoading(true);
  //     try {
  //       const response = await axios("https://random.dog/woof.json");
  //       setData(response.data);
  //     } catch (error) {
  //       setError(true);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  // if (isError) return <h1> Error, try again!</h1>;
  // if (isLoading) return <h1> Loading...</h1>;

  //react query
  const { isLoading, error, data } = useQuery("dog", () =>
    axios("https://random.dog/woof.json")
  );

  // const [createUser] = useMutation((user) =>
  //   axios.post("http://apiexample.com/user", { user })
  // );

  if (error) return <h1> Error: {error.message} try again!</h1>;
  if (isLoading) return <h1> Loading...</h1>;

  console.log(data);

  return (
    <div>
      <img src={data.data.url} />
    </div>
  );
}

export default App;
