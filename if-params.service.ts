import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';


import * as _ from 'lodash';

@Injectable()
export class InstaFeedService {
    private behaviorSubject = new BehaviorSubject<any>({} as any);

    constructor() { }

    setParameters(obj: any) {
        this.behaviorSubject.next(obj);
    }

    getParameters(): Observable<any> {
        return this.behaviorSubject.asObservable().pipe(distinctUntilChanged());
    }

}
