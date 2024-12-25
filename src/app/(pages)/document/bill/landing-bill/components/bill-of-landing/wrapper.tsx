import React from 'react';

type Props = {
  children: React.ReactNode;
  title?: string;
  className?: string;
  hasPadding?: boolean;
};

function BillOfLandingWrapper({
  children,
  title,
  className,
  hasPadding = true,
}: Props) {
  return (
    <>
      <div className="bg-black text-center">
        <p className="text-white text-sm font-bold uppercase">{title}</p>
      </div>
      <div
        className={`${className} border border-black p-2`}
        style={!hasPadding ? { padding: 0 } : {}}
      >
        {children}
      </div>
    </>
  );
}

export default BillOfLandingWrapper;
