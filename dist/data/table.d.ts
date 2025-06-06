import type { TDataSeries, TDataSeriesHead, TDataArray } from "./dataSeries";
export type TTableHead = {
    table_name: string;
};
export type TTableStructure = TTableHead & {
    table_column_head_data: TDataSeriesHead[];
};
export type TTableMetaData = TTableHead & {
    table_data_series: TDataSeries[];
};
export type TTableData = TTableHead & {
    table_data_series: TDataArray;
};
