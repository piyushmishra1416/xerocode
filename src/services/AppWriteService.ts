"use server";
import { Client, Account, OAuthProvider } from 'appwrite';



const client = new Client();
client.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);

const account = new Account(client);

export const AppwriteService = {
  async register(email: string, password: string, firstname: string, lastname: string) {
    return await account.create('unique()', email, password,firstname);
  },
  async login(email: string, password: string) {
    return await account.createSession(email, password);
  },
  async loginWithOAuthGithub() {
    return await account.createOAuth2Session(OAuthProvider.Github, `${window.location.origin}/welcome`, `${window.location.origin}/login`);
  }, 
  async loginWithOAuthGoogle() {
   return await account.createOAuth2Session(OAuthProvider.Google, `${window.location.origin}/welcome`, `${window.location.origin}/login`);
 } 
};
