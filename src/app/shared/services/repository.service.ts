import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) {

  }

  public getData(urlPath: string) {
    return this.http.get(this.createCompleteUrl(urlPath, this.envUrl.urlAddress));
  }

  public create(urlPath: string, body) {
    return this.http.post(this.createCompleteUrl(urlPath, this.envUrl.urlAddress), body, this.generateHeaders());
  }

  public update(urlPath: string, body) {
    return this.http.put(this.createCompleteUrl(urlPath, this.envUrl.urlAddress), body, this.generateHeaders());
  }

  public delete(urlPath: string) {
    return this.http.delete(this.createCompleteUrl(urlPath, this.envUrl.urlAddress));
  }

  private createCompleteUrl(urlPath: string, envAddress: string) {
    return `${envAddress}/${urlPath}`;
  }

  private generateHeaders() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }

}
