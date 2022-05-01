import React, { ReactNode, useEffect, useState } from "react";
import "beautiful-react-diagrams/styles.css";
import Diagram, { createSchema, useSchema, validateSchema } from "beautiful-react-diagrams";
import { DiagramSchema, NodeCoordinates, Port } from "beautiful-react-diagrams/@types/DiagramSchema";
import {fetchPathSpecific} from "../../../actions/pathList";
import { useDispatch, useSelector } from "react-redux";
import { useParams} from "react-router-dom";

type Node = {
  id: string;
  coordinates: NodeCoordinates;
  disableDrag?: boolean;
  content?: ReactNode;
  inputs?: Port[];
  outputs?: Port[];
  type?: "default";
  render?: any;
  className?: string;
};


const UncontrolledDiagram = () => {
    
    useEffect(() => {
        fetchPathSpecific(dispatch, "The-Unending-thruth-01");
    }, []);
    const data = useSelector((state:any) => state.pathParticular);
    const nodes = data.nodeData;
    console.log("nodes", nodes);
    const initialSchema = createSchema<any>({
      nodes: [
        {
          id: "node-1",
          content: "Primary Education",
          coordinates: [250, 60],
          inputs: [{ id: "port-11", alignment: "left" }],
          outputs: [{ id: "port-12", alignment: "right" }]
        },
        {
          id: "node-2",
          content: "Secondary Education",
          coordinates: [250, 200],
          inputs: [{ id: "port-31", alignment: "left" }],
          outputs: [{ id: "port-32", alignment: "right" }]
        },
        {
          id: "node-3",
          content: "12 CLASS PCM HSE",
          coordinates: [14, 309],
          inputs: [{ id: "port-21", alignment: "left" }],
          outputs: [{ id: "port-22", alignment: "right" }]
        },
        {
          id: "node-4",
          content: "12 CLASS PCMB HSE",
          coordinates: [547, 287],
          inputs: [{ id: "port-41", alignment: "left" }],
          outputs: [{ id: "port-42", alignment: "right" }]
        },
        {
          id: "node-5",
          content: "12 CLASS PCB HSE",
          coordinates: [255, 330],
          inputs: [{ id: "port-31", alignment: "left" }],
          outputs: [{ id: "port-32", alignment: "right" }]
        },
        {
          id: "node-6",
          content: "MBBS",
          coordinates: [286, 422],
          inputs: [{ id: "port-31", alignment: "left" }],
          outputs: [{ id: "port-32", alignment: "right" }]
        },
        {
          id: "node-7",
          content: "MD / MS / DNB",
          coordinates: [255, 520],
          inputs: [{ id: "port-31", alignment: "left" }],
          outputs: [{ id: "port-32", alignment: "right" }]
        },
        {
          id: "node-8",
          content: "DM / MCH / FNB",
          coordinates: [255, 620],
          inputs: [{ id: "port-31", alignment: "left" }],
          outputs: [{ id: "port-32", alignment: "right" }]
        }
      ],
      links: [
        { input: "node-1", output: "node-2" },
        { input: "node-2", output: "node-5" },
        { input: "node-2", output: "node-3" },
        { input: "node-2", output: "node-4" },
        { input: "node-5", output: "node-6" },
        { input: "node-6", output: "node-7" },
        { input: "node-7", output: "node-8" },
      ]
    });
    const [schema, { onChange }] = useSchema(initialSchema);
    const dispatch = useDispatch();
    const param = useParams();
    console.log(param);
    console.log("validatin", validateSchema(initialSchema))
    console.log("schema", JSON.stringify(schema), data.nodeData)
    
    
    return (
        <div style={{ height: "50.5rem" }}>
        <Diagram schema={schema} onChange={onChange} />
        </div>
    );
};

export default function App() {
  return (
    <>
      <UncontrolledDiagram />
    </>
  );
}
