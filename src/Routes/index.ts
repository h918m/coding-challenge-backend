import express from "express";
import getStock from './getStock'
const router=express.Router()



router.use('/getStock',getStock)
export default router;