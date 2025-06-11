const  articleRoutes = require('./article');
module.exports = (app) => {
   
    app.use('/api/v1/article', articleRoutes);

};