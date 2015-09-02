Tinytest.add("Notifications - collection", function(test) {
  test.equal(Notifications.collection.find({}).count(), 0);

  Notifications.push('A new notification!');
  test.equal(Notifications.collection.find({}).count(), 1);

  Notifications.collection.remove({});
});
