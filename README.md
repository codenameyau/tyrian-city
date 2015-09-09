# tyrian-city

Procedural city with ES6

## Development

To get started, you'll need the following global packages:
```
sudo npm install -g mocha babel gulp
```

Then install the local project packages:
```
npm install
```

You can run tests with:
```
mocha test
```

### Gulp
Gulp is used for the following:

- Compiling ES6 to ES5 with Babel.
- Bundling the application with browserify.
- Concatenation and minification.
- Watching for code changes.

Generate a build in `public/build` with:

```
gulp clean && gulp build
```
