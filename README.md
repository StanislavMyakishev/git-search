# Git search

React + Typescript github repositories search project.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing
Installation requires NPM, so check the following links if it's not installed on your machine.

[Windows](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
<br>
[Mac](https://treehouse.github.io/installation-guides/mac/node-mac.html)

Clone this repo and run

```shell script
$ npm i
```

This will install all dependencies.

## Github access tokens

This app requires github access tokens, which you can generate at your github profile

### Where to go?

Settings -> Developer settings -> Personal access tokens

### Required scopes

Repo, read:packages and user.

###.env.local
When you have your github access token just simply create .env.local file with
<br/>
*no brackets
```text
REACT_APP_ACCESS_TOKEN=(PLACE FOR YOUR TOKEN)
``` 

And here we go! Now you can run app scripts.

## Running the scripts
To run the application in development mode use 

### Run
 
```shell script
$ npm run start
```

### Development

Creating a production build
```shell script
$ npm run build
```

Running precommit hook
```shell script
$ npm run precommit
```

Running Prettier
```shell script
$ npm run prettier
``` 

Running lint-staged
```shell script
$ npm run lint-staged
``` 
Generate Graphql schema
```shell script
$ npm run generate
```

Run Storybook
```shell script
$ npm run storybook
```

Build Storybook
```shell script
$ npm run build-storybook
```

## Authors

* **Stanislav Myakishev** - *Initial work* - [StanislavMyakishev](https://github.com/StanislavMyakishev)
