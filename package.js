Package.describe({
  name: 'npsjsdev:notifications',
  version: '0.0.1',
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
  api.addFiles('notifications.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('npsjsdev:notifications');
  api.addFiles('notifications-tests.js');
});
