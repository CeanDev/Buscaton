import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginPageModule } from './login/login.module';
import { RegisterPageModule } from './register/register.module';
import { RegdataPageModule } from './regdata/regdata.module';
import { ReglaststepPageModule } from './reglaststep/reglaststep.module';
import { EditComercioPageModule } from './edit-comercio/edit-comercio.module';
import { EditDireccionPageModule } from './edit-direccion/edit-direccion.module';
import { HorariosPageModule } from './horarios/horarios.module';
import { MediosPageModule } from './medios/medios.module';
import { DatosPageModule } from './datos/datos.module';
import { PersonalizarPageModule } from './personalizar/personalizar.module';
import { EditCateNamePageModule } from './edit-cate-name/edit-cate-name.module';
import { ProductoPageModule } from './producto/producto.module';
import { AgregarCategoriaPageModule } from './agregar-categoria/agregar-categoria.module';
import { EditarProductoPageModule } from './editar-producto/editar-producto.module';
import { VidrieraPageModule } from './vidriera/vidriera.module';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginPageModule,
    RegisterPageModule,
    RegdataPageModule,
    ReglaststepPageModule,
    EditComercioPageModule,
    EditDireccionPageModule,
    HorariosPageModule,
    MediosPageModule,
    DatosPageModule,
    PersonalizarPageModule,
    EditCateNamePageModule,
    ProductoPageModule,
    AgregarCategoriaPageModule,
    EditarProductoPageModule,
    VidrieraPageModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
