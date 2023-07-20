import React, { useState, useEffect } from "react";

function PanelContent(props) {
  console.log("PROPS - ", props);

  const [nodeName, setNodeName] = useState();

  

  useEffect(() => {
    setNodeName(props.data.label);
    console.log("Node Name -----------", nodeName);
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("FORM DATA", event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
    setNodeName(event.target[0].value);
  };

  return (
    <div className="panelContainer">
      <div className="panelHeader">{nodeName}</div>
      <div className="panelOptions">
        <div className="panelNodeActions">Node Actions</div>
        <div className="panelProperties">Properties</div>
      </div>
      <div className="panelContent">
        <div className="panelConfig">Union configuration</div>
        <div className="panelEdit">Edit</div>
        <div className="panelDesc">Not set</div>
        <div>COST is - {props.data.cost}</div>
        <div className="panelForm">
          <h2>Node Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="panelLabel">
              <label>Enter node name</label>
            </div>
            <div>
              <input
                type="text"
                placeholder={props.data.label}
                className="nodeName"
                // value={FormData.nodeName}
              />
            </div>
            <div className="panelLabel">
              <label>Select the Node type</label>
            </div>
            <div>
              <select className="nodeType">
                <option value="Type-a">Type a</option>
                <option value="Type-b">Type b</option>
                <option value="Type-c">Type c</option>
              </select>
            </div>
            <div className="panelLabel">
              <label>Enter the cost</label>
            </div>
            <div>
              <input type="number" className="nodeCost" />
            </div>
            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PanelContent;
