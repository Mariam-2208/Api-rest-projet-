const  articleRoutes = require('./article');
const  cityRoutes = require('./city');
const ordreRoutes = require('./ordre');
<<<<<<< HEAD
const adviceRoutes = require('./advice');
const userNotificationRoutes = require('./userNotification');
=======
const adviceRoutes = require('./advice')
const userRoutes = require('./User');
const marketRoutes = require('./market');
>>>>>>> 982ce268eecf9b030deaf0d352ea5dd038cb0162

module.exports = (app) => {

   
  app.use('/api/v1/article', articleRoutes);
 
 app.use('/api/v1/city', cityRoutes);
    app.use('/api/v1/ordre',ordreRoutes);
    app.use('/api/v1/advice',adviceRoutes);
<<<<<<< HEAD
  app.use('/api/v1/usernotification',userNotificationRoutes);
=======
  app.use('/api/v1/market' ,marketRoutes)


>>>>>>> 982ce268eecf9b030deaf0d352ea5dd038cb0162

};