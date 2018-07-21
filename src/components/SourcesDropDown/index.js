import React from "react";

const SourcesDropDown = props => {
  const options = props.sourcesArray.map(eachSource => (
    //   const convertedUrl = eachUrl.replace(/^https?\:\/\//i, "");
    <option key={eachSource.id} name="source" value={eachSource.url}>
      {eachSource.name}
    </option>
  ));

  return (
    <select className="custom-select options" id="source" >
      <option key={"pickSource"} value="">
        Search by Source
      </option>
      {options}
    </select>
  );
};

export default SourcesDropDown;
