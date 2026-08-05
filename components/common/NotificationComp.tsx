'use client'

import { message } from "antd"
import { useEffect } from "react";
import Cookies from 'js-cookie';

export interface NotificationCompInterface {
    one_time_msg: string
}

const NotificationComp = ({ one_time_msg }: NotificationCompInterface) => {
    const [messageApi, contextHolder] = message.useMessage();
    const key = "1234";


    const success = (msg: string) => {
        messageApi.open({
            key: key,
            // type: 'success',
            content: msg,
            duration: 2,
        });
    };

    useEffect(() => {
        success(one_time_msg);

        return () => {
            messageApi.destroy(key);
            Cookies.remove('one_time_msg');
        }
    }, [one_time_msg]);

    return (
        <>
            {contextHolder}
        </>
    )
}

export default NotificationComp
