import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
import useragent from 'express-useragent';

import ignoreFavicon from './middlewares/ignore-favicon';
import limiter from './middlewares/rate-limit';

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
app.use(ignoreFavicon);
app.use(useragent.express());

/**
 * Apply limiter to all request,
 * You can apply limiter to specific api, example:
 * app.use('/api', limiter);
 */
app.use(limiter);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

export default app;
