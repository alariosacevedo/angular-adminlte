import { Component, OnDestroy } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent {
  
  public ngOnChanges() {
    console.log("ngOnChanges");
  }

  public  ngOnInit() {
    console.log("ngOnInit");
    this.OnClick_LiUsers('LiUsers', 'Null');
  }

  public ngDoCheck() {
    console.log("ngDoCheck");
    
  }
  
  public ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  public ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  public ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  public ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  public ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  OnClick_LiUsers (LiParent: string, LiChild:string) {
    if (LiParent != "Null") {
      $("#" + LiParent + "").addClass("active open");
    }
    
    if (LiChild != "Null") {
      $("#" + LiChild + "").addClass("active");
    }
  }
}
