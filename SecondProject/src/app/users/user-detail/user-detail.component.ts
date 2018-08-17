import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userDetail$: object;

  constructor(
    private dataservice: DataService, 
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataservice.getUserDetail(id).subscribe(
      (data) => {
        this.userDetail$ = data;
      }
    );    
  }

}
