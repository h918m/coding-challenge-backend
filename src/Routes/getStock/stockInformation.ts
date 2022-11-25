import express from "express";
import FinnhubAPI, { FinnhubWS } from '@stoqey/finnhub';
import { check, validationResult } from "express-validator";
import { Query } from 'express-serve-static-core';
const router=express.Router()
const finnhubAPI = new FinnhubAPI("bvue7g748v6pkq83cj3g");


export interface TypedRequest<T extends Query, U, P> extends Express.Request {
  body: U,
  query: T,
  params:P
}


router.get(
  "/",
  async (req: TypedRequest<{},{ },{stockSymbol: string}>, res: express.Response) => {

      const stockSymbol:string=req.params.stockSymbol;
      const quote = await finnhubAPI.getQuote(stockSymbol);
    res.send(quote);
  }
);

export default router;
