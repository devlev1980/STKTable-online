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

export interface PeriodicElement {
  checked: boolean;
  itemName: string;
  region: string;
  customerName: string;
  ecSalesPrice: number;
  hqHtdCost: number;
  transferPrice: number;
  localizationCost: number;
  localCost: number;
  gm: number;
  januaryData: IDataPerMonth;
  februaryData: IDataPerMonth;
}

interface IDataPerMonth {
  quantity: number;
  usd: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  }
];

@Component({
  selector: 'app-autocomplete-spfx-web-part',
  templateUrl: './autocomplete-spfx-web-part.component.html',
  styleUrls: ['./autocomplete-spfx-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteSpfxWebPartComponent implements OnInit {
  currentUser: CurrentUserModel;
  displayedColumns: string[] = ['checkbox', 'itemName', 'region', 'customerName', 'ecSalesPrice', 'hqHtdCost', 'transferPrice', 'localizationCost', 'localCost', 'gm', 'jan20qty', 'jan20usd', 'feb20qty', 'feb20usd'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  allowMultiSelect = true;
  selection = new SelectionModel<PeriodicElement>(true, []);
  tableForm: FormGroup;
  selectedRows: Array<PeriodicElement> = [];
  selectedRow: PeriodicElement;
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
    this.spService.getDataFromMasterData().subscribe(excel=>{
      console.log(excel)
    })

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

  onCheck(row: PeriodicElement, event) {
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

