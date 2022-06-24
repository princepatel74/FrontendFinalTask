import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
  validateInvoice!: FormGroup;
  CurrencyValue=null;
  constructor(private fb: FormBuilder, private message: NzMessageService) { }

  i = 0;
  editId: string | null = null;
  listOfData:any= [];

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    debugger
    this.editId = null;
   
  }

  CurrencyValueSet(){
    debugger
    this.CurrencyValue=this.validateInvoice.value.currency;
  }

  addRow(): void {
    if(this.i==10){
      this.message.error("maximum 10 Row Allowed", {
        nzDuration: 5000
      });
    }
    else{
      this.listOfData = [
        ...this.listOfData,
        {
          id:this.i,
          name:"",
          age: "",
          address: ""
        }
      ];
      this.i++;
    }
    
  }

  deleteRow(id: string): void {
    debugger
    if(this.i<=1){
      this.message.error("ERROR! #Atleast 1 row Selected", {
        nzDuration: 2000
      });
    }
    else{
      this.listOfData = this.listOfData.filter((d: { id:any; }) => d.id !== id);
      this.i--;
    }
  }

  saveInvoice(){
    console.log(this.listOfData);
  }

  ngOnInit(): void {
    this.validateInvoice = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      Invoice: [null, [Validators.required]],
      date: [null, [Validators.required]],
      Duedate: [null, [Validators.required]],
      currency: [null, [Validators.required]],
      Reference: [null, [Validators.required, Validators.pattern("^[A-Za-z0-9]{1,15}$")]],
    });
    this.addRow();
  }

}
