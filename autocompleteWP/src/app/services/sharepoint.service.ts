import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {filter, map, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharepointService {
  private profiles: any[] = [];

  constructor(private http: HttpClient) {
  }

  getProfiles() {
    const appweburl = `_api/search/query`;
    // const properties = 'Office,Id,FirstName,LastName,MobilePhone,WorkPhone,AccountName,Department,JobTitle,PictureURL,WorkEmail,WorkId,EmployeeID'
    const properties = 'EmployeeID,FirstName,WorkEmail,PictureUrl,LastName,Cell';
    const httpURL = `${environment.apiUrl}${appweburl}`;
    const httpParams = new HttpParams()
      .set('queryText', `'*'`)
      .set('sourceid', `'${environment.sourceId}'`)
      .set('selectproperties', `'${properties}'`)
      .set('RowLimit', `'10000'`);
    return this.http.get(httpURL, {params: httpParams})
      .pipe(
        map((res: any) => res.PrimaryQueryResult.RelevantResults.Table.Rows),
        map(item => item.map(el => el.Cells)),

          // .pipe(
          //   map((res: any) => res.PrimaryQueryResult.RelevantResults.Table.Rows),
          //   catchError(this.handleError('getUsersByQuery', []))
          // );

        // map(results => this.getObjects(results))
      );
  }


}
