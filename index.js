const fs = require('node:fs')
const axios = require('axios')

async function scrapSite () {

    const response = await axios.get('PASTE YUT LINK HERE')

    fs.writeFile('index.html', response.data, (err) => {
        if (err) throw err;

        console.log('The file has been saved!');
    })
}


scrapSite()
