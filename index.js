const app = require('./app');
const mongoose = require('mongoose');

// Connect to MongoDB
const mongoUrl = 'mongodb+srv://deepak:Deepak128@bloglist.fjajnob.mongodb.net/?retryWrites=true&w=majority&appName=blogList';
mongoose.connect(mongoUrl);
console.log("Connected to MongoDB");

// Start the server
const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
