Easy Notifications for Meteor
====================

A package for creating a window that shows dismissable notifications.

To add a notification

```
Notifications.push({
  message: 'Notification created',
  type: 'danger'
});
```

To display the notifications window, simply render the easyNotifications template:

```
{{> easyNotifications}}
```

There are four types of notifications (the type determines it's display color):

* success
* info
* warning
* danger

Their colors are:

* green
* blue
* yellow
* red
