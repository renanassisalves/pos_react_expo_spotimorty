import { useState, useEffect, useRef } from 'react';
import { Text, View, Input, useColorMode, MoonIcon, Pressable, SunIcon } from 'native-base';
import Button from '../../components/Button';
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from '../../services/notification-register';
import { sendPushNotification } from '../../services/notification-send';

export default function NotificationScreen() {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const [tituloPush, setTituloPush] = useState("Título teste");
    const [textoPush, setTextoPush] = useState("Texto de teste de notificação push");

    const notificationListener = useRef();
    const responseListener = useRef();
  
    const {
        colorMode,
        toggleColorMode
      } = useColorMode();

    useEffect(() => {
      colorMode === "dark" ? toggleColorMode() : colorMode;
      registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
  
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
      });
  
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        alert('Clicou na notificação');
      });
  
      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
      };
    }, []);
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Text>Token de push expo: {expoPushToken}</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text mt={5}>Título da notificação Push</Text>
      <Input mt={2} value={tituloPush} onChangeText={(value) => setTituloPush(value)} />
      <Text mt={2}>Texto da notificação push</Text>
      <Input mt={2} value={textoPush} onChangeText={(value) => setTextoPush(value)} />
          <Text>Título: {notification && notification.request.content.title} </Text>
          <Text>Corpo: {notification && notification.request.content.body}</Text>
          <Text>JSON: {notification && JSON.stringify(notification.request.content.data)}</Text>
        </View>
        <Button content="Enviar push" handleClick={
            async () => {await sendPushNotification(expoPushToken, tituloPush, textoPush);}
        } colorMode={colorMode}/>
      </View>
)};