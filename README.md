[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# book-search-engine

## Description


I built this project to apply newly learned skills to improve applications need to be more performant. This would allow the user to be able to search for new books to read and be able to save them to their account to later on be able to see all of the books saved and be able to delete them. What motivated me in this project was to know at the end I would have taken a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. Inorder to refactor this application I had to create an apollo providerso that requests can communicate with an apollo server. I set up an apollo server to be able to use GraphQl queries and mutations to fetch and modify data. This would replace the existing RESTful API. This required modification of the existing authenication middleware so that it works in the context of the GRAPHQl APi. A set of tasks were completed in front-end files and back-end files to get this application to function as it should. As far as back-end, a schema directory need to be created. This would hold the index.js inorder to be able to export typeDefs and resolvers. The resolver file defined the query and mutation functionality to work with the mongoose models. The typeDefs file defined the necessary query and mutation types. This was a great experience to apply these skills to improve the applications need to be more performat.  

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How To Contribute](#how-to-contribute)
- [Questions](#questions)

## Installation

To install the dependencies enter on the command line; npm i

## Usage

User is able to login or signup to the account. If signing up, they wil be prompted with three imputs for their usernmae, email address, and to create a password. When logged into the site, user is able to search for books, or see saved booked and option to logout. 

![alt text](./assets/images/Screenshot%202023-10-29%20at%209.36.54%20PM.png)

## License

MIT License

https://opensource.org/licenses/MIT

## How to Contribute

To contribute please email me at the email provided below and I will provide steps for creating good issues or pull requests. I will also attached links to external documentations, mailing lists and code of conducts. There will be community and behavioral expectations.

## Questions

The following link is to my github acount:
(https://github.com/fmquito45)

And if you have any further questions I can be reached out in the following email:
fmquitox45@gmail.com