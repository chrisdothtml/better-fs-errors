better-fs-errors
===
better-fs-errors is a node module that improves the way [fs](https://nodejs.org/api/fs.html) (file system) errors look. It uses the [errno](https://github.com/rvagg/node-errno) module to provide more helpful error messages based on the error code provided by node. This has not been fully tested with every possible error, so please report any issues you run into [here](https://github.com/chrisdothtml/better-fs-errors/issues).

Before:

````
Error: ENOENT, open 'path\to\problem\file'
    at Error (native)
````

After:

````
------------------------------------------------
RAW ERROR:
Error: ENOENT, open 'path\to\problem\file'

ERROR DESCRIPTION:
no such file or directory
------------------------------------------------
````

Installation & Usage
===

Installing via npm

```
npm install better-fs-errors
```

Including the module

```js
var bfe = require('better-fs-errors');
```

Using

````js
throw bfe(err);
````

NOTE: If it can't find your error code in errno, it will return the original error.

# Dependencies

- [errno](https://github.com/rvagg/node-errno)