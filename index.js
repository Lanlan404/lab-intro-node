class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function (a, b) { return a - b })
    this.length = this.items.length
  }

  get(pos) {
    if (pos < this.length) return this.items[pos]
    throw new Error('OutOfBounds');
  }

  max() {
    if (this.length < 1) throw new Error('EmptySortedList');
    return this.items.at(-1)  // .at(-1) <=> this.length-1 <=> dernier element du tableau
  }

  min() {
    if (this.length < 1) throw new Error('EmptySortedList');
    return this.items[0]
  }

  sum() {
    if (this.length < 1) return 0
    return this.items.reduce(function (a, b) { return a + b })
  }

  avg() {
    if (this.length < 1) throw new Error('EmptySortedList'); // STOP
    return this.sum() / this.length
  }
}

module.exports = SortedList;
