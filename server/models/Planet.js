import { Schema } from "mongoose";



export const PlanetSchema = new Schema({
    name: { type: String, required: true },
    biome: { type: String, required: true },
    atmosphere: { type: Boolean },
    galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' }


}, { timestamps: true, toJSON: { virtuals: true } })


// NOTE       virtual name to tie populate into 


PlanetSchema.virtual('galaxy', {
    localField: 'galaxyId',
    ref: 'Galaxy',
    foreignField: '_id',
    justOne: true
})
