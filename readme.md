
# quig

> Quick and dirty heap implementation

[![npm](https://img.shields.io/npm/v/quig?style=flat-square)](https://www.npmjs.com/package/quig)
[![minzip size](https://img.shields.io/bundlephobia/minzip/quig?style=flat-square)](https://bundlephobia.com/result?p=quig)
[![License](https://img.shields.io/github/license/mattstyles/quig.svg)](https://github.com/mattstyles/quig/blob/main/license.md)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

For alternate solutions see [Heapify](https://www.npmjs.com/package/heapify), [TinyQueue](https://www.npmjs.com/package/tinyqueue), and [FlatQueue](https://www.npmjs.com/package/flatqueue).

## Getting Started

```sh
npm install -S quig
```

```js
import { Heap } from 'quig'

const heap = Heap.of()

heap.push(3)
heap.push(5)
heap.push(1)
heap.pop() // 1
heap.pop() // 3
heap.pop() // 5
```

## Configuration

The Heap constructor accepts a configuration object:

```
{
  data: <Array<any>>,
  comparator: <Function<any, any> -> Boolean>
}
```

A heap can be initialised with values:

```js
const heap = Heap.of({
  data: [0, 10, 4, 7]
})
```

The comparator function can be used to change the behaviour of the heap, for example, to implement a max heap:

```js
const heap = Heap.of({
  comparator: (a, b) => a > b
})
```

The comparator will be furnished with two nodes to compare and is expected to return a boolean denoting their priority i.e. returning true from the comparator will bubble the node to the head of the heap.

Heap can accept any sort of data (for faster implementations using integers see [Heapify](https://www.npmjs.com/package/heapify)).

```js
const heap = Heap.of({
  comparator: (a, b) => a.cost < b.cost
})

heap.push({ node: node, cost: 10 })
heap.push({ node: node, cost: 5 })

heap.pop() // { node: node, cost: 5 }
```

## Running tests

```sh
npm install
npm test
```

## Contributing

Pull requests are always welcome, the project uses the [standard](http://standardjs.com) code style. Please run `npm test` to ensure all tests are passing and add tests for any new features or updates.

For bugs and feature requests, [please create an issue](https://github.com/mattstyles/quig/issues).

## License

MIT
