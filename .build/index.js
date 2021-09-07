"use strict";
exports.__esModule = true;
exports.createConnectorHooks = void 0;
var react_1 = require("react");
var createConnectorHooks = function (store) {
    return {
        useSelector: function (selector) {
            var _a = (0, react_1.useState)(selector(store.getState())), compValues = _a[0], setCompValues = _a[1];
            var updateValues = (0, react_1.useCallback)(function () {
                var vals = selector(store.getState());
                if (vals === compValues)
                    return;
                setCompValues(vals);
            }, [selector, compValues]);
            (0, react_1.useEffect)(function () {
                var unsubscribe = store.subscribe(updateValues);
                return function () {
                    unsubscribe();
                };
            }, [updateValues]);
            return compValues;
        },
        useDispatch: function () { return (0, react_1.useMemo)(function () { return store.dispatch; }, [store.dispatch]); }
    };
};
exports.createConnectorHooks = createConnectorHooks;
