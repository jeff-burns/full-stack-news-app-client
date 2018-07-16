import React from "react";

const SourcesDropDown = props => {
  const options = props.sourcesArray.map(eachSource => (
    <option key={eachSource.id} name="source" value={eachSource.name}>
      {eachSource.name}
    </option>
  ));

  return (
    <select className="custom-select options" id="source">
      <option key={"pickSource"} value="">
        Search by Source
      </option>
      {options}
    </select>
  );
};

export default SourcesDropDown;
