// src/controllers/AuthController.ts
import { AppwriteService } from '../../services/AppWriteService';

export class AuthController {
  static async register(email: string, password: string, name: string) {
    return await AppwriteService.register(email, password, name);
  }

  static async login(email: string, password: string) {
    return await AppwriteService.login(email, password);
  }

  static async loginWithGoogle() {
    return await AppwriteService.loginWithOAuth('google');
  }

  static async loginWithGitHub() {
    return await AppwriteService.loginWithOAuth('github');
  }
}
