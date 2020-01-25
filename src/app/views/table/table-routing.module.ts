import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';
import { TableComponent } from './table.component';

const routes: Routes = [
  { 
    path: '',
    data: {
      title: 'Table'
    },
    children: [
      {
        path: '',
        redirectTo: 'table'
      },
      {
        path: 'table',
        component: TableComponent,
        data: {
          title: 'Table'
        }
      },
      {
        path: 'pagination',
        component: PaginationComponent,
        data: {
          title: 'Pagination'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
