import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.css']
})
export class ListInvoiceComponent implements OnInit {

  invoices=[
    {
      TabName:"All",
      Data:[{
        Number:1000,
        Ref:"6465",
        To:"pricne123@gmail.com",
        Date:"",
        Duedate:"",
        Due:"100",
      },
      {
        Number:10002,
        Ref:"",
        To:"",
        Date:"",
        Duedate:"",
        Due:"",
      },
      {
        Number:1003,
        Ref:"",
        To:"",
        Date:"",
        Duedate:"",
        Due:"",
      }]
    },
    {
      TabName:"Draft",
      Data:[{
        Number:1005,
        Ref:"",
        To:"",
        Date:"",
        Duedate:"",
        Due:"",
      },
      {
        Number:10256,
        Ref:"",
        To:"",
        Date:"",
        Duedate:"",
        Due:"",
      },
     ]
    },
    {
      TabName:"Awaiting Payment",
      Data:[{
        Number:56126,
        Ref:"",
        To:"",
        Date:"",
        Duedate:"",
        Due:"",
      },
    ]
    },
    {
      TabName:"Paid",
      Data:[{
        Number:61612,
        Ref:"",
        To:"",
        Date:"",
        Duedate:"",
        Due:"",
      },
      {
        Number:55,
        Ref:"",
        To:"",
        Date:"",
        Duedate:"",
        Due:"",
      },
      {
        Number:6256,
        Ref:"",
        To:"",
        Date:"",
        Duedate:"",
        Due:"",
      }]
    }

  ];

  setOfCheckedId = new Set<number>();
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly [] = [];
  searchValue = '';
  visible = false;

  constructor() { }

  ngOnInit(): void {
  }


updateCheckedSet(id: number, checked: boolean): void {
  if (checked) {
    this.setOfCheckedId.add(id);
  } else {
    this.setOfCheckedId.delete(id);
  }
}
  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }
  
  onAllChecked(value: boolean): void {
    this.invoices.forEach((item: any) => this.updateCheckedSet(item.Number, value));
    this.refreshCheckedStatus();
  }
  
  onCurrentPageDataChange($event: any): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }
  
  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every((item: any) => this.setOfCheckedId.has(item.SupplierId));
    this.indeterminate = this.listOfCurrentPageData.some((item: any) => this.setOfCheckedId.has(item.SupplierId)) && !this.checked;
  }


  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    
  }


}
