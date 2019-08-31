import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItensComponent } from './itens/itens.component';
import { EditItensComponent } from './edit-itens/edit-itens.component';
import { SubitensComponent } from './subitens/subitens.component';
import { EditSubitensComponent } from './edit-subitens/edit-subitens.component';

const routes: Routes = [
  { path: 'itens', component: ItensComponent  },
  { path: 'edit-itens/:id', component: EditItensComponent  },
  { path: 'subitens', component: SubitensComponent  },
  { path: 'edit-subitens/:id', component: EditSubitensComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ItensComponent, SubitensComponent, EditItensComponent, EditSubitensComponent]