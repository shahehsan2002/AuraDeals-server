import express, { Request, Response } from 'express'

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

export const MovieRoutes = router;