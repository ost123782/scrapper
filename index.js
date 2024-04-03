const fs = require('node:fs')
const axios = require('axios')

async function scrapSite () {

    const response = await axios.get('http://lyceum-lvivskyi.lviv.sch.in.ua/')

    fs.writeFile('index.html', response.data, (err) => {
        if (err) throw err;

        console.log('The file has been saved!');
    })
}


scrapSite()