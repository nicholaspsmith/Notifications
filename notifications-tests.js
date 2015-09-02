Tinytest.add("Notifications - collection", function(test) {
  test.equal(Notifications.collection.find({}).count(), 0);

  Notifications.push('A new notification!');
  test.equal(Notifications.collection.find({}).count(), 1);

  Notifications.collection.remove({});
});

Tinytest.addAsync("Notifications - template", function(test, done) {
  Notifications.push('A new notification!');
  test.equal(Notifications.collection.find({}).count(), 1);

  // render the template
  UI.insert(UI.render(Template.easyNotifications), document.body);

  Meteor.setTimeout(function() {
    test.equal(Notifications.collection.find({}).count(), 0);
    done();
  }, 3500);
});
