import { Component, OnInit } from '@angular/core';
import { InformationService } from './../information.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data = { }
  constructor(private service:InformationService) { 
    document.body.style.background = 'rgb(250, 245, 172)'
    this.showDetails()
  }

  ngOnInit() {  
  }

  showDetails(){
    this.data = this.service.userInfo
   }
}
