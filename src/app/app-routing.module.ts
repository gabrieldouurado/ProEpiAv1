import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItensComponent } from './itens/itens.component';
import { SubitensComponent } from './subitens/subitens.component';

const routes: Routes = [
  { path: 'itens', component: ItensComponent  },
  { path: 'subitens', component: SubitensComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ItensComponent, SubitensComponent]