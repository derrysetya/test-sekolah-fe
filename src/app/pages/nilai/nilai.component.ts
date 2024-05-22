import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ComboBoxProjection } from 'src/app/model/Projections/ComboBoxProjection.model';
import { NilaiService } from 'src/app/service/nilai.service';

@Component({
  selector: 'app-nilai',
  templateUrl: './nilai.component.html',
  styleUrls: ['./nilai.component.scss']
})
export class NilaiComponent implements OnInit {

  constructor(private fb : FormBuilder,private service : NilaiService, private router: Router) {
    this.validateForm = this.fb.group({
      idMapel: [],
    });
   }

  data: any;
  validateForm: FormGroup;
  listMapel: Array<ComboBoxProjection> = new Array<ComboBoxProjection>;
  ngOnInit(): void {
    this.service.getDataDash().subscribe(
      (res) => {
        // console.log(res);

        if(res.status==200){
          this.data = res.result.nilai;
          this.listMapel = res.result.mapel;
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

  getDataByMapel(){
    this.service.getDataByIdMapel(this.validateForm.get('idMapel').value).subscribe(
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

}
