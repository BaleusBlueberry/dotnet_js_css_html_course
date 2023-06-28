import { useEffect, useState } from "react";

function GitHub() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Simonsbs").then((response) =>
      response.json().then((data) => setData(data))
    );
  }, []);

  if (data == null) {
    return <>No data yet</>;
  }

  return (
    <>
      <h1>Guthub API data</h1>
      {/* <pre>{JSON.stringify(data, null, 3)}</pre> */}
      login: {data.Login}
      <br />
      <a href={data.url}>link</a>
      <br />
      <img src={data.avatar_url} alt="img"></img>
    </>
  );
}

export { GitHub };
