import { useState, useCallback } from 'react';

const useMergeState = (initialState) => {
  const [state, setState] = useState(initialState);
  const setMergedState = useCallback(
    (newState) => setState((prevState) => ({ ...prevState, ...newState })),
    []
  );
  return [state, setMergedState];
}

export default useMergeState;
