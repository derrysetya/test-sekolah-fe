import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { SiswaComponent } from './pages/siswa/siswa.component';
import { GuruComponent } from './pages/guru/guru.component';
import { MapelComponent } from './pages/mapel/mapel.component';
import { NilaiComponent } from './pages/nilai/nilai.component';
import { FormSiswaComponent } from './pages/form/form-siswa/form-siswa.component';
import { FormGuruComponent } from './pages/form/form-guru/form-guru.component';
import { FormMapelComponent } from './pages/form/form-mapel/form-mapel.component';
import { FormNilaiComponent } from './pages/form/form-nilai/form-nilai.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SiswaComponent,
    GuruComponent,
    MapelComponent,
    NilaiComponent,
    FormSiswaComponent,
    FormGuruComponent,
    FormMapelComponent,
    FormNilaiComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
