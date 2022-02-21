import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { FicoApiService } from './service/fico-api.service';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FICO Test Example';
}
