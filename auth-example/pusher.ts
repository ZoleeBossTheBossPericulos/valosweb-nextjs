import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
    appId: process.env.PUSHER_APP_ID || "1506994",
    key: process.env.PUSHER_KEY || "2cba626a0720b690a57b",
    secret: process.env.PUSHER_SECRET || "80d21da35b7a53beac18",
    cluster: "eu",
    useTLS: true
});

export const clientPusher = new ClientPusher(process.env.PUSHER_KEY || "2cba626a0720b690a57b", {
    cluster: 'eu',
    forceTLS: true,
});