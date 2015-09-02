window.Notifications = {
  // Local (client-only) collection
  collection: new Mongo.Collection(null),

  push: function(data) {
    Notifications.collection.insert({message: data.message, type: data.type, date: new Date()});
  }
};
