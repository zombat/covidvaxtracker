
require('dotenv').config();
const	got = require(`got`),
			browserObject = require(`./browser`),
			scraperController = require(`./pageController`),
			email = require(`./email.js`);

runCheck = () => {
	// Ocean County Health Department
	(async () => {
		try {
			var response = await got(`https://www.ochd.org/covid19-vaccine-update/`);
			if(response.body.match(/BOOKED FULL AT THIS TIME/)){
				console.log(`${new Date()} - ${response.body.match(/BOOKED FULL AT THIS TIME/)[0]} -  https://www.ochd.org/covid19-vaccine-update/`);

			} else {
				process.env.CSVEMAILLIST.split(`,`).forEach((emailAddress, i) => {
					if(emailAddress.length){
						email.sendEmail(emailAddress, `OCHD COVID-19 Availability Notification`, `${new Date()} - !! Vaccines may be available !!\nhttps://www.ochd.org/covid19-vaccine-update`);
					}
				});
			}
		} catch (error) {
			console.log(error.response.body);
		}
	})();
	scrapeCVS();
	setTimeout(runCheck, 3e5);
}

scrapeCVS = () => {
	//Start the browser and create a browser instance
	var browserInstance = browserObject.startBrowser();

	// Pass the browser instance to the scraper controller
	scraperController(browserInstance);
}

runCheck();
console.log(`\nCOVID-19 Tracker Restarted`, `OCHD COVID-19 Tracker Restarted at ${new Date()}\n`);