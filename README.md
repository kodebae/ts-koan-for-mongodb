# TypeScript, NodeJs, Jest, MongoDB koan

[ChatGPT taught me TypeScript and Jest](https://chat.openai.com/share/498bc1cf-f0cc-4417-b19c-6405f6a76573) so I created this MongoDB Koan.


## Contributors

All contributions are welcome. There is a solutions branch, start from there. I am aware that this project breaks all kinds of unit testing best practices, we are using a backing service in unit tests after all. The jest tests are subject to timing problems, I did my best to minimize the probablilty that would occur.

## Knowlege Seekers

If you are not familar with software koan's you can think of them as Test Driven Learning. The /src/MongoKoan.ts file has a collection of methods that currently return errors. The /src/MongoKoan.test.ts is a set of Jest unit tests that test those methods. Your goal is to update the MongoKoan.ts file with the code that makes the tests pass. Start with the connect and deleteAll methods to make your path smooth. All is answered in the solved branch, but your journey may lead to better answers so don't follow the road already debugged. This koan is designed to help you prepare for the node.js MongoDB Associate Developer certification exam. The examples here will likely not appear in the exam, but the knowledge gained here will help you to prepare. May you find deep inner peace on your certification journey.

## Prerequists
- [Docker](https://docs.docker.com/desktop/install/mac-install/)
- NPM and Node (I suggest [using NVM](https://heynode.com/tutorial/install-nodejs-locally-nvm/))

NOTE: The MongoDB Drivers expect node version 16 or higher. Development testing was done with V18.16.0

This koan makes use of a docker instance of MongoDB. You can start the MongoDB Instance, and a MongoExpress instance for it with:

```bash
docker compose up --detach
```
- Check, the container is running

Once those containers have started, you can access the Express instance [here](http://localhost:8081). There won't be much to see, after you run the tests at least once you should see a "StageZero" database with a koan_products collection, but that collection is emptied after each test run so there won't be data in it unless you time things just right.

- You're such a trickster. Ok, I see the app and we need persistent data for it. 

When you are done with your testing you can stop the containers with:

```bash
docker compose down
```
- Confirmed container is working

## To install dependencies

```bash
npm install
```

## To run jest tests

```bash
npm run test
```

## To have the TypeScript Compiler watch for file changes

```bash
npm run tsc:watch
```

## To have jest watch for file changes

```bash
npm run test:watch
```
