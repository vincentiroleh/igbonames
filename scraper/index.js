console.log('Running the scrapper...');

const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request-promise');

const BoysModel = require('../app/boysModel');

const BoysArr = [];
const GirlsArr = [];

const boysUrl = 'https://maternitynest.com/igbo-names-boys';
const girlsUrl = 'https://maternitynest.com/nigerian-baby-names-igbo-names-girls';

const boysFilePath = 'boys.json';
const girlsFilePath = 'girls.json';


async function Main(url, filePath, arr) {
    try {
        const result = await request.get(url);
        const $ = cheerio.load(result);

        $("table > tbody > tr").each((index, element) => {
            const tds = $(element).find('td');

            // Name each of the row data we need
            const name = $(tds[0]).text().trim();
            const pet_name = $(tds[1]).text().trim();
            const meaning = $(tds[2]).text().trim();

            // Table Row
            const tableRow = { name, pet_name, meaning };
            arr.push(tableRow);
        });

        const writeStream = fs.createWriteStream(filePath);
        writeStream.write(JSON.stringify(arr), 'utf-8');
        writeStream.on('error', (err) => console.error(err))
        writeStream.on('finish', () => console.log(`Wrote all data to file ${filePath}`))
        writeStream.end();
    } catch (error) {
        console.error(error)
    }
}


Main(boysUrl, boysFilePath, BoysArr);
Main(girlsUrl, girlsFilePath, GirlsArr);
