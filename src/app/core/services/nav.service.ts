import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NavService {

    // public currentUrl = new BehaviorSubject<string>('');
    //
    // constructor(public router: Router) {
    //     router.events.pipe(
    //         filter((e): e is NavigationEnd => e instanceof NavigationEnd)
    //     ).subscribe((e: NavigationEnd) => {
    //         this.currentUrl.next(e.urlAfterRedirects);
    //     });
    // }
}
