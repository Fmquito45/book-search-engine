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


};

module.exports = resolvers;