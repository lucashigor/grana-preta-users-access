import { Request, Response } from 'express'

import FinancialPositionRepository from '../data/repositories/FinancialPositionRepository'

class FinancialPositionController {
  public async index (req: Request, res: Response) : Promise<Response> {
    const { page = 1 } = req.query

    var ret = await FinancialPositionRepository.retrieve(page, 10)

    return res.json(ret)
  }

  public async show (req: Request, res: Response): Promise<Response> {
    var user = await FinancialPositionRepository.findById(req.params.id)

    return res.json(user)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await FinancialPositionRepository.create(req.body)

    return res.json(user)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const user = await FinancialPositionRepository.update(req.params.id, req.body)

    return res.json(user)
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    await FinancialPositionRepository.delete(req.params.id)

    return res.json(true)
  }
}

export default new FinancialPositionController()
