# node-starter

Simple starting point to create a Node.js app.

Starter template quite deprecated...

Better to have a look at the API starter instead: [https://github.com/cedric25/node-api-starter](https://github.com/cedric25/node-api-starter)

Includes:
 - An index.js calling a 'run()' function from another file
 - Test stack with [jest](https://facebook.github.io/jest/)
 - ESLint with [standard](https://standardjs.com/)
 - Logs with [bunyan](https://github.com/trentm/node-bunyan)

## How to use

 - Clone this project
```
git clone https://github.com/cedric25/node-starter.git
mv node-starter my-nodejs-program
cd my-api
npm i // yarn
```

 - Remove git history and create your own:
```
rm -rf .git
git init
git add .
git commit -m ":zap: Init project"
```

 - Run server
```
npm start // yarn start
npm run start:debug // yarn start:debug
```

 - Run tests
```
npm t // yarn test
```

## Steps done to create this project

 - Clone [https://github.com/cedric25/node-api-starter](https://github.com/cedric25/node-api-starter)
 - Remove web server related code...
