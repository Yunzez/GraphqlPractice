const graphql = require('graphql')
const {GraphQLObjectType, GraphQLInt, GraphQLString} = graphql

// we put all type definitions here 

// definition for user 
const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
      id:{type: GraphQLInt},
      firstName:{type: GraphQLString},
      lastName:{type: GraphQLString},
      email:{type: GraphQLString},
      password:{type: GraphQLString}
    })
  })
  
  module.exports = UserType