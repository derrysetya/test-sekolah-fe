import { Routes } from '@angular/router';

import { SiswaComponent } from 'src/app/pages/siswa/siswa.component';
import { GuruComponent } from 'src/app/pages/guru/guru.component';
import { MapelComponent } from 'src/app/pages/mapel/mapel.component';
import { FormSiswaComponent } from 'src/app/pages/form/form-siswa/form-siswa.component';
import { NilaiComponent } from 'src/app/pages/nilai/nilai.component';
import { FormGuruComponent } from 'src/app/pages/form/form-guru/form-guru.component';
import { FormMapelComponent } from 'src/app/pages/form/form-mapel/form-mapel.component';
import { FormNilaiComponent } from 'src/app/pages/form/form-nilai/form-nilai.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'siswa',           component: SiswaComponent },
    { path: 'form-siswa',      component: FormSiswaComponent },
    { path: 'form-siswa/:id',           component: FormSiswaComponent }, 
    { path: 'guru',           component: GuruComponent },
    { path: 'form-guru',           component: FormGuruComponent },
    { path: 'form-guru/:id',           component: FormGuruComponent },
    { path: 'mapel',           component: MapelComponent },
    { path: 'form-mapel',           component: FormMapelComponent },
    { path: 'form-mapel/:id',           component: FormMapelComponent },
    { path: 'nilai',           component: NilaiComponent },
    { path: 'form-nilai',           component: FormNilaiComponent },
    { path: 'form-nilai/:id',           component: FormNilaiComponent },
];
