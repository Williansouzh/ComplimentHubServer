import { Request, Response } from "express"

export const getAllEmployers = async (req: Request, res: Response) => {
  res.json({
    message: "olá",
  })
}
