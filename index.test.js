
import tape from 'tape'

import { MyClass } from './index'

tape('It should test that MyClass.say exists', t => {
  t.plan(1)

  const c = new MyClass('world')
  t.ok(typeof c.say === 'function', 'say exists')
})
