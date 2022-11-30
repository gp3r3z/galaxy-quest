import { Schema } from "mongoose";

// TODO i think this is right 


export const GalaxySchema = new Schema({
    name: { type: String, required: true },
    stars: { type: Number, required: true },

}, { timestamps: true, toJSON: { virtuals: true } })

// NOTE       virtual name to tie populate into 
GalaxySchema.virtual('planetCount', {
    localField: 'id',
    ref: 'Planet',
    foreignField: '_id',
    count: true
})


