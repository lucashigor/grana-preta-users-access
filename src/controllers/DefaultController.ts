import { Request, Response } from 'express'

class DefaultController {
  public async index (req: Request, res: Response) : Promise<Response> {
		let ret = "{ text = Hello World }"

		req

    return res.json(ret)
	}
}

export default new DefaultController()