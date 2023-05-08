import passport from "passport"
import dotenv from "dotenv"
import {
  Strategy as JWTStrategy,
  ExtractJwt,
  Strategy,
  StrategyOptions,
} from "passport-jwt"
import { Employer } from "../models/Employer"
import { NextFunction, Request, Response } from "express"
import JWT from "jsonwebtoken"

dotenv.config()
//types and interfaces
interface JwtErrorJson {
  status: string
  message: string
}

//Strategy configuration
const notAuthJson = {
  status: 401,
  message: "Not Authorized",
}
const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.PRIVATE_KEY,
}
//passport
passport.use(
  new JWTStrategy(options, async (payload, done) => {
    try {
      const user = await Employer.findByPk(payload.id)
      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    } catch (err) {
      done(err)
    }
  })
)
//generate token function
export const generateToken = (data: object) => {
  return JWT.sign(data, process.env.PRIVATE_KEY as string)
}
//creating midleware
export const privateRoute = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authFunction = passport.authenticate(
    "jwt",
    (err: JwtErrorJson, user: object) => {
      if (user) {
        next()
      } else {
        next(notAuthJson)
      }
    }
  )
  authFunction(req, res, next)
}
