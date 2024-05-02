// const express = require("express");
// const bodyParser = require("body-parser");
// const { spawn } = require("child_process");
// const cors = require("cors");
// const yfinance = require("yahoo-finance");
// const { log } = require("console");
// require("dotenv").config(); // Load environment variables from .env file
// const apiKey = process.env.ALPHA_VANTAGE_API_KEY;

// const app = express();
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("app is working..");
// });

// app.post("/getStockData", async (req, res) => {
//   console.log("purana getStockData")
//   try {
//     const { stockSymbol, startDate, endDate } = req.body;

//     const df = await yfinance.historical({
//       symbols: [stockSymbol],
//       from: startDate,
//       to: endDate,
//     });
//     res.json({ success: true, data: df });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: "Internal Server Error" });
//   }
// });

// app.get("/alpha", (req, res) => {
//   "use strict";
//   var request = require("request");

//   var url =
//     "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=ved&apikey=" +
//     apiKey;

//   var url2 =
//     "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=" +
//     apiKey;

//   request.get(
//     {
//       url: url,
//       json: true,
//       headers: { "User-Agent": "request" },
//     },
//     (err, response, data) => {
//       if (err) {
//         console.log("Error:", err);
//       } else if (response.statusCode !== 200) {
//         console.log("Status:", response.statusCode);
//       } else {
//         // Check if data and bestMatches are defined
//         console.log(data);
//         if (data) {
//           const nseStocks = data.bestMatches.filter((stock) => {
//             return (
//               stock["4. region"] === "India/Bombay" &&
//               stock["3. type"] === "Equity"
//             );
//           });

//           console.log(nseStocks);
//           res.send(nseStocks);
//         }
//       }
//     }
//   );
// });

// app.post("/predictstock/:startdate/:enddate/:stocksymbol", async (req, res) => {
//   // const { startDate, endDate, stockSymbol } = req.params;
//   const startDate = req.params.startdate;
//   const endDate = req.params.enddate;
//   const stockSymbol = req.params.stocksymbol;
//  console.log("post");
//   console.log(startDate,endDate,stockSymbol);
//   // res.json({ success: true, sdate: startDate , edate: endDate, ssymbol: stockSymbol});

//   try {
//     const combinedArgs = [startDate, endDate, stockSymbol].join(",");
//     console.log("I am from backend",combinedArgs);
//     console.log(combinedArgs);
//     const pythonProcess = spawn("python", ["get_stockdata.py", combinedArgs]);
//   console.log("pythonProcess "+JSON.stringify(pythonProcess))
//     let pythonOutput = "";

//     // Listen for data from the Python process (optional)
//     pythonProcess.stdout.on("data", (data) => {
//       console.log("1")
//       if (data.toString()[0] == "[" && data.toString()[1] == "[") {
//         console.log("2")
//         pythonOutput += data.toString();
//         console.log("3")
//         console.log(data);
//         console.log("4")
//         console.log(data.toString());
//         console.log("5")
//         console.log(data.toString()[0], data.toString()[1]);
//         console.log("6")
//       }
//     });

//     // Listen for errors from the Python process (optional)
//     pythonProcess.stderr.on("data", (data) => {
//       console.error(`Python stderror: ${data}`);
//     });

//     // When the Python process closes
//     pythonProcess.on("close", (code) => {
//       if (code === 0) {
//         // console.log("Prediction data:", pythonOutput);
//         const innerArrayStrings = pythonOutput.slice(2, -2).split("], [");
//         const parsedArray = innerArrayStrings.map((inner) =>
//           inner.split(",").map(Number)
//         );
//         console.log(parsedArray);
//         console.log(parsedArray);
//         res.json({ success: true, predictionDataInJSON: parsedArray});

//       } else {
//         res.status(500).send("Error running the Python script");
//       }
//     });
//   } catch (error) {
//     console.error(error);
//   }
// });
// app.listen(3001, () => {
//   console.log("started on 3001...");
// });


///----------------------------------------------------------------------------------------------
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
const { spawn } = require("child_process");
const cors = require("cors");
const alpha = require("alphavantage")({ key: "TISP7NSSWK7746H4"});

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("app is working..");
});

app.get("/alpha", (req, res) => {
  console.log("alpha chala 2");
  "use strict";
  var request = require("request");

  var url =
    "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=ved&apikey=" +
    apiKey;

  var url2 =
    "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=" +
    apiKey;

  request.get(
    {
      url: url,
      json: true,
      headers: { "User-Agent": "request" },
    },
    (err, response, data) => {
      if (err) {
        console.log("Error:", err);
      } else if (response.statusCode !== 200) {
        console.log("Status:", response.statusCode);
      } else {
        // Check if data and bestMatches are defined
        console.log(data);
        if (data) {
          const nseStocks = data.bestMatches.filter((stock) => {
            return (
              stock["4. region"] === "India/Bombay" &&
              stock["3. type"] === "Equity"
            );
          });

          console.log(nseStocks);
          res.send(nseStocks);
        }
      }
    }
  );
});
app.post("/getStockData", async (req, res) => {
  console.log("gatesock chala")
  try {
    const { stockSymbol, startDate, endDate } = req.body;
    
   console.log("stockSymbol",stockSymbol)
    console.log("startDate",startDate)
    console.log("endDate",endDate)
    let newStockSymbol = stockSymbol.replace(".NS", "");
    console.log("newStockSymbol",newStockSymbol)
    newStockSymbol=newStockSymbol.trim();
    console.log("newStockSymbol",newStockSymbol)

    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${newStockSymbol}&apikey=${apiKey}&start_date=${startDate}&end_date=${endDate}`;

    const response = await fetch(apiUrl);
    console.log("response",response)
    const data = await response.json();
    console.log(data);
    // Extract the time series data
    const timeSeriesData = data["Time Series (Daily)"];

    // Format the data as needed
    const formattedData = Object.entries(timeSeriesData).map(([date, values]) => ({
      date,
      open: parseFloat(values["1. open"]),
      high: parseFloat(values["2. high"]),
      low: parseFloat(values["3. low"]),
      close: parseFloat(values["4. close"]),
      volume: parseInt(values["5. volume"]),
    }));
    console.log(5);
   console.log(formattedData)
   console.log("startDate",startDate)
    console.log("endDate",endDate)
    res.json({ success: true, data: formattedData });
  } catch (error) {
    console.error("An error occurred while fetching stock data from AlphaVantage:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});
app.get("/alpha", (req, res) => {
  "use strict";
  var request = require("request");

  var url =
    "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=ved&apikey=" +
    process.env.ALPHA_VANTAGE_API_KEY;

  var url2 =
    "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=" +
    process.env.ALPHA_VANTAGE_API_KEY;

  request.get(
    {
      url: url,
      json: true,
      headers: { "User-Agent": "request" },
    },
    (err, response, data) => {
      if (err) {
        console.log("Error:", err);
      } else if (response.statusCode !== 200) {
        console.log("Status:", response.statusCode);
      } else {
        // Check if data and bestMatches are defined
        console.log(data);
        if (data) {
          const nseStocks = data.bestMatches.filter((stock) => {
            return (
              stock["4. region"] === "India/Bombay" &&
              stock["3. type"] === "Equity"
            );
          });

          console.log(nseStocks);
          res.send(nseStocks);
        }
      }
    }
  );
});

app.post("/predictstock/:startdate/:enddate/:stocksymbol", async (req, res) => {
  // const { startDate, endDate, stockSymbol } = req.params;
  const startDate = req.params.startdate;
  const endDate = req.params.enddate;
  const stockSymbol = req.params.stocksymbol;
 console.log("post");
  console.log(startDate,endDate,stockSymbol);
  // res.json({ success: true, sdate: startDate , edate: endDate, ssymbol: stockSymbol});

  try {
    const combinedArgs = [startDate, endDate, stockSymbol].join(",");
    console.log("I am from backend",combinedArgs);
    console.log(combinedArgs);
    const pythonProcess = spawn("python", ["get_stockdata.py", combinedArgs]);
  console.log("pythonProcess "+JSON.stringify(pythonProcess))
    let pythonOutput = "";

    // Listen for data from the Python process (optional)
    pythonProcess.stdout.on("data", (data) => {
     
      if (data.toString()[0] == "[" && data.toString()[1] == "[") {
      
        pythonOutput += data.toString();
        
        console.log(data);
       
        console.log(data.toString());
        console.log(data.toString()[0], data.toString()[1]);
      }
    });

    // Listen for errors from the Python process (optional)
    pythonProcess.stderr.on("data", (data) => {
      console.error(`Python stderror: ${data}`);
    });

    // When the Python process closes
    pythonProcess.on("close", (code) => {
      if (code === 0) {
        // console.log("Prediction data:", pythonOutput);
        const innerArrayStrings = pythonOutput.slice(2, -2).split("], [");
        const parsedArray = innerArrayStrings.map((inner) =>
          inner.split(",").map(Number)
        );
        console.log(parsedArray);
        console.log(parsedArray);
        res.json({ success: true, predictionDataInJSON: parsedArray});

      } else {
        res.status(500).send("Error running the Python script");
      }
    });
  } catch (error) {
    console.log("error happening")
    console.error(error);
  }
});

// Function to predict stock prices (example)


app.listen(3001, () => {
  console.log("Server started on port 3001...");
});
