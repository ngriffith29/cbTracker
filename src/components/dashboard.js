import React, { useState, useEffect } from "react";
import { checkRef } from "./firebase";

function Dashboard() {
  const [count, setCount] = useState({ items: [] });
  const [total, setTotal] = useState({ screens: 0, Keys: 0 });
  let hi = [];
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    checkRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let tracker in items) {
        newState.push({
          reason: items[tracker].reason,
          teacher: items[tracker].teacher
        });
      }
      setCount({ items: newState });
    });
    // Update the document title using the browser API
    // checkRef.on('value',(snapshot) => {
    //     console.log(snapshot.val())
    // })   setCount({ items: newState });
  }, []);
  console.log(count.items);
  const okay = count.items.map(item => {
    if (item.reason === "Broken Screen") {
      console.log(total.screens + 1);
    }
    return (
      <div>
        <h2>{item.teacher}</h2>
        <h3>{item.reason}</h3>
      </div>
    );
  });

  return (
    <div>
      {count.items.map(item => {
        return <div>{okay}</div>;
      })}
    </div>
  );
}
export default Dashboard;
