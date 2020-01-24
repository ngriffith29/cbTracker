import "../App.css";
import React, { useState } from "react";
import { checkRef } from "./firebase";
import  "./style.css"
function Interface() {
  const [choices, setChoices] = useState({
    selectValue: "Pick Reason",
    damageValue: "Pick Reason",
    submitted: true,
    default: "Pick Option",
    screen: 0,
    keys: 0,
    trackpad: 0,
    headphneJack: 0,
    battery: 0,
    other: 0,
  
  });

  const [grade, setGrade] = useState({
      six: 0,
      seven: 0,
      eight: 0
  })

  let handleCart = function(e) {
        if(e.target.value === "6"){
            return setChoices({
                selectValue: e.target.value
              }) & setGrade({six: +1,
                            seven: 0,
                            eight: 0
            })
        } 
        
        else if (e.target.value === "7") {
            return setChoices({
                selectValue: e.target.value
              }) & setGrade({six: 0,
                            seven: +1,
                            eight: 0
            })
        } else if (e.target.value === "8") {
            return setChoices({
                selectValue: e.target.value
              }) & setGrade({six: 0,
                            seven: 0,
                            eight: +1
            })
        }
        
        
        //
        else {
            return setChoices({
                selectValue: e.target.value
              })
        }
     
    
  };
  let handleDamage = function(e) {
    if (e.target.value === "Broken Screen") {
      return setChoices({
        selectValue: choices.selectValue,
        damageValue: e.target.value,
        submitted: true,
        default: "Pick Option",
        keys: 0,
        trackpad: 0,
        headphneJack: 0,
        battery: 0,
        other: 0,
        screen: +1,
      
      });
      //
    } else if (e.target.value === "Broken Keys") {
      return setChoices({
        selectValue: choices.selectValue,
        damageValue: e.target.value,
        submitted: true,
        default: "Pick Option",
        screen: 0,
        keys: +1,
        trackpad: 0,
        headphneJack: 0,
        battery: 0,
        other: 0,
     
      });
    } else if (e.target.value === "Won't Charge") {
      return setChoices({
        selectValue: choices.selectValue,
        damageValue: e.target.value,
        submitted: true,
        default: "Pick Option",
        screen: 0,
        keys: 0,
        trackpad: 0,
        headphneJack: 0,
        battery: +1,
        other: 0,
      
      });
    } else if (e.target.value === "Trackpad") {
      return setChoices({
        selectValue: choices.selectValue,
        damageValue: e.target.value,
        submitted: true,
        default: "Pick Option",
        screen: 0,
        keys: 0,
        trackpad: +1,
        headphneJack: 0,
        battery: 0,
        other: 0,
       
      });
    }
    //
    else if (e.target.value === "Other") {
      return setChoices({
        selectValue: choices.selectValue,
        damageValue: e.target.value,
        submitted: true,
        default: "Pick Option",
        screen: 0,
        keys: 0,
        trackpad: 0,
        headphneJack: 0,
        battery: 0,
        other: +1,
      
      });
    }
    //
    else {
      return setChoices({ ...choices, damageValue: e.target.value });
    }
  };
  console.log(grade.six)
  let buttonSub = function(e) {
    e.preventDefault();
    const item = {
      reason: choices.damageValue,
      grade: choices.selectValue,
      screen: choices.screen,
      keys: choices.keys,
      battery: choices.battery,
      trackpad: choices.trackpad,
      other: choices.other,
      six: grade.six,
      seven: grade.seven,
      eight: grade.eight,
    
    };
    checkRef.push().set(item);
    setChoices({
      selectValue: "",
      damageValue: "",
      submitted: false,
      screen: 0,
      keys: 0,
      battery: 0,
      trackpad: 0,
      other: 0,
   
    });
  };

  return (
    <div className="App">
     
      <form>
        <div className="form-group">
            <div className="h">
        <h1 className='text'>Chromebook Deposit Form</h1>
        </div>
          <label>Choose what grade you're in</label>
          <select
            className="form-control w-50 sel "
            id="cart"
            onChange={handleCart}
            value={choices.selectValue}
          >
            <option>{choices.default}</option>
            <option>{6}</option>
            <option>{7}</option>
            <option>{8}</option>
          </select>
          
          <label>Select Your Reason For deposit</label>
          <select
            className="form-control w-50 sel"
            id="cart"
            value={choices.damageValue}
            onChange={handleDamage}
          >
            <option>{choices.default}</option>
            <option>Broken Screen</option>
            <option>Broken Keys</option>
            <option>Won't Charge</option>
            <option>Trackpad</option>
            <option>Other</option>
          </select>

          <button className="button btn btn-dark btn-lg" onClick={buttonSub}>
            Submit Information
          </button>
        </div>
      </form>
    </div>
  );
}

export default Interface;
