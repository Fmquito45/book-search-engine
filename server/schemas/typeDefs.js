const typeDefs = `

type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

type Book {
    _id: ID!
    bookId: String
    authors: [String]
    # authors: String
    description: String
    title: String
    image: String
    link: String
  }

type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;