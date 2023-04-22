import { Request, Response } from "express"
import { Employer } from "../models/Employer"
export const getAllEmployers = async (req: Request, res: Response) => {
  const employers = await Employer.findAll()
  res.json({
    response: employers,
  })
}
