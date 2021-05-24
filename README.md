# Aha ndị Igbo API (Igbo Names API)

> The Igbo people, an ethnic group native to the present-day south-central and southeastern Nigeria, bear names that are rich in meaning and often with unique stories behind them, like many other African native names.

This API exposes over 300+ Igbo Names for Boys and Girls with their pet names and meaning.

## API URL

To try it out, check out this link https://aha-ndi-igbo.azurewebsites.net

## Getting Started

These instructions will get a copy of the project up and running on your machine for development and testing purposes.

### Prerequisites

To run this project locally, the follow tools need to be installed:

* [Node.js](https://nodejs.org/en/download/)
* [NPM](https://www.npmjs.com/)
* [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)

### Installation

Clone the project:

```
git clone https://github.com/vincentiroleh/igbonames.git
```

Move into the project directory and install it's dependencies:

```
cd igbonames && npm install
```


To start the dev API server run the following command:

```
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080/) to see the API

## Usage

### Documentation

`Base url:` https://aha-ndi-igbo.azurewebsites.net

### GET Names

- This route will let you get a list of all the Igbo names for boys

```
/api/v1/boys
```

- This route will let you get a list of all the Igbo names for girls

```
/api/v1/girls
```

- This route will let you get a specific name either boy or girl 

```
/api/v1/girls/{girlName}
```

```
/api/v1/boys/{boyName}
```


