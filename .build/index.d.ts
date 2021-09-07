import { Store } from "redux";
export declare const createConnectorHooks: <S>(store: Store<S, import("redux").AnyAction>) => {
    useSelector: <T>(selector: (state: S) => T) => T;
    useDispatch: () => any;
};
