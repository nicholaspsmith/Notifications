Notifications = {
  // Local (client-only) collection
  collection: new Mongo.Collection(null),

  push: function(message) {
    Notifications.collection.insert({message: message, seen: false})
  }
};
