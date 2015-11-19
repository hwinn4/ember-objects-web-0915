import Ember from 'ember';

export default Ember.Object.extend({
  wroteRuby: Ember.computed("authorOf", function(){
    if (this.get("authorOf") === "Ruby"){
      return true;
    } else {
      return false;
    }
  }),
  greet: function(){
    return `Hi, My name is ${this.get('firstName')} ${this.get('lastName')}. You can call me ${this.get('nickName')}`;
  },
  isOld: Ember.computed("age", function(){
    if (this.get('age') > 30){
      return true;
    } else {
      return false;
    }
  }),

  conferences: [],

  addConference: function(conf){
    this.conferences.push(conf);
  },

  keyNoteConferences: Ember.computed('conferences.@each.keyNote', function(){
    var conferences = this.get('conferences');
    // debugger;
    var myConferences = conferences.filterBy('keyNote', `${this.get('firstName')} ${this.get('lastName')}`);
    console.log(myConferences);
    return myConferences;
  }),

  conferenceNames: Ember.computed("conferences", function(){
    return this.get("conferences").map(function(conf){
      // debugger;
      return conf.name;
    });
  }),

  conferenceTotal: Ember.computed("conferences", function(){
    return this.conferences.length;
  }),

  itinerary: Ember.computed("conferences", function(){
    return `${this.nickName} is speaking at ${this.get("conferenceTotal")} conferences`;
  }),

  hasValidEmail: Ember.computer("email", function(){
    var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
   return re.test(this.email);
  })


});
