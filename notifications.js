window.Notifications = {
  // Local (client-only) collection
  collection: new Mongo.Collection(null),

  push: function(data) {
    // types:
    // success
    // warning
    // danger
    Notifications.collection.insert({message: data.message, type: data.type})
  }
};
