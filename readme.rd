


const { URL } = r.query;
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(URL, { waitUntil: 'networkidle2' });
        await page.click('#bt');
        const input = document.querySelector('#inp').value;
        r.res.send(input);