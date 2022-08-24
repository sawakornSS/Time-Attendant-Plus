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
  clickEvent(){
    this.status = !this.status;       
}


clickmenu(event: Event, menu :string){
  var Menu1:any = document.getElementById('menu1');
  var Menu2:any = document.getElementById('menu2');
  var Menu3:any = document.getElementById('menu3');
  var Menu4:any = document.getElementById('menu4');
  var Menu5:any = document.getElementById('menu5');
  var Menu6:any = document.getElementById('menu6');
  

  var MenuID = document.getElementById(menu);

  if(menu != ''){
    Menu1.classList.remove('active');
    Menu2.classList.remove('active');
    Menu3.classList.remove('active');
    Menu4.classList.remove('active');
    Menu5.classList.remove('active');
    Menu6.classList.remove('active');
  }

  MenuID?.classList.add('active');


  // console.log(typeof(menu));
  // typeof(menu);

  
  



  // var NumMenu = (<HTMLElement>event.target);
  // console.log(NumMenu);
  
  // var color = (event.target as HTMLInputElement).value;
  //   console.log(color);
  // NumMenu.classList.add('active')
}

}
