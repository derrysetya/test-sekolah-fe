import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NilaiService } from 'src/app/service/nilai.service';

@Component({
  selector: 'app-nilai',
  templateUrl: './nilai.component.html',
  styleUrls: ['./nilai.component.scss']
})
export class NilaiComponent implements OnInit {

  constructor(private service : NilaiService, private router: Router) { }

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
    this.router.navigate(['/form-nilai', id]);
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
