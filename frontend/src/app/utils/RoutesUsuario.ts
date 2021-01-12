import { environment } from '../../environments/environment';

export class RoutesUsuario {
    webApiUrl: string = `${environment.api_url}/auth`;
    grupoApiUrl: string = `${environment.api_url}/grupo`;
}