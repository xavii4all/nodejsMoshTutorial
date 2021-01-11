const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises', { useNewUrlParser: true, useUnifiedTopology: true })
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

async function getCourses() {
  return await Course
    .find({ isPublished: true })
    .or([ 
      { price: { $gte: 15 } },
      { name: /.*by.*/i }
    ])
    // .sort('-price')
    .select('name author price');
  }
  

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();