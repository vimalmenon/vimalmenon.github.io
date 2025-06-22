'use client';
import '@xyflow/react/dist/style.css';
import { Background, Controls, ReactFlow as ReactFlowComponent } from '@xyflow/react';
import { IReactFlow } from './ReactFlow';

export const ReactFlow: React.FC<IReactFlow> = ({ edges, nodes }) => (
  <ReactFlowComponent nodes={nodes} edges={edges} fitView>
    <Background />
    <Controls />
  </ReactFlowComponent>
);
