import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CredenciaisDTO } from './../models/credenciais.dto';
import { API_CONFIG } from './../config/api.config';
import { LocalUser } from './../models/local_user';
import { StorageService } from "./storage.service";

@Injectable()
export class AuthService {

    constructor(
        protected http: HttpClient,
        protected storoge: StorageService){}

    authenticate(creds:CredenciaisDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/login`,
        creds,
        {
            observe: 'response',
            responseType: 'text'
        })
    }

    successfulLogin(authorization: string) {
        let tok = authorization.substring(7);
        let user : LocalUser = {
            token : tok
        };
        this.storoge.setLocalUser(user);
    }

    logout() {
        this.storoge.setLocalUser(null);
    }
}