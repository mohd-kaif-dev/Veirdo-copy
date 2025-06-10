import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    ordersCount: {
        type: Number,
        default: 0,
    },
    shopifyId: {
        type: String,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    totalSpent: {
        type: Number,
        default: 0
    }

},);

const User = mongoose.model('users', userSchema);

export default User;

