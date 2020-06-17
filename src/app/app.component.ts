import { Component } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public displayText: Observable<string>;
  private callCount: number = 0;
  private displaySubject: Subject<string> = new Subject();

  public ngOnInit(): void {
    this.displayText = this.displaySubject.asObservable();
  }

  public updateText(): void {
    this.displaySubject.next(`Calls: ${this.callCount++}`);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/