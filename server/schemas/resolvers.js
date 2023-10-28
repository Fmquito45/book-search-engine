const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const test= await User.findOne({ _id: context.user._id });
                return test;
            } 
            throw new AuthenticationError;
        },
    },
    Mutation: {

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },

        saveBook: async (parent, {authors, bookId, description, image, link, title}, context) => {
            if (context.user) {
                description = description || '';
                return await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: {authors, bookId, description, image, link, title} } },
                    { new: true }
                );
            }
            throw new AuthenticationError;
        },

        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                return await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: {bookId }} },
                    { new: true }
                );
            }
            throw new AuthenticationError;
        },
    }
};

module.exports = resolvers;