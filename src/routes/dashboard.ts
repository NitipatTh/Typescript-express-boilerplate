import { Router, Request, Response } from "express";

const router = Router();

// @route GET /dashboard
// @desc dashboard api
// @access PUBLIC
router.get("/", (req: Request, res: Response) => {
    res.sendStatus(200);
});

export default router;