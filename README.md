# tyrian-city

Procedural city with ES6

## Development

To get started, run the following:
```
sudo npm install -g mocha babel
npm install
```

#### Gulp
Gulp is used for the following:

- Compiling ES6 to ES5 with Babel.
- Bundling the application with browserify.
- Concatenation and minification.
- Watching for code changes.

Generate the build for `public/build` with:

```
gulp clean && gulp build
```

#### Mocha Tests

Mocha is configured to run with Babel as found in `teest/mocha.opts`.

```
mocha test
```
