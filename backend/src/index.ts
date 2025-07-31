import express from 'express';
import { Request,Response } from 'express';
import { ServerConfig } from './config';
import V1router from './routers/v1/index.router';
import V2router from './routers/v2/index.router';
import logger from './config/logger.config';
import { appErrorHandler } from './middlewares/error.middleware';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware';
const app = express();

app.use(express.json());
app.use(attachCorrelationIdMiddleware);
app.use('/api/v1', V1router);
app.use('/api/v2', V2router);
app.use(appErrorHandler);


app.listen(ServerConfig.port, () => {
    logger.info(`Server is running on port ${ServerConfig.port}`);
    logger.info("Press Ctrl+C to stop the server");
});
