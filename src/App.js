import "./App.css";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  NodeResizer,
  NodeToolbar,
  Panel,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import React, { useCallback, useState } from "react";
import "reactflow/dist/style.css";
import TextUpdaterNode from "./TextUpdaterNode";
import "./TextUpdaterNode.css";
import initialNodes from "./nodes";
import initialEdges from "./edges";
import PanelContent from "./panelContent";
import "./panelContent.css";

const nodeTypes = {
  textUpdater: TextUpdaterNode,
};

const nodeColor = (node) => {
  switch (node.data.label) {
    case "1":
      return "red";
    case "2":
      return "black";
    default:
      return "blue";
  }
};

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [captureElementClick, setCaptureElementClick] = useState(true);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [nodeData, setNodeData] = useState();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = (event, node) => {
    console.log("Node Clicked", node);
    setIsPanelOpen(true);
    setNodeData(node.data.label);
  };

  console.log("Clicked node data", nodeData);
  return (
    <div>
      <div className="header">
        <div className="citta"></div>
        <div className="breadcrumb"></div>
      </div>
      <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onNodeClick={captureElementClick ? onNodeClick : undefined}
        fitView
      >
        <Controls />
        <NodeResizer />
        <MiniMap nodeColor={nodeColor} zoomable pannable />

        <Panel
          className={isPanelOpen ? "panelOpen" : "panelClose"}
          position="top-right"
        >
          <div>
            <PanelContent data={nodeData} />
          </div>
          <button
            className="panelCancelButton"
            onClick={() => setIsPanelOpen(false)}
          >
            Cancel
          </button>
        </Panel>
        <Panel className="menuPanel" position="top-left"></Panel>

        <NodeToolbar />
        <Background variant="blank" />
      </ReactFlow>
    </div>
    </div>
    
  );
}

export default App;
