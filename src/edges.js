import { MarkerType } from "reactflow";

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true, label: "edge-1" },
  { id: "e2-3", source: "2", target: "3", label: "edge-2", type: "smoothstep" },
  { id: "e3-1", source: "3", target: "1", label: "edge-3", type: "step" },
  { id: "a1-a2", source: "A-1", target: "A-2" },
  {
    id: "a2-b",
    source: "A-2",
    target: "B",
    type: "straight",
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: { stroke: "red" },
  },
  { id: "a2-node1", source: "A-2", target: "node-1" ,style: { stroke: "red" },},
];

export default initialEdges;
