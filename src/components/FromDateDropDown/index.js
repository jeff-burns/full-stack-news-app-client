import React from "react";

var moment = require("moment");

const FromDateDropDown = props => {
  
    const dateNow = moment();
    let datesArray = [];
    for (let i = 0; i < 31; i++) {
      let dateStr = dateNow.subtract(1, "d").format("MMM Do ddd");
      datesArray.push(dateStr);
    }
  
    const options = 
  datesArray.map(eachDate => (
    <option key={eachDate} name="fromDate" value={eachDate}>
      {eachDate}
    </option>
  ));

  return (
    <select className="custom-select options" id="fromDate">
      <option key={"pickFromDate"} value="">
        (Optional) From Date
      </option>
      {options}
    </select>
  );
};

export default FromDateDropDown;
