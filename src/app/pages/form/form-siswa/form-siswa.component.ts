import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SiswaModel } from 'src/app/model/siswa.model';
import { SiswaService } from 'src/app/service/siswa.service';

@Component({
  selector: 'app-form-siswa',
  templateUrl: './form-siswa.component.html',
  styleUrls: ['./form-siswa.component.scss']
})
export class FormSiswaComponent implements OnInit {

  id : any;
  validateForm: FormGroup;
  isDisabled : boolean = false;
  model : SiswaModel = new SiswaModel();
  constructor(private route: ActivatedRoute,
    private fb : FormBuilder, private service : SiswaService, private router: Router) { 
    this.validateForm = this.fb.group({
      id: [],
      nama: [{value: null, disabled: this.isDisabled}, Validators.required],
      alamat: [{value: null, disabled: this.isDisabled}, Validators.required]
    });
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // console.log(this.id);
    if(this.id){
        this.service.getDataById(this.id).subscribe(
          (res)=>{
            console.log(res);
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

  }

  save(){
    this.model = this.validateForm.getRawValue();

    this.service.saveData(this.model).subscribe(
      (res) => {
        // console.log(res);
        if(res.status == 200){
          window.alert(res.message+" save/update data!");
          this.router.navigate(['/siswa']);
        }else{
          window.alert(res.message+" save/update data!");
        }
      },(error: any) => {
        console.error('An error occurred:', error);
        
      }
    );
  }

}
