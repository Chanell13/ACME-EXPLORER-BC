'use strict';
module.exports=function(app){
    
    var actor= require ('../controllers/actorsCtrl');
    
    /**
   
    * Post an actor 
    *    RequiredRoles: None
    * Put an actor 
    *    RequiredRoles: None
 
	 * @section actors
	 * @type post put
	 * @url /v1/actors
   * @param {string} role (explorer|administrator|manager) 
   */
    
   app.route('/v1/actors')
    .post(actors.create_an_actor);
    

      /**
   * Put an actor
   *    RequiredRoles: to be the proper actor
	 * @section actors
	 * @type  put
	 * @url /v1/actors/:DNI
  */  
  app.route('/v1/actors/:DNI')
  .put(actors.update_an_actor)
  
    


}