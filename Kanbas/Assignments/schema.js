import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true },
        // id: String,
        title: { type: String, required: true },
        course: { type: String, required: true },
        start: String,
        due: String,
        points: String
    },
    { collection: "assignments" }
);

export default assignmentSchema;