import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComboBoxProjection } from 'src/app/model/Projections/ComboBoxProjection.model';
import { MapelModel } from 'src/app/model/mapel.model';
import { GuruService } from 'src/app/service/guru.service';
import { MapelService } from 'src/app/service/mapel.service';

@Component({
  selector: 'app-form-mapel',
  templateUrl: './form-mapel.component.html',
  styleUrls: ['./form-mapel.component.scss']
})
export class FormMapelComponent implements OnInit {

  id : any;
  validateForm: FormGroup;
  isDisabled : boolean = false;
  model : MapelModel = new MapelModel();
  listGuru: Array<ComboBoxProjection> = new Array<ComboBoxProjection>;
  constructor(private route: ActivatedRoute,
    private fb : FormBuilder, private service : MapelService, private router: Router,
    private guruService : GuruService) { 
    this.validateForm = this.fb.group({
      id: [],
      nama: [{value: null, disabled: this.isDisabled}, Validators.required],
      kkm: [{value: null, disabled: this.isDisabled}, Validators.required],
      idGuru: [],
      namaGuru: [],
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

    this.guruService.getDataComboBox().subscribe(
      (res)=>{
        // console.log(res);
        if(res.status == 200){
          this.listGuru = res.result;
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
          this.router.navigate(['/mapel']);
        }else{
          window.alert(res.message+" save/update data!");
        }
      },(error: any) => {
        console.error('An error occurred:', error);
        
      }
    );
  }

}
