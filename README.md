# node-starter

Simple starting point to create a Node.js program.

Interested by creating an API instead? Try [https://github.com/cedric25/node-api-starter](https://github.com/cedric25/node-api-starter)

Includes:
 - An index.js calling a 'run()' function from another file
 - Test stack with [mocha](https://mochajs.org/#synchronous-code)
 - ESLint with [standard](https://standardjs.com/)
 - Logs with [bunyan](https://github.com/trentm/node-bunyan)

## How to use

 - Clone this project
```
git clone https://github.com/cedric25/node-starter.git
mv node-starter my-program
cd my-program
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
