import { galaxiesService } from "../services/GalaxiesService.js";
import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";


export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxy')
        this.router
            .get('', this.getAll)
            .post('', this.create)
            .get('/:id/planets', this.getPlanets)
            .post('/:id/planets', this.createPlanet)

    }
    async getAll(req, res, next) {
        try {
            const galaxies = await galaxiesService.getAll()
            return res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            const createGalaxy = await galaxiesService.create(req.body)
            return res.send(createGalaxy)
        } catch (error) {
            next(error)
        }
    }
    async getPlanets(req, res, next) {
        try {
            logger.log(req.params.id)
            const planets = await planetsService.getPlanets(req.params.id)
            return res.send(planets)

        } catch (error) {
            next(error)
        }
    }
    async createPlanet(req, res, next) {
        try {
            logger.log("Galaxy Id: ", req.params.id)
            logger.log("planetBody : ", req.body)
            req.body.galaxyId = req.params.id
            logger.log(req.body)
            const planets = await planetsService.createPlanet(req.body)

            return res.send(planets)

        } catch (error) {
            next(error)
        }
    }
}