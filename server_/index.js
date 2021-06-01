let express = require("express");
let app = express();
let cors = require("cors");
const fetch = require("node-fetch");

//initlizing middleware cors
app.use(
	cors({
		origin: "*",
	})
);
app.use(express.json());


//get request to getting dta from api
app.get("/", (request, response) => {
	 fetch('https://api.wazirx.com/api/v2/tickers')
	    .then(res => res.json())
	    .then(json => {
				// console.log(json)
				response.send(json);
			})
});


//listining at port 8000
const port = 8000;
app.listen(port, listening);
function listening() {
	console.log(`server is running on localhost:${port}`);
}