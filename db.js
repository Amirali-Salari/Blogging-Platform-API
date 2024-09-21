import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/Blogging-Platform')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Could not connect to MongoDB:', err);
        process.exit(1);
    });