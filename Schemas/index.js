const graphql = require('graphql')
const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList, GraphQLID} = graphql

const UserType = require('./TypeDefs/UserType')

// we put the whole schema here 

const userData = [{
    id: '1',
    name:'test', 
    firstName:'test',
    lastName:'test',
  }]




// query, get stuff
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType", 
    fields: {
      getAllUsers: { // we are return a list of users
        type: new GraphQLList(UserType),
        args: {id: {type: GraphQLInt}},
        resolve(parent, args) {
          return userData// sql database if we have one : select * from...
        }
      }
    }
  })
  
  // to use that query, we do 
  // query {
  //   getAllUsers{
  //     firstName
  //   }
  // }
  
  
  
  // mutation, add stuff
  const Mutation = new GraphQLObjectType({
    name:"Mutation",
    fields: {
      createUser: {
        type: UserType,
        args: {
            firstName:{type: GraphQLString},
            lastName:{type: GraphQLString},
            email:{type: GraphQLString},
            password:{type: GraphQLString}
        },
        resolve(parent, args) {
          // if we have database, we use db.query something, insert ...
          // for our fake data
          userData.push({
            id: userData.length + 1,
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
            password: args.password
          })
  
          return args
        }
      }
    }
  })



module.exports = new GraphQLSchema({query: RootQuery , mutation: Mutation})
  