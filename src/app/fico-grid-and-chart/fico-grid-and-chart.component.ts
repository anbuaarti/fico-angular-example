import { Component, OnInit } from '@angular/core';
import { ColDef, FirstDataRenderedEvent, GridApi, AgChartTheme, AgChartThemeOverrides, ChartMenuOptions } from 'ag-grid-community';
import { FicoApiService } from '../service/fico-api.service';

@Component({
  selector: 'app-fico-grid-and-chart',
  templateUrl: './fico-grid-and-chart.component.html',
  styleUrls: ['./fico-grid-and-chart.component.css']
})
export class FicoGridAndChartComponent implements OnInit {
  customers: any = [];
  columnDefs: ColDef[] = [
    {headerName: '#ID', field: 'customerId', sortable: true, suppressMenu: true, width: 90 },
    {headerName: 'Customer Name', field: 'customerName', filter: 'agTextColumnFilter',  floatingFilter: true, sortable: true,  suppressMenu: true},
    {headerName: 'Age', field: 'age', filter: 'agNumberColumnFilter',  floatingFilter: true, sortable: true, suppressMenu: true, chartDataType: 'category', width: 100 },
    {headerName: 'Qualification', field: 'qualification', filter: true,  floatingFilter: true, sortable: true, suppressMenu: true, chartDataType: 'series', width: 200  },
    {headerName: 'Income', field: 'income', filter: 'agNumberColumnFilter',  floatingFilter: true, sortable: true, suppressMenu: true, chartDataType: 'series', width: 200 },
    {headerName: 'Work Experience', field: 'workExperience', filter: 'agNumberColumnFilter',  floatingFilter: true, sortable: true, suppressMenu: true, chartDataType: 'series', width: 200  },
    {headerName: '# Of HouseHolds', field: 'numberOfHouseHolds', filter: 'agNumberColumnFilter',  floatingFilter: true, sortable: true, suppressMenu: true, width: 150 },
    {headerName: 'Region', field: 'region', filter: true,  floatingFilter: true, sortable: true, suppressMenu: true, chartDataType: 'category', width: 150 },
    {headerName: 'State', field: 'state', filter: true,  floatingFilter: true, sortable: true, suppressMenu: true, chartDataType: 'series' },
    {headerName: 'Address', field: 'address', filter: 'agTextColumnFilter',  floatingFilter: true, suppressMenu: true },
    {headerName: 'Account Balance', field: 'accountBalance', filter: 'agMultiColumnFilter',  floatingFilter: true, sortable: true, suppressMenu: true, chartDataType: 'series', width: 200  },
    {headerName: 'RelationShip Tenure', field: 'relationShipTenure', filter: 'agMultiColumnFilter',  floatingFilter: true, sortable: true, suppressMenu: true, chartDataType: 'series' },
    {headerName: '# Accounts', field: 'noOfAccounts', filter: 'agNumberColumnFilter',  floatingFilter: true, sortable: true, suppressMenu: true, chartDataType: 'series' },
    {headerName: 'Account Type', field: 'accountType', filter: true,  floatingFilter: true, sortable: true, suppressMenu: true, chartDataType: 'series' },
    {headerName: 'Employment Status', field: 'employmentStatus', filter: true,  floatingFilter: true, sortable: true, suppressMenu: true }
];
  public chartThemeOverrides: AgChartThemeOverrides = {
    common: {
      padding: {
        top: 20,
        right: 30,
        bottom: 10,
        left: 2,
      },
      background: {
        fill: '#EFEFEF',
      },
      tooltip: {
        class: 'my-tooltip-class',
      },
    },
  };

  constructor(private apiService: FicoApiService) { }

  ngOnInit(): void {
    this.getCustomerData();
  }

  getCustomerData() {
    this.apiService.getCustomers().subscribe((data)=>{ 
      if(data) {
        this.customers = data;  
      }
		});
  }

  onFirstDataRendered(params: FirstDataRenderedEvent) {
    this.createAvgRegionAccBalanceChart(params.api);
    this.createRegionIncomeChart(params.api);
  }

  createAvgRegionAccBalanceChart(gridApi: GridApi){
    gridApi.createCrossFilterChart({
      chartType: 'bar',
      cellRange: {
        columns: ['region', 'accountBalance'],
      },
      aggFunc: 'avg',
      chartThemeOverrides: {
        common: {
          title: {
            enabled: true,
            text: 'Region vs Average Account Balance',
          },
          legend: {
            enabled: false,
          },
        },
      },
      chartContainer: document.querySelector('#lineChart') as any,
    });
  }


  createRegionIncomeChart(gridApi: GridApi){
    gridApi.createCrossFilterChart({
      chartType: 'scatter',
      cellRange: {
        rowStartIndex: 0,
        rowEndIndex: 1000000,
        columns: ['region', 'accountBalance', 'relationShipTenure'],
      },
      chartThemeOverrides: {
        common: {
          title: {
            enabled: true,
            text: 'Relationship Tenure vs Account Balance',
          },
          legend: {
            enabled: false,
          },
        },
      },
      
      chartContainer: document.querySelector('#scatterChart') as any,
    });
  }
}
