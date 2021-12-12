
import express from 'express'
import Zombie from 'zombie'

const app=express();
const PORT=process.env.PORT||4321;
app
    .use(function (req, res, next) {
        res.setHeader('Content-Type', 'text/plain')
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
        next()
    })

    .get('/login/', (req, res) => {
        res.send("itmo308556")
    })
    .get('/test/', async r => {
        const { URL } = r.query;
        const page = new Zombie();
        await page.visit(URL);
        await page.pressButton('#bt');
        const got = await page.document.querySelector('#inp').value;
        r.res.send(got);
        
    })
  .listen(PORT,()=>console.log(`SERVER is linsteing on ${PORT}`))
    