import { Component, OnInit } from '@angular/core';
import { faHome, faSearch, faClone, faUpload, faBriefcase, faSitemap, faUserShield, faQuestionCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faHome = faHome;
  faSearch = faSearch;
  faClone = faClone;
  faUpload = faUpload;
  faBriefcase = faBriefcase;
  faSitemap = faSitemap;
  faUserShield = faUserShield;
  faQuestionCircle = faQuestionCircle;
  faSignOutAlt = faSignOutAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
