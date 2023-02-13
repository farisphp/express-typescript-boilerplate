import 'dotenv/config';
import app from './app';
import config from './config';

app.listen(config.app.PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${config.app.PORT}`);
});
