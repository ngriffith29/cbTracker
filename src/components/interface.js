import "../App.css";
import React, { useState } from "react";
import { checkRef } from "./firebase";

function Interface() {
  const [choices, setChoices] = useState({
    selectValue: "Pick Reason",
    damageValue: "Pick Reason",
    submitted: true,
    default: "Pick Option"
  });

  let handleCart = function(e) {
    return setChoices({ ...choices, selectValue: e.target.value });
  };

  let handleDamage = function(e) {
    return setChoices({ ...choices, damageValue: e.target.value });
  };

  let buttonSub = function(e) {
    e.preventDefault();
    const item = {
      reason: choices.damageValue,
      teacher: choices.selectValue
    };
    checkRef.push().set(item);
    setChoices({ selectValue: "", damageValue: "", submitted: false });
    alert(`${choices.selectValue} ${choices.damageValue}`);
  };

  return (
    <div className="App">
      <h1>Chromebook Deposit Form</h1>
      <form>
        <div className="form-group">
          <label>Select Whose Cart your chromebook belongs too</label>
          <select
            className="form-control w-50 "
            id="cart"
            onChange={handleCart}
            value={choices.selectValue}
          >
            <option>{choices.default}</option>
            <option>Emily Freitag</option>
            <option>Santoro</option>
            <option>Warner</option>
            <option>Baltzell</option>
          </select>
          <hr></hr>
          <label>Select Your Reason For deposit</label>
          <select
            className="form-control w-50 "
            id="cart"
            value={choices.damageValue}
            onChange={handleDamage}
          >
            <option>{choices.default}</option>
            <option>Broken Screen</option>
            <option>Broken Keys</option>
            <option>Broken Case</option>
            <option>Other</option>
          </select>

          <button className="button" onClick={buttonSub}>
            Submit Information
          </button>
        </div>
      </form>
    </div>
  );
}

export default Interface;
