const  articleRoutes = require('./article');
//const  cityRoutes = require('./city');
//const ordreRoutes = require('./ordre');
const adviceRoutes = require('./advice');
//const userNotificationRoutes = require('./userNotification');
//const userRoutes = require('./User');
//const marketRoutes = require('./market');
const contactRoutes = require('./contact')

module.exports = (app) => {

   
  app.use('/api/v1/article', articleRoutes);
  //app.use('/api/v1/city', cityRoutes);
  //app.use('/api/v1/ordre',ordreRoutes);
  app.use('/api/v1/advice',adviceRoutes);
  //app.use('/api/v1/usernotification',userNotificationRoutes);
  //app.use('/api/v1/market' ,marketRoutes);
  app.use('/api/v1/contact',contactRoutes);
  //app.use('/api/v1/user',userRoutes);
  //app.use('/api/v1/market' ,marketRoutes)

};