
import tape from 'tape'

import { Heap } from './index'

const fillHeap = (heap, arr) => {
  arr.forEach(value => {
    heap.push(value)
  })
}

const writeHeap = (heap) => {
  const output = []
  while (heap.length) {
    output.push(heap.pop())
  }
  return output
}

tape('The default comparator produces a min heap', t => {
  t.plan(1)

  const minHeap = Heap.of()
  fillHeap(minHeap, [0, -2, 2, 10, 5])
  t.deepEqual(
    writeHeap(minHeap),
    [-2, 0, 2, 5, 10],
    'Values are output ascending order'
  )
})

tape('comparator can produce a max heap', t => {
  t.plan(1)

  const maxHeap = Heap.of({
    comparator: (a, b) => a > b
  })
  fillHeap(maxHeap, [0, -2, 2, 10, 5])
  t.deepEqual(
    writeHeap(maxHeap),
    [10, 5, 2, 0, -2],
    'Values are output descending order'
  )
})

tape('Heap can be initialised with values', t => {
  t.plan(1)

  const heap = Heap.of({
    data: [4, -10, 2, 7]
  })
  t.deepEqual(
    writeHeap(heap),
    [-10, 2, 4, 7],
    'Constructor pushes values to the heap'
  )
})
