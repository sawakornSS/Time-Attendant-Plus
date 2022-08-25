import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  status: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
clickmenu(event: Event, menu :string, child : string){
  // Gets the ID from the user's input.
  var MenuID : any = document.getElementById(menu)
  var ChildID : any = document.getElementById(child)

  // Add classes from the desired ID and 
  // Remove the classes from the unwanted ID.
  for (let i = 1; i <= 6; i++) {
    var tmp_menu:any = 'menu' + i;
    var tmp_child:any = 'child-menu' + i;

    var tmp_MenuID:any = document.getElementById(tmp_menu);
    var tmp_ChildID:any = document.getElementById(tmp_child);

    if(menu == tmp_menu){
      MenuID?.classList.add('active');
      ChildID?.classList.add('main-color');
    }else{
      tmp_MenuID.classList.remove('active')
      tmp_ChildID.classList.remove('main-color')
    }
    

  }
  
}

}
