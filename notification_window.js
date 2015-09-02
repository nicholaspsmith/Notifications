Template.easyNotifications.helpers({
  notifications: function() {
    return Notifications.collection.find();
  }
})

Template.easyNotifications.rendered = function() {
  var notification = this.data;
  Meteor.setTimeout(function() {
    //expire after 24 hours
    Notifications.collection.remove(notification._id);
  }, 24 * 60 * 60 * 1000);
}
