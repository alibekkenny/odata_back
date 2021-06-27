const odata = require('node-odata');

var mongoose = require('mongoose'),
  app = require('express')();

const server = odata('mongodb://localhost:27017/project');

const port = 8080;


// server.resource('books', {
//   title: String,
//   price: Number,
// });
// var models = {
//   Company: mongoose.model('Company', {
//     company_name: { type: String, required: true, trim: true },
//   }),
//   User: mongoose.model('User', {
//     first_name: { type: String, required: true, trim: true },
//     salary: { type: Number, required: true, trim: true },
//     image_path: { type: String, required: true, trim: true },
//     _company: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Company' },
//   }),
//   Post: mongoose.model('Post', {
//     title: { type: String, required: true, trim: true },
//     content: { type: String, required: true, trim: true },
//     _user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
//   })
// }

// const posts = new odata.Resource({
//   rel: '/api/posts',
//   model: models.Post,
//   populate: '_user'
// });

// server.resource(posts)

// const users = new odata.Resource({
//   rel: '/api/users',
//   model: models.User,
//   populate: '_company'
// }).instanceLink('posts', {
//   otherSide: posts,
//   key: '_user'
// });

// server.resource(users)


// const companies = new odata.Resource({
//   rel: '/api/companies',
//   model: models.Company
// }).instanceLink('users', {
//   otherSide: users,
//   key: '_company'
// });

// server.resource(companies)
server.resource('companies', {
  company_name: String,
});

server.resource('users', {
  first_name: String,
  salary: Number,
  image_path: String,
  companyId: { type: String, ref: 'companies', required: true }
});

server.resource('posts', {
  title: String,
  content: String,
  userId: { type: String, ref: 'users', required: true },
});





server.listen(port, () => {
  console.log('This server is running in localhost:' + port);
});

