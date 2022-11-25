import express from "express";
import stockInformation from './stockInformation'
const router=express.Router()

router.use('/', stockInformation);

export default router;