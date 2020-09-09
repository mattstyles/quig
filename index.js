
const defaultComparator = (a, b) => a < b

const fillHeap = (heap, data) => {
  let index = data.length
  while (index--) {
    heap.push(data[index])
  }
  return heap
}

const bubbleUp = (heap, index) => {
  if (index === 0) {
    return
  }

  const parentIndex = getParentIndex(heap, index)
  if (heap.comparator(heap.data[index], heap.data[parentIndex])) {
    swap(heap, index, parentIndex)
    return bubbleUp(heap, parentIndex)
  }
}

const bubbleDown = (heap, index) => {
  const [left, right] = getChildIndices(heap, index)

  if (!left && !right) {
    return
  }

  if (!right) {
    if (!heap.comparator(heap.data[index], heap.data[left])) {
      swap(heap, index, left)
    }
    return
  }

  if (heap.comparator(heap.data[left], heap.data[right])) {
    swap(heap, index, left)
    return bubbleDown(heap, left)
  }

  swap(heap, index, right)
  return bubbleDown(heap, right)
}

const swap = (heap, a, b) => {
  const temp = heap.data[a]
  heap.data[a] = heap.data[b]
  heap.data[b] = temp
}

const getParentIndex = (heap, index) => {
  if (index === 0) {
    return null
  }
  return (index - 1) >> 1
}

const getChildIndices = (heap, index) => {
  const l = (index << 1) + 1
  const r = (index + 1) << 1
  return [
    l < heap.length ? l : null,
    r < heap.length ? r : null
  ]
}

export class Heap {
  constructor (config = {}) {
    this.data = []
    this.comparator = config.comparator || defaultComparator

    if (config.data) {
      fillHeap(this, config.data)
    }
  }

  static of (config) {
    return new Heap(config)
  }

  get length () {
    return this.data.length
  }

  push (value) {
    this.data.push(value)
    bubbleUp(this, this.length - 1)
  }

  pop () {
    if (this.length === 0) {
      return
    }

    if (this.length === 1) {
      return this.data.pop()
    }

    swap(this, 0, this.length - 1)
    const temp = this.data.pop()
    bubbleDown(this, 0)
    return temp
  }

  peek () {
    return this.data[0]
  }
}
