import * as wasm from "hm_wasm";
import React from "react";

const App: React.FC = () => {
  return (
    <div>
      <div>{wasm.sums(50)}</div>
    </div>
  );
};

export { App };
