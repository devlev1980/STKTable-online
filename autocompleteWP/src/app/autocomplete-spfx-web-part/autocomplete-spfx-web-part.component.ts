import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import {SharepointService} from '../services/sharepoint.service';
import {FormGroup} from '@angular/forms';

import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {DataToEdit} from '../models/data-to-edit';
import {CurrentUserModel} from '../models/current-user.model';
import * as pnp from 'sp-pnp-js';
import {IRow} from '../models/table';
import * as _ from 'lodash'


// export interface PeriodicElement {
//   checked: boolean;
//   itemName: string;
//   region: string;
//   customerName: string;
//   ecSalesPrice: number;
//   hqHtdCost: number;
//   transferPrice: number;
//   localizationCost: number;
//   localCost: number;
//   gm: number;
//   januaryData: IDataPerMonth;
//   februaryData: IDataPerMonth;
// }
//
// interface IDataPerMonth {
//   quantity: number;
//   usd: number;
// }
//
// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     checked: false,
//     itemName: 'GOLD 60LT Drum',
//     region: 'Columbia',
//     customerName: 'Adama Culumbia SAS',
//     ecSalesPrice: 12,
//     hqHtdCost: 5,
//     transferPrice: 0,
//     localizationCost: 0,
//     localCost: 0,
//     gm: 58,
//     januaryData: {
//       quantity: null,
//       usd: 12000
//     },
//     februaryData: {
//       quantity: null,
//       usd: 0
//     }
//
//
//   },
//   {
//     checked: false,
//     itemName: 'GOLD 60LT Drum',
//     region: 'Columbia',
//     customerName: 'Adama Culumbia SAS',
//     ecSalesPrice: 12,
//     hqHtdCost: 5,
//     transferPrice: 0,
//     localizationCost: 0,
//     localCost: 0,
//     gm: 58,
//     januaryData: {
//       quantity: null,
//       usd: 12000
//     },
//     februaryData: {
//       quantity: null,
//       usd: 0
//     }
//
//
//   },
//   {
//     checked: false,
//     itemName: 'GOLD 60LT Drum',
//     region: 'Columbia',
//     customerName: 'Adama Culumbia SAS',
//     ecSalesPrice: 12,
//     hqHtdCost: 5,
//     transferPrice: 0,
//     localizationCost: 0,
//     localCost: 0,
//     gm: 58,
//     januaryData: {
//       quantity: null,
//       usd: 12000
//     },
//     februaryData: {
//       quantity: null,
//       usd: 0
//     }
//
//
//   },
//   {
//     checked: false,
//     itemName: 'GOLD 60LT Drum',
//     region: 'Columbia',
//     customerName: 'Adama Culumbia SAS',
//     ecSalesPrice: 12,
//     hqHtdCost: 5,
//     transferPrice: 0,
//     localizationCost: 0,
//     localCost: 0,
//     gm: 58,
//     januaryData: {
//       quantity: null,
//       usd: 12000
//     },
//     februaryData: {
//       quantity: null,
//       usd: 0
//     }
//
//
//   },
//   {
//     checked: false,
//     itemName: 'GOLD 60LT Drum',
//     region: 'Columbia',
//     customerName: 'Adama Culumbia SAS',
//     ecSalesPrice: 12,
//     hqHtdCost: 5,
//     transferPrice: 0,
//     localizationCost: 0,
//     localCost: 0,
//     gm: 58,
//     januaryData: {
//       quantity: null,
//       usd: 12000
//     },
//     februaryData: {
//       quantity: null,
//       usd: 0
//     }
//
//
//   },
//   {
//     checked: false,
//     itemName: 'GOLD 60LT Drum',
//     region: 'Columbia',
//     customerName: 'Adama Culumbia SAS',
//     ecSalesPrice: 12,
//     hqHtdCost: 5,
//     transferPrice: 0,
//     localizationCost: 0,
//     localCost: 0,
//     gm: 58,
//     januaryData: {
//       quantity: null,
//       usd: 12000
//     },
//     februaryData: {
//       quantity: null,
//       usd: 0
//     }
//
//
//   },
//   {
//     checked: false,
//     itemName: 'GOLD 60LT Drum',
//     region: 'Columbia',
//     customerName: 'Adama Culumbia SAS',
//     ecSalesPrice: 12,
//     hqHtdCost: 5,
//     transferPrice: 0,
//     localizationCost: 0,
//     localCost: 0,
//     gm: 58,
//     januaryData: {
//       quantity: null,
//       usd: 12000
//     },
//     februaryData: {
//       quantity: null,
//       usd: 0
//     }
//
//
//   },
//   {
//     checked: false,
//     itemName: 'GOLD 60LT Drum',
//     region: 'Columbia',
//     customerName: 'Adama Culumbia SAS',
//     ecSalesPrice: 12,
//     hqHtdCost: 5,
//     transferPrice: 0,
//     localizationCost: 0,
//     localCost: 0,
//     gm: 58,
//     januaryData: {
//       quantity: null,
//       usd: 12000
//     },
//     februaryData: {
//       quantity: null,
//       usd: 0
//     }
//
//
//   },
//   {
//     checked: false,
//     itemName: 'GOLD 60LT Drum',
//     region: 'Columbia',
//     customerName: 'Adama Culumbia SAS',
//     ecSalesPrice: 12,
//     hqHtdCost: 5,
//     transferPrice: 0,
//     localizationCost: 0,
//     localCost: 0,
//     gm: 58,
//     januaryData: {
//       quantity: null,
//       usd: 12000
//     },
//     februaryData: {
//       quantity: null,
//       usd: 0
//     }
//
//
//   },
//   {
//     checked: false,
//     itemName: 'GOLD 60LT Drum',
//     region: 'Columbia',
//     customerName: 'Adama Culumbia SAS',
//     ecSalesPrice: 12,
//     hqHtdCost: 5,
//     transferPrice: 0,
//     localizationCost: 0,
//     localCost: 0,
//     gm: 58,
//     januaryData: {
//       quantity: null,
//       usd: 12000
//     },
//     februaryData: {
//       quantity: null,
//       usd: 0
//     }
//
//
//   }
// ];

@Component({
  selector: 'app-autocomplete-spfx-web-part',
  templateUrl: './autocomplete-spfx-web-part.component.html',
  styleUrls: ['./autocomplete-spfx-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteSpfxWebPartComponent implements OnInit {
  currentUser: CurrentUserModel;
  rowsFromServer: IRow[] = [];
  displayedColumns: string[] = [];

  dataSource: MatTableDataSource<IRow>;
  allowMultiSelect = true;
  selection = new SelectionModel<IRow>(true, []);
  tableForm: FormGroup;
  selectedRows: Array<IRow> = [];
  selectedRow: IRow;
  fieldsToEdit: DataToEdit = {
    jan21quantity: '',
    feb21quantity: '',
    march21quantity: '',
    april21quantity: '',
    may21quantity: '',
    june21quantity: '',
    july21quantity: '',
    august21quantity: '',
    september21quantity: '',
    october21quantity: '',
    november21quantity: '',
    december21quantity: '',
  };


  constructor(private spService: SharepointService, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.spService.getCurrentUser().subscribe((data) => this.currentUser = data);
    this.spService.getList().subscribe(list => {
      this.rowsFromServer = [...list];
      console.log('rowsFromServer', this.rowsFromServer);
      let res = this.rowsFromServer.map((x,index) => Object.keys(x)[index]);
      console.log(res)
      this.displayedColumns = [...res];
      // TODO: Get Keys

      this.dataSource = new MatTableDataSource<IRow>(this.rowsFromServer)
    })
    // pnp.sp.web.currentUser.get().then(a => {
    //   console.log('aaa', a)
    // });

    //
    // pnp.sp.web.lists.getByTitle('MasterDataList').views.get().then(fields=>{
    //   console.log('fields',fields)
    // })
    // pnp.sp.web.lists.getByTitle('MasterDataList').items.get().then(rows=>{
    //   console.log('rows',rows)
    //
    // })

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
    if (this.isAllSelected()) {
      this.selectedRows = [...this.dataSource.data];
    } else {
      this.selectedRows = [];
    }

    console.log('All Selected rows', this.selectedRows);
  }

  onSaveData() {
    console.log(this.selectedRows);
  }

  onCheck(row: IRow, event) {
    if (event.checked) {
      row.checked = event.checked;
      this.selectedRows.push(row);
    } else {
      this.selectedRows.splice(this.selectedRows.indexOf(row), 1);
    }
    console.log('Selected rows', this.selectedRows);
  }

  onSelectAll() {

  }


}

