import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setState(res.data);
    });
  }, []);

  const obj = {
    fname: "Rahul",
    lname: "Dubey",
    occ: "Software Developer",
    place: "Ahmedabad",
    drink: () => {
      console.log("Drink water daily");
    },
    nested: {
      mobile: "sanmsung",
      laptop: "acer"
    }
  };

  return (
    <div className="App">
      <h1>React best practice - Optional Chaining</h1>
      {/* Optional Chaining API call */}
      {state?.map((value) => {
        return <h1>{value.title}</h1>;
      })}

      {/*General Methord for API Call if state is "[]"*/}

      {/* {state&&state.map((value) => {
        return <h1>{value.title}</h1>;
      })} */}

      {console.log(obj.fname)}
      {console.log("nested obj checking :Mobile name", obj?.nested?.mobile)}
      {console.log("Function calling which is inside of Obj", obj.drink?.())}
    </div>
  );
}
