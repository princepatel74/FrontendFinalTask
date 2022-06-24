import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'listInvoice'},
  { path: 'addInvoice', component: AddInvoiceComponent},
  { path: 'listInvoice', component: ListInvoiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
