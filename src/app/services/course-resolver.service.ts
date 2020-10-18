
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformServer} from '@angular/common';
import {makeStateKey, StateKey, TransferState} from '@angular/platform-browser';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { DataCommunicationService } from './data-communication.service';

interface apiEndpoint{
  requestUrl: "",
  requestName: ","
}

@Injectable({
  providedIn: 'root'
})


export class CourseResolverService implements Resolve<apiEndpoint> {
    
    apiEndpoint : apiEndpoint;
    constructor(private dataCommService:DataCommunicationService,
        @Inject(PLATFORM_ID) private platformId,
        private transferState:TransferState) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

      const Request_Key = makeStateKey<apiEndpoint>(this.apiEndpoint.requestName);

        if (this.transferState.hasKey(Request_Key)) {
            const req = this.transferState.get<apiEndpoint>(Request_Key, null);
            this.transferState.remove(Request_Key);
            return of(req);
        }
        else {
            return this.dataCommService.getLandingPageData()
                .pipe(
                    tap(req => {
                        if (isPlatformServer(this.platformId)) {
                            this.transferState.set(Request_Key, req);
                        }

                    })
                );
        }
    }
}
