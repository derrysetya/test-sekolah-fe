import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComboBoxProjection } from 'src/app/model/Projections/ComboBoxProjection.model';
import { NilaiModel } from 'src/app/model/nilai.model';
import { MapelService } from 'src/app/service/mapel.service';
import { NilaiService } from 'src/app/service/nilai.service';
import { SiswaService } from 'src/app/service/siswa.service';

@Component({
  selector: 'app-form-nilai',
  templateUrl: './form-nilai.component.html',
  styleUrls: ['./form-nilai.component.scss']
})
export class FormNilaiComponent implements OnInit {

  id : any;
  validateForm: FormGroup;
  isDisabled : boolean = false;
  model : NilaiModel = new NilaiModel();
  listSiswa: Array<ComboBoxProjection> = new Array<ComboBoxProjection>;
  listMapel: Array<ComboBoxProjection> = new Array<ComboBoxProjection>;
  constructor(private route: ActivatedRoute,
    private fb : FormBuilder, private service : NilaiService, private router: Router,
    private mapelService : MapelService, private siswaService : SiswaService) { 
    this.validateForm = this.fb.group({
      id: [],
      uts: [{value: null, disabled: this.isDisabled}, Validators.required],
      uas: [{value: null, disabled: this.isDisabled}, Validators.required],
      idMapel: [],
      idSiswa: [],
    });
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // console.log(this.id);
    if(this.id){
        this.service.getDataById(this.id).subscribe(
          (res)=>{
            // console.log(res);
            if(res.status == 200){
              this.validateForm.patchValue(res.result);
            }else{
              console.log(res);
            }
          }, (err)=>{
            console.error('An error occurred:', err);
          }
        );
    }

    this.mapelService.getDataComboBox().subscribe(
      (res)=>{
        // console.log(res);
        if(res.status == 200){
          this.listMapel = res.result;
        }else{
          console.log(res);
        }
      }, (err)=>{
        console.error('An error occurred:', err);
      }
    );

    this.siswaService.getDataComboBox().subscribe(
      (res)=>{
        // console.log(res);
        if(res.status == 200){
          this.listSiswa = res.result;
        }else{
          console.log(res);
        }
      }, (err)=>{
        console.error('An error occurred:', err);
      }
    );


  }

  save(){
    this.model = this.validateForm.getRawValue();

    this.service.saveData(this.model).subscribe(
      (res) => {
        // console.log(res);
        if(res.status == 200){
          window.alert(res.message+" save/update data!");
          this.router.navigate(['/nilai']);
        }else{
          window.alert(res.message+" save/update data!");
        }
      },(error: any) => {
        console.error('An error occurred:', error);
        
      }
    );
  }

}
