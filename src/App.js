import React from 'react';
import problems from './problems';
import soluces from './soluces';

const App = () => {
  const index = Number(document.location.pathname.substring(1));
  const Problem = problems[`Problem${index}`];
  const Soluce = soluces[`Soluce${index}`];
  return (
  <main className="App">
    <Problem/>
    <Soluce />
  </main>
  );
}

export default App;
