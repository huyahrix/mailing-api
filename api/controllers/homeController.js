/**
 */
const path = require('path');

let getHome = (req, res) => {
    return res.sendFile(path.join(`${__dirname}/../views/index.html`));
};

module.exports = {
    getHome: getHome
};
