import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuruService } from 'src/app/service/guru.service';

@Component({
  selector: 'app-guru',
  templateUrl: './guru.component.html',
  styleUrls: ['./guru.component.scss']
})
export class GuruComponent implements OnInit {

  constructor(private service : GuruService, private router: Router) { }

  data: any;

  ngOnInit(): void {
    this.service.getDataAll().subscribe(
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
    this.router.navigate(['/form-guru', id]);
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
