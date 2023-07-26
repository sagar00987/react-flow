import React, { useState, useEffect, useRef } from "react";

function PanelContent(props) {
  console.log("PROPS - ", props);


  const [formData, setFormData] = useState({
    nodeName: props.data.label || '',
    nodeType: 'Type-a',
    nodeCost: 0,
  });

  const resetForm = () => {
    setFormData({
      nodeName: props.data.label || '',
      nodeType: 'Type-a',
      nodeCost: 0,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("From FORM DATA", "node name:", formData.nodeName, ",node type :", formData.nodeType, ",node cost:", formData.nodeCost);
    resetForm();
  };

  const renderWriteForm = () => {
    return (
      <div>
        <h2>WRITE Node Form</h2>
        <form>
          <div className="panelLabel">
            <label>Enter node name</label>
          </div>
          <div>
            <input
              type="text"
              placeholder={props.data.label}
              className="nodeName"
              value={FormData.nodeName}
              onChange={(e) => setFormData({ ...formData, nodeName: e.target.value })}
            />
          </div>
          <div className="panelLabel">
            <label>Select the Node type</label>
          </div>
          <div>
            <select className="nodeType"
              value={formData.nodeType}
              onChange={(e) => setFormData({ ...formData, nodeType: e.target.value })}
            >
              <option value="Type-a">Type a</option>
              <option value="Type-b">Type b</option>
              <option value="Type-c">Type c</option>
            </select>
          </div>
          <div className="panelLabel">
            <label>Enter the cost</label>
          </div>
          <div>
            <input type="number" className="nodeCost"
              value={formData.nodeCost}
              onChange={(e) => setFormData({ ...formData, nodeCost: e.target.value })}
            />
          </div>
          <button type="submit" className="submitButton" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  };

  const renderReadForm = () => {
    return (
      <div>
        <h2>READ Node Form</h2>
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
    );
  };

  const renderSQLForm = () => {
    return (
      <div>
        <h2>SQL Node Form</h2>
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
    );
  };

  return (
    <div className="panelContainer">
      <div className="panelHeader">{props.data.label}</div>
      <div className="panelOptions">
        <div className="panelNodeActions">Node Actions</div>
        <div className="panelProperties">Properties</div>
      </div>
      <div className="panelContent">
        <div className="panelConfig">Union configuration</div>
        <div className="panelEdit">Edit</div>
        <div className="panelDesc">Not set</div>
        <div>NODE TYPE - {props.type}</div>
        <div>COST is - {props.data.cost}</div>
        <div className="panelForm">
          {props.type == "write"
            ? renderWriteForm()
            : props.type == "read"
              ? renderReadForm()
              : renderSQLForm()}
        </div>
      </div>
    </div>
  );
}

export default PanelContent;
