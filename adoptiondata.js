var request = require('request');
var cheerio = require('cheerio');
var fs = require("fs");

request('http://animal-adoption.coa.gov.tw/animal/animal_info/?p=1&id=62165', (error, response, body) => {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.

    var $ = cheerio.load(body);
    var title, type, sexuel;
    var result = [];

    title = $("div p:nth-child(4) span.value").text();
    type = $("div p:nth-child(7) span.value.l").text();
    sexuel = $("div p:nth-child(7) span.value").text().substr(1,2);

    result.push(title);
    result.push(type);
    result.push(sexuel);

    fs.writeFileSync("result.json", JSON.stringify(result));
    console.log();

  }
})