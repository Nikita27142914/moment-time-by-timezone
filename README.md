# moment-time-by-timezone

Extremely easy way and simple way to get time of some place.
Help you to choose place time you want to know and format of time.


## Installation

```sh
$ npm i moment-time-by-timezone
```
or

```sh
$ yarn add moment-time-by-timezone
```

## Examples

### Simple

```js

const { getTimeOfTimeZone } = require('moment-time-by-timezone')

const time = getTimeOfTimeZone('Europe/London', 'YYYY-MM-DD HH:mm')

```

will return:
```string
2022-03-15 06:09
```

#### Options

The `getTimeOfTimeZone` function takes `location` as string that may describe place time you want to know and
`location` as string to show time in some format:

## License

[MIT](LICENSE)
