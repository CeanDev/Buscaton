import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then(m => m.AyudaPageModule)
  },
  { path: 'comerciante',
    loadChildren: () => import('./sos-comerciante/sos-comerciante.module').then(m => m.SosComerciantePageModule)
  },
  { path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  { path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  { path: 'regdata',
    loadChildren: () => import('./regdata/regdata.module').then(m => m.RegdataPageModule)
  },
  { path: 'reglaststep',
    loadChildren: () => import('./reglaststep/reglaststep.module').then(m => m.ReglaststepPageModule)
  },
  { path: 'start',
    loadChildren: () => import('./start/start.module').then(m => m.StartPageModule)
  },
  { path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  { path: 'listado',
    loadChildren: () => import('./listado-rubros/listado-rubros.module').then(m => m.ListadoRubrosPageModule)
  },
  { path: 'mapaylistado',
    loadChildren: () => import('./mapaylistado/mapaylistado.module').then(m => m.MapaylistadoPageModule)
  },
  { path: 'comercioslistados',
    loadChildren: () => import('./comercios-listados/comercios-listados.module').then(m => m.ComerciosListadosPageModule)
  },
  { path: 'edit-comercio',
    loadChildren: () => import('./edit-comercio/edit-comercio.module').then(m => m.EditComercioPageModule)
  },
  { path: 'edit-direccion',
    loadChildren: () => import('./edit-direccion/edit-direccion.module').then(m => m.EditDireccionPageModule)
  },
  { path: 'horarios',
    loadChildren: () => import('./horarios/horarios.module').then(m => m.HorariosPageModule)
  },
  { path: 'medios',
    loadChildren: () => import('./medios/medios.module').then(m => m.MediosPageModule)
  },
  { path: 'showCommerceCard',
    loadChildren: () => import('./showCommerceCard/showCommerceCard.module').then(m => m.ShowCommerceCardPageModule)
  },
  { path: 'datos', loadChildren: './datos/datos.module#DatosPageModule' },
  { path: 'personalizar', loadChildren: './personalizar/personalizar.module#PersonalizarPageModule' },
  { path: 'edit-cate-name', loadChildren: './edit-cate-name/edit-cate-name.module#EditCateNamePageModule' },
  { path: 'producto', loadChildren: './producto/producto.module#ProductoPageModule' },
  { path: 'agregar-categoria', loadChildren: './agregar-categoria/agregar-categoria.module#AgregarCategoriaPageModule' },
  { path: 'editar-producto', loadChildren: './editar-producto/editar-producto.module#EditarProductoPageModule' },
  { path: 'vidriera', loadChildren: './vidriera/vidriera.module#VidrieraPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
