const initialNodes = [
    {
      id: "1",
      node_type : "write",
      position: { x: 0, y: 0 },
      data: { label: "Node-1" , cost: "100000"},
      style: { backgroundColor: "red", color: "white" },
    },
    {
      id: "2",
      node_type : "read",
      position: { x: 0, y: 100 },
      data: { label: "Node-2" , cost: "30000" },
      style: { backgroundColor: "black", color: "white" },
    },
    {
      id: "3",
      node_type : "sql",
      position: { x: 200, y: 50 },
      data: { label: "Node-3" , cost: "5000" },
      style: { backgroundColor: "blue", color: "white" },
    },
    {
      id: "4",
      node_type : "write",
      position: { x: -200, y: 50 },
      data: { label: "Node-4" , cost: "900000" },
      style: { backgroundColor: "green", color: "white" },
    },
    {
      id: "node-1",
      node_type : "write",
      type: "textUpdater",
      position: { x: 150, y: 450 },
      data: { value: 123 , cost: "23000" },
    },
    {
      id: "A",
      node_type : "read",
      type: "group",
      data: { label: "" , cost: "12000"},
      position: { x: 0, y: 250 },
      style: {
        width: 170,
        height: 140,
      },
    },
    {
      id: "A-1",
      node_type : "write",
      type: "input",
      data: { label: "Child Node A1" , cost: "98000"},
      position: { x: 10, y: 10 },
      parentNode: "A",
      extent: "parent",
    },
    {
      id: "A-2",
      node_type : "read",
      data: { label: "Child Node A2" , cost: "19000" },
      position: { x: 10, y: 90 },
      parentNode: "A",
      extent: "parent",
    },
    {
        id: "B",
        node_type : "write",
        type: "output",
        data: { label: "" , cost: "300"},
        position: { x: -150, y: 450 },
        style: {
          width: 170,
          height: 140,
        },
      },
      {
        id: "B-1",
        node_type : "write",
        type: "input",
        data: { label: "Child Node B1" , cost: "130"},
        position: { x: 10, y: 10 },
        parentNode: "B",
        extent: "parent",
      },
      {
        id: "B-2",
        node_type : "write",
        data: { label: "Child Node B2" , cost: "10044"},
        position: { x: 10, y: 90 },
        parentNode: "B",
        extent: "parent",
      },
  ];

  export default initialNodes;