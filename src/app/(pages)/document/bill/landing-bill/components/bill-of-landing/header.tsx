import { format } from 'date-fns';
import React from 'react';

type Props = {
  date: Date;
  title: string;
};

function BillOfLandingHeader({ date, title }: Props) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs">Date: {format(date, 'dd/MM/yyyy')}</span>

      <h1 className="text-2xl font-bold uppercase">{title}</h1>

      <span className="text-sm font-semibold">Page 1 of ______</span>
    </div>
  );
}

export default BillOfLandingHeader;
