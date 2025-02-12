import { ReactNode } from 'react';
import { Table, TableBody, TableData, TableHead, TableHeader, TableRow } from './Table';

export interface DataTableColumn<T> {
  key: keyof T;
  label: ReactNode;
  render?: (data: T) => ReactNode;
}

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  className?: string;
  dataList: T[];
}

const DataTable = <T,>({ className = '', columns, dataList }: DataTableProps<T>) => {
  return (
    <Table className={className}>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column.key as string}>{column.label as string}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataList && dataList.length > 0 ? (
          dataList.map((data, index) => (
            <TableRow key={index}>
              {columns.map(({ key, render }) => {
                return (
                  <TableData key={key as string}>
                    {render ? render(data) : (data[key] as ReactNode)}
                  </TableData>
                );
              })}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableData
              colSpan={columns.length}
              className="!text-center"
            >
              !نتیجه ای یافت نشد
            </TableData>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default DataTable;
