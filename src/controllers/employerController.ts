import { Request, Response } from "express"
import { Employer } from "../models/Employer"
export const getAllEmployers = async (req: Request, res: Response) => {
  const employers = await Employer.findAll()
  res.json({
    messgae: "ola",
    response: employers,
  })
}
export const CreateNewUser = async (req: Request, res: Response) => {
  const { name, age, email, post, password } = req.body
  if (name && age && email && post && password) {
    try {
      const hasUser = await Employer.findOne({ where: { email } })
      if (hasUser) {
        res.status(409).json({ message: "This user already exists" })
      } else {
        const newUser = await Employer.create({
          name,
          age,
          email,
          post,
          password,
        })
        console.log(newUser)
        res.status(201).json({ message: "User created successfully" })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Internal server error", body: req.body })
    }
  } else {
    res.json({
      error: "Data dont sent",
      body: req.body,
    })
  }
}
