# string utils
[![Build Status](https://travis-ci.org/matt-tucker-sp/string-utils.svg?branch=master)](https://travis-ci.org/matt-tucker-sp/string-utils)
[![npm version](https://badge.fury.io/js/string-utils.svg)](http://badge.fury.io/js/string-utils)
[![devDependency Status](https://david-dm.org/matt-tucker-sp/string-utils/dev-status.svg)](https://david-dm.org/matt-tucker-sp/string-utils#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/matt-tucker-sp/string-utils.svg)](https://github.com/matt-tucker-sp/string-utils/issues)
[![GitHub stars](https://img.shields.io/github/stars/matt-tucker-sp/string-utils.svg)](https://github.com/matt-tucker-sp/string-utils/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/matt-tucker-sp/string-utils/master/LICENSE)

## Demo
https://matt-tucker-sp.github.io/string-utils/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#licence)

## About

String Utilities

## Installation

Install through npm:
```
npm install --save string-utils
```

Then use it in your app like so:

```typescript
import {Component} from '@angular/core';
import {HelloWorld} from 'string-utils';

@Component({
  selector: 'demo-app',
  directives: [HelloWorld],
  template: '<hello-world></hello-world>'
})
export class DemoApp {}
```

You may also find it useful to view the [demo source](https://github.com/matt-tucker-sp/string-utils/blob/master/demo/demo.ts).

### Usage without a module bundler
```
<script src="node_modules/dist/umd/string-utils/string-utils.js"></script>
<script>
    // everything is exported stringUtils namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://matt-tucker-sp.github.io/string-utils/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
