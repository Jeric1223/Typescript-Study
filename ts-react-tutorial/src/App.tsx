import React from 'react';
import ReducerSample from './component/ReducerSample';
import { SampleProvider } from './component/SampleContext';

const App: React.FC = () => {
  return (
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
  );
};

export default App;