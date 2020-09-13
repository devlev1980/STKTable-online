import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {CurrentUserModel} from '../models/current-user.model';

@Injectable({
  providedIn: 'root'
})
export class SharepointService {
  private profiles: any[] = [];

  constructor(private http: HttpClient) {
  }

  getCurrentUser(): Observable<CurrentUserModel> {
    const url = `${environment.apiUrl}/_api/web/currentuser  `;
    return this.http.get<CurrentUserModel>(url);

    // const appweburl = `_api/search/query`;
    // // const properties = 'Office,Id,FirstName,LastName,MobilePhone,WorkPhone,AccountName,Department,JobTitle,PictureURL,WorkEmail,WorkId,EmployeeID'
    // const properties = 'EmployeeID,FirstName,WorkEmail,PictureUrl,LastName,Cell';
    // const httpURL = `${environment.apiUrl}${appweburl}`;
    // const httpParams = new HttpParams()
    //   .set('queryText', `'*'`)
    //   .set('sourceid', `'${environment.sourceId}'`)
    //   .set('selectproperties', `'${properties}'`)
    //   .set('RowLimit', `'10000'`);
    // return this.http.get(httpURL, {params: httpParams})
    //   .pipe(
    //     map((res: any) => res.PrimaryQueryResult.RelevantResults.Table.Rows),
    //     map(item => item.map(el => el.Cells)),
    //
    //       // .pipe(
    //       //   map((res: any) => res.PrimaryQueryResult.RelevantResults.Table.Rows),
    //       //   catchError(this.handleError('getUsersByQuery', []))
    //       // );
    //
    //     // map(results => this.getObjects(results))
    //   );
  }

  getDataFromMasterData(){
    let url = `${environment.apiUrl}/ _api/web/lists/GetByTitle('MasterDataList')/items`;
    return this.http.get(url);
  }
  getList(){

  }


}
