const  articleRoutes = require('./article');
const  cityRoutes = require('./city');
module.exports = (app) => {
   
    app.use('/api/v1/article', articleRoutes);
    app.use('/api/v1/city', cityRoutes);
};