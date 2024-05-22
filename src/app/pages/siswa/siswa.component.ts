import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiswaService } from 'src/app/service/siswa.service';

@Component({
  selector: 'app-siswa',
  templateUrl: './siswa.component.html',
  styleUrls: ['./siswa.component.scss']
})
export class SiswaComponent implements OnInit {

  constructor(private service : SiswaService, private router: Router) { }

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
    this.router.navigate(['/form-siswa', id]);
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
