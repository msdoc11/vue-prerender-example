# prerender-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Prerendering

There is a npm scripts hook that runs before `npm run build` that fetches all the example company names and saves them to a json file locally, then uses that list to prerender all company routes to static html files.