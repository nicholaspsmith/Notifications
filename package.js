Package.describe({
  name: 'npsjsdev:easy-notifications',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'A package to display notifications for important events.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nicholaspsmith/Notifications',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['notifications.js','notification_window.html','notification_window.js'], 'client');
});
