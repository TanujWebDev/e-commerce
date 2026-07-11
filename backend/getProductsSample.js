import mongoose from 'mongoose';
import 'dotenv/config';
import productModel from './models/productModel.js';

const getSample = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  const sample = await productModel.find().limit(3);
  console.log(JSON.stringify(sample, null, 2));
  mongoose.connection.close();
};
getSample();
