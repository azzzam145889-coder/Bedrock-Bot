const { createClient } = require('bedrock-protocol');

const client = createClient({
  host: 'emerald.magmanode.com', // عنوان السيرفر
  port: 33760,                            // رقم البورت
  username: 'BotBuddy',                   // اسم البوت في اللعبة
  offline: true                           // دخول بدون Xbox Live
});

client.on('join', () => {
  console.log('✅ Bot has joined the server!');
});

client.on('text', (packet) => {
  const user = packet.source_name;
  const msg = packet.message;
  console.log('[${user}]: ${msg}');

  // رد على "hello"
  if (msg.toLowerCase().includes('hello')) {
    client.queue('text', {
      type: 'chat',
      needs_translation: false,
      source_name: 'BotBuddy',
      xuid: '',
      platform_chat_id: '',
      message: 'Hi ${user}, Im your bot 🤖'
    });
  }

  // أمر: bot come
  if (msg.toLowerCase().includes('bot come')) {
    client.queue('text', {
      type: 'chat',
      needs_translation: false,
      source_name: 'BotBuddy',
      xuid: '',
      platform_chat_id: '',
      message: 'Coming! 🏃‍♂'
    });
  }

  // أمر: bot leave
  if (msg.toLowerCase().includes('bot leave')) {
    client.queue('text', {
      type: 'chat',
      needs_translation: false,
      source_name: 'BotBuddy',
      xuid: '',
      platform_chat_id: '',
      message: 'Goodbye 👋'
    });
    client.close();
  }
});

client.on('disconnect', () => {
  console.log('❌ Bot disconnected from the server.');
});

client.on('error', (err) => {
  console.error('❌ Error:', err);
});
