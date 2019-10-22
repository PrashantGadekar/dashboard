import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrontendserviceService {

  constructor(private http:HttpClient) { }

getalltopmasters():Observable<any>
{

return this.http.get<any>("http://localhost:3000/master");
}

getalltrendingrecipe():Observable<any>
{

return this.http.get<any>("http://localhost:3000/recipe");
}


}

