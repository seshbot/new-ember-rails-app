// for more details see: http://emberjs.com/guides/models/defining-models/

GameTableServer.User = DS.Model.extend({
   name: DS.attr('string'),
   username: DS.attr('string'),
   email: DS.attr('string'),
   admin: DS.attr('boolean'),
});
