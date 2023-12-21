export async function sendPushNotification(expoPushToken : String, title : String, body: String) {
    const message = {
      to: expoPushToken,
      sound: 'default',
      title: title,
      body: body,
      data: { someData: '{Json Exemplo}' },
    };
  console.log("enviado", title, body);
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    }).then((erro) => console.log(erro));
  }