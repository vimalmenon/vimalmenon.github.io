'use client';
import '@xyflow/react/dist/style.css';
import { Background, Controls, ReactFlow as ReactFlowComponent } from '@xyflow/react';
import { CompletedNode, ExecuteNode, HumanInputNode } from './NodeType';
import { IReactFlow } from './ReactFlow';

const nodeTypes = { Completed: CompletedNode, Execute: ExecuteNode, HumanInput: HumanInputNode };

export const ReactFlow: React.FC<IReactFlow> = ({ edges, nodes }) => (
  <ReactFlowComponent
    nodes={nodes}
    edges={edges}
    nodeTypes={nodeTypes}
    fitView
    nodesConnectable={false}
    nodesDraggable={false}
    colorMode="light"
  >
    <Background />
    <Controls />
  </ReactFlowComponent>
);
