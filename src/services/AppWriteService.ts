
import { Client, Account } from 'appwrite';

const client = new Client();
client.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);

const account = new Account(client);

export const AppwriteService = {
  async register(email: string, password: string, name: string) {
    return await account.create('unique()', email, password, name);
  },
  async login(email: string, password: string) {
    return await account.createSession(email, password);
  },
  async loginWithOAuth(provider: string) {
   //@ts-ignore
    return await account.createOAuth2Session(provider, `${window.location.origin}/dashboard`, `${window.location.origin}/login`);
  }
};
