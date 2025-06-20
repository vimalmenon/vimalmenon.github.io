'use client';
import '@xyflow/react/dist/style.css';
import { Background, Controls, ReactFlow as ReactFlowComponent } from '@xyflow/react';

const nodes = [
  {
    data: { label: 'Hello' },
    id: '1',
    position: { x: 0, y: 0 },
  },
  {
    data: { label: 'World' },
    id: '2',
    position: { x: 0, y: 100 },
  },
];
const edges = [{ id: 'a->b', source: '1', target: '2' }];

export const ReactFlow: React.FC = () => (
  <ReactFlowComponent nodes={nodes} edges={edges} fitView>
    <Background />
    <Controls />
  </ReactFlowComponent>
);
