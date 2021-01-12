import { environment } from '../../environments/environment';

export class RoutesLivro {
    webApiUrl: string = `${environment.api_url}/livro`;
    autorApiUrl: string = `${environment.api_url}/autor`;
}