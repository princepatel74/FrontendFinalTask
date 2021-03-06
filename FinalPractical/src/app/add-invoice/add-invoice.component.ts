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
  i = 0;
  editId: string | null = null;
  listOfData:any= [];

  constructor(private fb: FormBuilder, private message: NzMessageService) { }

  

  //set model for edit row
  startEdit(id: string): void {
    this.editId = id;
  }

//set currency value
  CurrencyValueSet(){
    debugger
    this.CurrencyValue=this.validateInvoice.value.currency;
  }

  //add blank row in table 
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

  //delete Row into the table and condition #Atleast 1
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

//Save invoice
  saveInvoice(){
    console.log(this.listOfData);
  }

  //totalAmount

  amountGetTotal(data:any){
  console.log(data);
  return (data.Quantity*data.UnitPrice)-(data.Quantity*data.UnitPrice*data.Discount/100);
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
