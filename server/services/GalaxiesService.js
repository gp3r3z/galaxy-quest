import { dbContext } from "../db/DbContext.js"



class GalaxiesService {
    async getAll() {
        const galaxies = await dbContext.Galaxy.find().populate('planetCount')
        return galaxies
    }
    async create(galaxyData) {
        const createdGalaxy = await dbContext.Galaxy.create(galaxyData)
        return createdGalaxy
    }
    async getPlanets(planetId) {
        const planet = await dbContext.Planet.find(planetId).populate('galaxy')
        return planet
    }
}

export const galaxiesService = new GalaxiesService()