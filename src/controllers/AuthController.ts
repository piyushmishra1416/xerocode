// src/controllers/AuthController.ts
import { AppwriteService } from '../services/AppWriteService';

export class AuthController {
  static async register(email: string, password: string, fistname: string, lastname: string) {
    return await AppwriteService.register(email, password, fistname, lastname);
  }

  static async login(email: string, password: string) {
    return await AppwriteService.login(email, password);
  }

  static async loginWithGoogle() {
    return await AppwriteService.loginWithOAuthGoogle();
  }

  static async loginWithGitHub() {
    return await AppwriteService.loginWithOAuthGithub();
  }
}
