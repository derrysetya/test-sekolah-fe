import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapelService } from 'src/app/service/mapel.service';

@Component({
  selector: 'app-mapel',
  templateUrl: './mapel.component.html',
  styleUrls: ['./mapel.component.scss']
})
export class MapelComponent implements OnInit {

  constructor(private service : MapelService, private router: Router) { }

  data: any;

  ngOnInit(): void {
    this.service.getDataDash().subscribe(
      (res) => {
        // console.log(res);

        if(res.status==200){
          this.data = res.result;
        }else{
          this.data = [];
        }

      }
        ,(error: any) => {
          console.error('An error occurred:', error);
          this.data = [];
        }
      );
  }

  toDetail(id: number){
    this.router.navigate(['/form-mapel', id]);
  }

  toDelete(id: string){
    this.service.deleteDataById(id).subscribe(
      (res) => {
        // console.log(res);
        if(res.status == 200){
          window.alert(res.message+" delete data!");
        }else{
          window.alert(res.message+" delete data!");
        }
        location.reload();
      },(error: any) => {
        console.error('An error occurred:', error);
        
      }
    );
  }

}
