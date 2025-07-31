import { Request,Response,NextFunction } from "express";
import { InternalServerError } from "../utils/errors/app.error";
import fs from 'fs';
import logger from "../config/logger.config";
const PingController=(req:Request,res:Response,next:NextFunction)=>{
   logger.info("Ping request received");
   res.json({ message: "Pong" });
}
export default PingController;