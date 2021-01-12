import { environment } from '../../environments/environment';

export class RoutesGrupo {
    webApiUrl: string = `${environment.api_url}/grupo`;
    permiApiUrl: string = `${environment.api_url}/permissao_list`;
}