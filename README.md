# @hitunes/unflatten-array

![npm (scoped)](https://img.shields.io/npm/v/@hitunes247/unflatten-array.svg)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@hitunes247/unflatten-array.svg)

### As simple as passing your flat array of objects

### Installation

```sh
$ npm install @hitunes247/unflatten-array
```

### Usage

```
const unflatten = require("@hitunes247/unflatten-array");

let array = [{
    id: 620,
    name: 'theh',
    parent_id: 0,
    project_id: 91,
    summary: {
      total_progres: 0,
      task_count: 0
    },
    children: []
  },
  {
    id: 3,
    name: 'Contracts',
    parent_id: 620,
    project_id: 91,
    summary: {
      total_progres: 3,
      task_count: 7
    },
    children: [
      {
        id: 1,
        name: 'Supply Construction Agreement',
        description: '',
        planned_start: '2019-03-18T10:43:31.144Z',
        planned_start_date: '2019-03-18',
        planned_finish: '2019-03-18T10:43:31.144Z',
        planned_finish_date: '2019-03-18',
        actual_start: '2019-04-18T10:43:31.144Z',
        actual_finish: '2019-05-18T10:43:31.144Z',
      }
    ]
  }]

unflatten(array);

```

### parent_id and children are important to make it work

### Todos

- Write MORE Tests

## License

MIT

**Free Software, Hell Yeah!**
