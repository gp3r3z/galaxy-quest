import { dbContext } from "../db/DbContext.js"


class PlanetsService {
    async getPlanets(planetId) {
        const planets = await dbContext.Planet.find({ galaxyId: planetId }).populate('galaxy')
        return planets
    }
    async createPlanet(planetBody) {

        const planet = await dbContext.Planet.create(planetBody)
        await planet.populate('galaxy', 'name stars')
        return planet
    }
}

export const planetsService = new PlanetsService()