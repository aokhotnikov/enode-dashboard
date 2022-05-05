import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  isPartialSideNav = false;
  private _mobileQueryListener: (e: MediaQueryListEvent) => void;
  @ViewChild('sidenav') sideNav: MatSidenav;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = (e) => {
      if (e.matches) {
        this.isPartialSideNav = false;
      }
      changeDetectorRef.detectChanges();
    };
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  toggleSideNav(): void {
    if (this.mobileQuery.matches) {
      this.sideNav.toggle();
      return;
    }
    this.isPartialSideNav = !this.isPartialSideNav;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
