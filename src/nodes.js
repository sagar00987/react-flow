const initialNodes = [
    {
      id: "1",
      position: { x: 0, y: 0 },
      data: { label: "Node-1" , cost: "100000"},
      style: { backgroundColor: "red", color: "white" },
    },
    {
      id: "2",
      position: { x: 0, y: 100 },
      data: { label: "Node-2" },
      style: { backgroundColor: "black", color: "white" },
    },
    {
      id: "3",
      position: { x: 200, y: 50 },
      data: { label: "Node-3" },
      style: { backgroundColor: "blue", color: "white" },
    },
    {
      id: "4",
      position: { x: -200, y: 50 },
      data: { label: "Node-4" },
      style: { backgroundColor: "green", color: "white" },
    },
    {
      id: "node-1",
      type: "textUpdater",
      position: { x: 150, y: 450 },
      data: { value: 123 },
    },
    {
      id: "A",
      type: "group",
      data: { label: "" },
      position: { x: 0, y: 250 },
      style: {
        width: 170,
        height: 140,
      },
    },
    {
      id: "A-1",
      type: "input",
      data: { label: "Child Node A1" },
      position: { x: 10, y: 10 },
      parentNode: "A",
      extent: "parent",
    },
    {
      id: "A-2",
      data: { label: "Child Node A2" },
      position: { x: 10, y: 90 },
      parentNode: "A",
      extent: "parent",
    },
    {
        id: "B",
        type: "output",
        data: { label: "" },
        position: { x: -150, y: 450 },
        style: {
          width: 170,
          height: 140,
        },
      },
      {
        id: "B-1",
        type: "input",
        data: { label: "Child Node B1" },
        position: { x: 10, y: 10 },
        parentNode: "B",
        extent: "parent",
      },
      {
        id: "B-2",
        data: { label: "Child Node B2" },
        position: { x: 10, y: 90 },
        parentNode: "B",
        extent: "parent",
      },
  ];

  export default initialNodes;