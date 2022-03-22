import express, {
	Application,
	Request,
	RequestHandler,
	Response,
} from "express";

import rootRouter from "./routers/index.router";

require("./db/mongooseConnect.ts");
require("./models/categories.model");
require("./models/nguoiDung.model");

const port = process.env.PORT || 3000;

const app: Application = express();
app.use(express.json());
app.use("/api", rootRouter);

app.listen(port, function () {
	console.log("Express server listening on port", port);
});
