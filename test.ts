import { fn, param } from '.';

import test from 'ava';

test((t) => {
  class MyClass {
    @fn()
    run(@param() p1: string) {
    }
  }

  const cls = new MyClass();
  cls.run('hi');
});
