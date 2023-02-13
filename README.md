# express-typescript-boilerplate
Express + Typescript simple boilerplate 

## How to use :shipit:
- Copy `.env.sample` and paste to root directory as `.env`, update `.env` values with your config
- Run `npm install` to install all required dependencies
- Run `npm run prepare` to install husky
- Finally, you can run `npm run dev` to run the server



## Change database client
If you want to change database client, you can change default database connection inside `src/database/index.ts`. Don't forget to uninstall old database client from `package.json`
