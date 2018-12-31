const nunjucks = require('nunjucks');
const path = require('path');

module.exports = (app) => {
    app.set('view engine', 'njk');
    let nunjucksEnv = nunjucks.configure(path.join(__dirname, '../../views/'), {
        autoescape: true,
        express: app,
        noCache: true,
        watch: true
    });

    nunjucksEnv.addFilter('asDayMonthYearTime', (date) => {
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        if(date === null || date === undefined) {
            return;
        }
        if(typeof date === 'string') {
            date = new Date(date);
        }
        let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        let formedDate = `${hours}:${minutes}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        return formedDate;
    });


    return app;
};
