# hooks-connect
An alternate redux connector for react

## usage
Initialize connector hooks with store to beable to use them.
```js
    const store = createStore(/*...some redux stuff*/);

    export const { useDispatch, useSelector } = createConnectorHooks(store);
```
then you can use them normally in target modules or by importing directly from `hooks-connect`

```js
    import { useDispatch, useSelector } from 'hooks-connect';
    import { someSelector } from './selector';

    export const SomeComonent = () => {
        const
    }
```



NOTE: If You want to use hooks via `hooks-connect` module you must initialize before rendering you componets.
