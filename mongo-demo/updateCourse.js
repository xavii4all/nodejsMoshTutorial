const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/mongo-exercises', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect('mongodb://localhost/mongo-exercises')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number,
  tags: [String],
  date: Date,
});

const Course = mongoose.model('Course', courseSchema);

async function updateCourse(id) {
  const course = await Course.findById(id);
  debugger;

  // const course = await Course.findByIdAndUpdate(id, {
  //   $set: {
  //     'author': 'cacaacacasc',
  //   }
  // });
  // const course = await Course.update({ _id: id }, {
  //   $set: {
  //     'author': 'Jose Pingo',
  //     'isPublished': false
  //   }
  // });

  console.log(course);
  
  // if (!course) return;
  
  // console.log(course);

  // course.isPublished = true;
  // course.author = 'Jose Pingo';

  // const result = await course.save();
  // console.log(result);
}
  
updateCourse('5a68fdc3615eda645bc6bdec');