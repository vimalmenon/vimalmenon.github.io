'use client';
import '@xyflow/react/dist/style.css';
import { Background, Controls, ReactFlow as ReactFlowComponent } from '@xyflow/react';
import { HumanInputNode } from './NodeType';
import { IReactFlow } from './ReactFlow';

const nodeTypes = { HumanInput: HumanInputNode };

export const ReactFlow: React.FC<IReactFlow> = ({ edges, nodes }) => (
  <ReactFlowComponent
    nodes={nodes}
    edges={edges}
    nodeTypes={nodeTypes}
    fitView
    nodesConnectable={false}
    nodesDraggable={false}
  >
    <Background />
    <Controls />
  </ReactFlowComponent>
);
