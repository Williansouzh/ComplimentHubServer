import { Request, Response } from "express"

export const getAllEmployers = (req: Request, res: Response) => {
  res.json({
    message: "olá",
  })
}
