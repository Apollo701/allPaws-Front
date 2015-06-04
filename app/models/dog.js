import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  breed: DS.attr('string'),
  bio: DS.attr('string'),
  age: DS.attr('number'),
  sex: DS.attr('string'),
  size: DS.attr('string'),
  location: DS.attr('string'),
  spayedOrNeutered: DS.attr('boolean'),
  animalFriendly: DS.attr('boolean'),
  trained: DS.attr('boolean'),
  childFriendly: DS.attr('boolean'),
  adopted: DS.attr('boolean'),
  photos: DS.attr(),
});