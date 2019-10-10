import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { JwtToken } from '../models/jwtToken';
import { User } from '../models/user.model';

/**
 * The main authentication service used to handle login and JWT token validation.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  tokenBaseUrl = 'http://localhost:36071/api/token';

  /**
   * Call login API to authenticate user and return JWT token.
   * @param email 
   * @param password 
   */
  public login(email: string, password: string) {
    const u = new User();
    u.UserName = email;
    u.PasswordHash = '89e01536ac207279409d4de1e5253e01f4a1769e696db0d6062ca9b8f56767c8';
    return this.http.post<User>(`${this.tokenBaseUrl}`, u);
  }

  /**
   * Check if the current user is authenticated with a valid JWT token.
   */
  public isAuthenticated(): boolean {
    try {
      const token = localStorage.getItem('id_token');    // Check whether the token is expired and return

      if (token) {
        console.log(`AuthService: ${token}`);
        const dToken = jwt_decode<JwtToken>(token);
        console.log(`AuthService: ${JSON.stringify(dToken)}`);
        if (!this.isExpired(dToken.exp)) {
          console.log(`AuthService: token is NOT expired.`);
          return true;
        } else {
          console.log(`AuthService: token is EXPIRED!`);
        }
      }
      this.removeToken();
      return false;
    } catch (ex) {
      console.log(`AuthService: Error in isAuthenticated: ${ex}`);
      return false;
    }
  }

  /**
   * Method to check if a token "exp" date is still valid or has expired.
   * @param expiry The expiry date to check, must be in the "NumericDate" format.
   */
  private isExpired(expiry: number) {
    if (expiry) {
      const now = new Date();
      return now.getTime() > expiry * 1000;
    }
    return false;
  }

  /**
   * Removes a token from local storage.
   */
  public removeToken() {
    localStorage.removeItem('id_token');
  }

  /**
   * Store a JWT token in local storage.
   * @param token The JWT token, as JSON string, to store.
   */
  public storeToken(token: string) {
    localStorage.setItem('id_token', token);
  }
}
