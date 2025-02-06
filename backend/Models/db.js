const mongoose = require('mongoose');

const mongo_url = process.env.URI;

mongoose.connect(mongo_url)
    .then(()=>  {
        console.log(`MongoDB Connected... to: ${mongo_url}`);
    }).catch((err) => {
        console.log(`MongoDB Connection Error: `, err);
    })