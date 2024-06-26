const mongoose = require('mongoose');

// Define Mongoose Schema and Model
const blogSchema = new mongoose.Schema({
  title: {
    type:String,
    required:true,
    minlength:5
  },
  author: {
    type:String,
    required:true,
    minlength:5
  },
  url: String,
  likes: Number
});

blogSchema.set('toJSON',{
  transform:(document,returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})



module.exports = mongoose.model('Blog', blogSchema);
