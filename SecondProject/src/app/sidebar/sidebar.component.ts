import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currenturl: string;

  constructor(private router: Router) { 
    router.events.subscribe((_:NavigationEnd) => {
      this.currenturl = _.url;
    });
  }

  ngOnInit() {
  }

}
