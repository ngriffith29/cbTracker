import React, { useState, useEffect } from "react";
import { checkRef } from "./firebase";
import { Bar, Doughnut } from "react-chartjs-2";
function Dashboard() {
  const [count, setCount] = useState({ items: [] });
  const [total, setTotal] = useState({ screens: 0, Keys: 0 });
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    checkRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let tracker in items) {
        newState.push({
          reason: items[tracker].reason,
          teacher: items[tracker].teacher,
          screen: items[tracker].screen,
          keys: items[tracker].keys,
          battery: items[tracker].battery,
          trackpad: items[tracker].trackpad,
          other: items[tracker].other,
          six: items[tracker].six,
          seven: items[tracker].seven,
          eight: items[tracker].eight
        });
      }
      setCount({ items: newState });
    });
    // Update the document title using the browser API
    // checkRef.on('value',(snapshot) => {
    //     console.log(snapshot.val())
    // })   setCount({ items: newState });
  }, []);
  //defining the broken arrays
  let screenCount = [0];
  let keyCount = [0];
  let wc = [0];
  let tp = [0];
  let o = [0];
  let six = [0];
  let seven = [0];
  let eight = [0];
  //pushing broken data into array
  count.items.map(e => keyCount.push(e.keys));
  count.items.map(e => screenCount.push(e.screen));
  count.items.map(e => wc.push(e.battery));
  count.items.map(e => tp.push(e.trackpad));
  count.items.map(e => o.push(e.other));
  count.items.map(e => six.push(e.six));
  count.items.map(e => seven.push(e.seven));
  count.items.map(e => eight.push(e.eight));
  console.log(six);

  //Calculating Totals for bar chart
  const BrokenScreenTotal = screenCount.reduce((c, t) => c + t);
  const KeyCountTotal = keyCount.reduce((e, a) => e + a);
  const BatteryTotal = wc.reduce((e, a) => e + a);
  const TrackpadTotal = tp.reduce((e, a) => e + a);
  const OtherTotal = o.reduce((e, a) => e + a);
  const SixTotal = six.reduce((e, a) => e + a);
  const SevenTotal = seven.reduce((e, a) => e + a);
  const EighTotal = eight.reduce((e, a) => e + a);

  //Bar Chart DATA BELOW
  let data = {
    labels: ["Screens", "Keys", "Wont Charge/Battery", "Trackpad", "other"],
    datasets: [
      {
        label: "Broken Chromebooks",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [
          BrokenScreenTotal,
          KeyCountTotal,
          BatteryTotal,
          TrackpadTotal,
          OtherTotal
        ],
        yAxes: {
          ticks: {
            beginAtZero: true,
            min: 0
          }
        }
      }
    ]
  };

  let pie = {
    datasets: [
      {
        data: [SixTotal, SevenTotal, EighTotal],
        backgroundColor: ["#0074D9", "#FF4136", "#2ECC40"]
      }
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Six", "Seven", "Eight"]
  };

  console.log(count.items);
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <h1>Bellevue City Schools Chromebook Breakge Dashboard</h1>
      </div>
      <h2>Breaks by type:</h2>
      <Bar
        data={data}
        options={{ maintainAspectRatio: true }}
      />{" "}
       <h2>Breaks by Grade:</h2>
      <Doughnut width={100} height={50} data={pie} />
    </div>
  );
}
export default Dashboard;
