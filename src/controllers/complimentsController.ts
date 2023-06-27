import { Request, Response } from "express"
import { Compliments } from "../models/Compliments"
import { json } from "sequelize"

export const getAllCompliments = async (req: Request, res: Response) => {
  try {
    const compliments = await Compliments.findAll()
    res.json({
      compliments: compliments,
    })
  } catch (error) {
    res.json({
      error,
    })
  }
}
export const addNewCompliment = async (req: Request, res: Response) => {
  try {
    const { compliment, date, receiver, sender, id, department } = req.body

    const newCompliment = await Compliments.create({
      compliment,
      date,
      receiver,
      sender,
      id,
      department,
    })

    res.status(201).json({
      id: newCompliment.id,
    })
  } catch (error) {
    console.log(error)
    res.json(500)
  }
}

export const addLike = async (req: Request, res: Response) => {
  const { id, liked } = req.body
  if (id && liked) {
    try {
      const compliment = await Compliments.findByPk(id)
      if (compliment) {
        if (liked === false) {
          compliment.likes = compliment.likes + 1
        } else {
          compliment.likes = compliment.likes - 1
        }
        await compliment?.save()
        res.json(compliment)
      } else {
        res.json({
          error: "compliment dont found",
        })
      }
    } catch (error) {
      res.json({
        error,
      })
    }
  } else {
    res
    json({
      message: "data dont sent",
    })
  }
}
export const addDeslike = async (req: Request, res: Response) => {
  const { id, liked } = req.body
  if (id && liked) {
    try {
      const compliment = await Compliments.findByPk(id)
      if (compliment) {
        if (liked === false) {
          compliment.deslikes = compliment.deslikes + 1
        } else {
          compliment.deslikes = compliment.deslikes - 1
        }
        await compliment?.save()
        res.json(compliment)
      } else {
        res.json({
          error: "compliment dont found",
        })
      }
    } catch (error) {
      res.json({
        error,
      })
    }
  } else {
    res
    json({
      message: "data dont sent",
    })
  }
}
