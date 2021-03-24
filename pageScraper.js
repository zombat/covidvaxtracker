const email = require(`./email.js`);

var scraperObject = {
    url: `https://www.cvs.com/immunizations/covid-19-vaccine`,
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`${new Date()} - Navigating to ${this.url}...`);
        await page.goto(this.url);
        var linkForNJ = await page.$x("//a[contains(., 'New Jersey')]");
        page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));
        await linkForNJ[0].click();
        var brickInfo = (await page.content()).match(/Brick, NJ<\/span><\/td><td><span class="status">Available<\/span>/gi);
          if(brickInfo != null){
            process.env.CSVEMAILLIST.emailList.forEach((emailAddress, i) => {
    					if(emailAddress.length){
                	email.sendEmail(emailAddress, `CVS Brick COVID-19 Availability Notification`, `${new Date()} - !! Vaccines may be available !!\nhttps://www.cvs.com/immunizations/covid-19-vaccinee`);
              }
            });
          } else {
            console.log(`${new Date()} - CVS - Brick is Fully Booked`);
          }
        var barnegatInfo = (await page.content()).match(/Barnegat, NJ<\/span><\/td><td><span class="status">Available<\/span>/gi);
          if(barnegatInfo != null){
            process.env.CSVEMAILLIST.emailList.forEach((emailAddress, i) => {
    					if(emailAddress.length){
                	email.sendEmail(emailAddress, `CVS Barnegat COVID-19 Availability Notification`, `${new Date()} - !! Vaccines may be available !!\nhttps://www.cvs.com/immunizations/covid-19-vaccinee`);
              }
            });

          } else {
            console.log(`${new Date()} - CVS - Barnegat is Fully Booked`);
          }
        var beachwoodInfo = (await page.content()).match(/Beachwood, NJ<\/span><\/td><td><span class="status">Available<\/span>/gi);
          if(beachwoodInfo != null){
            process.env.CSVEMAILLIST.emailList.forEach((emailAddress, i) => {
    					if(emailAddress.length){
                	email.sendEmail(emailAddress, `CVS Beachwood COVID-19 Availability Notification`, `${new Date()} - !! Vaccines may be available !!\nhttps://www.cvs.com/immunizations/covid-19-vaccinee`);
              }
            });
          } else {
            console.log(`${new Date()} - CVS - Beachwood is Fully Booked`);
          }
        var lakewoodInfo = (await page.content()).match(/Lakewood, NJ<\/span><\/td><td><span class="status">Available<\/span>/gi);
          if(lakewoodInfo != null){
            process.env.CSVEMAILLIST.emailList.forEach((emailAddress, i) => {
    					if(emailAddress.length){
                	email.sendEmail(emailAddress, `CVS Lakewood COVID-19 Availability Notification`, `${new Date()} - !! Vaccines may be available !!\nhttps://www.cvs.com/immunizations/covid-19-vaccinee`);
              }
            });
          } else {
            console.log(`${new Date()} - CVS - Lakewood is Fully Booked`);
          }
        var manahawkinInfo = (await page.content()).match(/Manahawkin, NJ<\/span><\/td><td><span class="status">Available<\/span>/gi);
          if(manahawkinInfo != null){
            process.env.CSVEMAILLIST.emailList.forEach((emailAddress, i) => {
    					if(emailAddress.length){
                	email.sendEmail(emailAddress, `CVS Manahawkin COVID-19 Availability Notification`, `${new Date()} - !! Vaccines may be available !!\nhttps://www.cvs.com/immunizations/covid-19-vaccinee`);
              }
            });
          } else {
            console.log(`${new Date()} - CVS - Manahawkin is Fully Booked`);
          }
        var tomsriverInfo = (await page.content()).match(/Toms River, NJ<\/span><\/td><td><span class="status">Available<\/span>/gi);
          if(tomsriverInfo != null){
            process.env.CSVEMAILLIST.emailList.forEach((emailAddress, i) => {
    					if(emailAddress.length){
                	email.sendEmail(emailAddress, `CVS Toms River COVID-19 Availability Notification`, `${new Date()} - !! Vaccines may be available !!\nhttps://www.cvs.com/immunizations/covid-19-vaccinee`);
              }
            });
          } else {
            console.log(`${new Date()} - CVS - Toms River is Fully Booked`);
          }
        var whitingInfo = (await page.content()).match(/Whiting, NJ<\/span><\/td><td><span class="status">Available<\/span>/gi);
          if(whitingInfo != null){
            process.env.CSVEMAILLIST.emailList.forEach((emailAddress, i) => {
    					if(emailAddress.length){
                	email.sendEmail(emailAddress, `CVS Whiting COVID-19 Availability Notification`, `${new Date()} - !! Vaccines may be available !!\nhttps://www.cvs.com/immunizations/covid-19-vaccinee`);
              }
            });
          } else {
            console.log(`${new Date()} - CVS - Whiting is Fully Booked`);
          }
          page.close();
        //console.log(page);
    }
}

module.exports = scraperObject;
