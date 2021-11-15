import mongoose from 'mongoose';

const healthSchema=mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
});

export default mongoose.model('messageContent',healthSchema);