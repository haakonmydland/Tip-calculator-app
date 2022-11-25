import style from "./Calculator.module.css";
import { IconDollar, IconPerson } from "../assets/Icons";
import { onlyNumber, numberWithSpace } from "../utility/numberInput";
import { useState, useEffect } from "react";

export const Calculator = () => {
  const [Results, setResults] = useState({ tip: 0, total: 0 });
  const [Inputs, setInputs] = useState({
    bill: "",
    tip: "0",
    people: "",
  });

  function reset(e: any) {
    let radioBtn: any;
    radioBtn = document.getElementById(Inputs.tip);
    if (radioBtn) {
      radioBtn.checked = false;
    }
    setInputs({
      bill: "",
      tip: "0",
      people: "",
    });
  }

  useEffect(() => {
    setResults((prev: any) => {
      let tipAmount = (parseInt(Inputs.bill) / 100) * parseInt(Inputs.tip);
      let total = parseInt(Inputs.bill) + tipAmount;
      return {
        tip: tipAmount / parseInt(Inputs.people),
        total: total / parseInt(Inputs.people),
      };
    });
  }, [Inputs]);

  function handleInput(e: any) {
    let target = e.target;
    onlyNumber(target);
    setInputs((prev: any) => {
      prev[target.parentElement.id] = parseInt(target.value);
      if (target.parentElement.id == "people" && parseInt(target.value) == 0) {
        prev[target.parentElement.id] = parseInt("");
      }

      return prev;
    });
    setResults((prev: any) => {
      let tipAmount = (parseInt(Inputs.bill) / 100) * parseInt(Inputs.tip);
      let total = parseInt(Inputs.bill) + tipAmount;
      return {
        tip: tipAmount / parseInt(Inputs.people),
        total: total / parseInt(Inputs.people),
      };
    });
  }

  return (
    <div className={style.Container}>
      <div className={style.Calc}>
        <div className={style.Bill}>
          <p className={style.Header}>Bill</p>
          <p className={style.Validation}></p>
          <div id="bill" className={style.InputContainer}>
            <IconDollar />
            <input
              type="text"
              className={style.Input}
              onInput={handleInput}
              value={
                Inputs.bill.toString() !== "NaN" ? Inputs.bill.toString() : ""
              }
            />
          </div>
        </div>

        <div className={style.TipPercent}>
          <p className={style.Header}>Select Tip %</p>
          <p className={style.Validation}></p>
          <form id="tip" action="" className={style.TipForm}>
            <input
              className={style.TipRadio}
              type="radio"
              name="TipPer"
              id="5"
              value={5}
              onInput={handleInput}
            />
            <label className={style.TipBtn} htmlFor="5">
              5%
            </label>
            <input
              className={style.TipRadio}
              type="radio"
              name="TipPer"
              id="10"
              value={10}
              onInput={handleInput}
            />
            <label className={style.TipBtn} htmlFor="10">
              10%
            </label>
            <input
              className={style.TipRadio}
              type="radio"
              name="TipPer"
              id="15"
              value={15}
              onInput={handleInput}
            />
            <label className={style.TipBtn} htmlFor="15">
              15%
            </label>
            <input
              className={style.TipRadio}
              type="radio"
              name="TipPer"
              id="25"
              value={25}
              onInput={handleInput}
            />
            <label className={style.TipBtn} htmlFor="25">
              25%
            </label>
            <input
              className={style.TipRadio}
              type="radio"
              name="TipPer"
              id="50"
              value={50}
              onInput={handleInput}
            />
            <label className={style.TipBtn} htmlFor="50">
              50%
            </label>

            <input
              type="text"
              className={style.TipInput}
              placeholder="Custom"
              onInput={handleInput}
              value={
                Inputs.tip.toString() !== "NaN" ? Inputs.tip.toString() : "0"
              }
            />
          </form>
        </div>

        <div className={style.People}>
          <p className={style.Header}>Number of People</p>
          <p className={style.Validation}></p>
          <div id="people" className={style.InputContainer}>
            <IconPerson />
            <input
              type="text"
              className={style.Input}
              onInput={handleInput}
              value={
                Inputs.people.toString() !== "NaN"
                  ? Inputs.people.toString()
                  : ""
              }
            />
          </div>
        </div>
      </div>
      <div className={style.Results}>
        <div className={style.InfoContainer}>
          <div className={style.Info}>
            <div className={style.Text}>
              <p className={style.Header}>Tip Amount</p>
              <p className={style.Sub}>/ person</p>
            </div>
            <p className={style.Amount}>${numberWithSpace(Results.tip)}</p>
          </div>
          <div className={style.Info}>
            <div className={style.ext}>
              <p className={style.Header}>Total</p>
              <p className={style.Sub}>/ person</p>
            </div>
            <p className={style.Amount}>${numberWithSpace(Results.total)}</p>
          </div>
        </div>
        <button
          className={style.Reset}
          disabled={Inputs.bill == "" || Inputs.people == ""}
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
