import { Component, OnInit } from '@angular/core';
import { UserHelperService } from 'src/app/services/user-helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userHelper: UserHelperService) { }

  ngOnInit(): void {  }
}
