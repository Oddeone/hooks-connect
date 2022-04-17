import { useCallback, useEffect, useMemo, useState } from "react";
import { Store } from "redux";

export let connectorHooks;

export const createConnectorHooks = <S>(store: Store<S>) => {
    if (connectorHooks !== undefined) return connectorHooks;
    connectorHooks = {
        useSelector: <T>(selector: (state: S) => T, compare: (oldVal, newVal) => boolean): T => {
          const [compValues, setCompValues] = useState(selector(store.getState()));

          const updateValues = useCallback(() => {
            const vals = selector(store.getState());
            if (vals === compValues) return;

            setCompValues(vals);
          }, [selector, compValues]);

          useEffect(() => {
            const unsubscribe = store.subscribe(updateValues);
            return () => {
              unsubscribe();
            };
          }, [updateValues]);

          return compValues;
        },
        useDispatch: () => useMemo(() => store.dispatch, [store.dispatch])
    };

    return connectorHooks;
};
