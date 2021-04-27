import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost/noderest';

mongoose.connect(MONGODB_URL, { useMongoClient: true });
mongoose.Promise = global.Promise;

export default mongoose;

