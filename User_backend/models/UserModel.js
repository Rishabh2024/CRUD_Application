import mongoose from 'mongoose';

const rishabh =mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
})
export default mongoose.model('netlix',rishabh ); // we creating this collection(netlix) using this schema (rishabh)