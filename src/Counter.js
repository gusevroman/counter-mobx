import { observe } from 'mobx';
import { Observer } from 'mobx-react-lite';
import React from 'react';
import { observer } from 'mobx-react-lite';
import counter from './store/counter';

export const Counter = observer(() => {

  return (
    <>
    <div className="counters">
    Count: {counter.count}
      <div className="buttons">
        <button className="btn" onClick={() => counter.increment()}>+</button>
        <button className="btn" onClick={() => counter.decrement()}>-</button>
      </div>
    </div>
    </>
  )
});
