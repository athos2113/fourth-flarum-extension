import app from 'flarum/common/app';

app.initializers.add('junaid135/yello', () => {
  console.log('[junaid135/yello] Hello, forum and admin!');
});
