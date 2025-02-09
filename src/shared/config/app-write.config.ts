import { Account, Client, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('677fbf71001ae9a92a0e')


export const account = new Account(client);
export const db = new Databases(client)





