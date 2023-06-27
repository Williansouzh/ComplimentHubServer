import { Request, Response } from "express"
import { Employer } from "../models/Employer"
import { generateToken } from "../config/passport"

export const getAllEmployers = async (req: Request, res: Response) => {
  const employers = await Employer.findAll()
  res.json({
    messgae: "ola",
    response: employers,
  })
}
export const createNewUser = async (req: Request, res: Response) => {
  try {
    const { name, age, email, post, password } = req.body

    if (name && age && email && post && password) {
      // Verificar se o usuário já existe
      const existingUser = await Employer.findOne({ where: { email } })
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" })
      }

      // Ler o buffer da imagem

      // Criar novo usuário
      const newUser = await Employer.create({
        name,
        age,
        email,
        post,
        password,
      })

      // Gerar token de autenticação
      const token = generateToken({
        id: newUser.id,
      })

      // Retornar resposta com sucesso
      res.status(201).json({
        message: "User created successfully",
        id: newUser.id,
        token,
      })
    } else {
      res.json({
        message: req.body,
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      Errormessage: "Internal server error",
      error,
    })
  }
}
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email && password) {
    try {
      const user = await Employer.findOne({
        where: { email, password },
      })
      if (user) {
        const token = generateToken({
          id: user.id,
        })
        res.status(200).json({
          status: true,
          token: token,
          user: user,
        })
      } else {
        res.status(200).json({
          status: false,
        })
        return
      }
    } catch (error) {
      res.status(401).json({
        error: error,
      })
    }
  }
}
