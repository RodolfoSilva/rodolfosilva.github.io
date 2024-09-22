import React, { ReactNode } from "react";
import PeriodFormat from "./PeriodFormat";

interface TimeLineItemProps {
  children?: ReactNode;
  title: string;
  subTitle?: string;
  startAt?: string;
  endAt?: string;
}

export default function Item(props: TimeLineItemProps) {
  const { title, subTitle, startAt, endAt, children } = props;

  return (
    <li className="flex group">
      <div className="before:border-grey-300 grid w-8 pt-5 before:col-span-full before:row-span-full before:-mt-5 before:ml-[7px] before:h-auto isolate before:border-l-2 after:col-span-full after:row-span-full after:mt-[7px] after:block after:border-t-2 before:group-first:mt-0 before:group-last:max-h-6 before:group-only:hidden after:w-full after:border-purple-600">
        <div className="col-span-full relative z-20 row-span-full w-4 h-4 rounded-full border-2 border-purple-600 bg-white"></div>
      </div>
      <div className="mb-6 group-last:mb-0 flex-grow flex flex-col gap-1 border-l-2 border-purple-600 p-4 shadow">
        <div>
          <h2 className="text-base font-medium">{title}</h2>
          <div className="text-xs divide-x flex space-x-2">
            {(startAt || endAt) && (
              <div className="inline-block text-xs text-purple-600">
                <PeriodFormat start={startAt} end={endAt} />
              </div>
            )}
            {subTitle && <div className="first:pl-0 pl-2">{subTitle}</div>}
          </div>
        </div>

        {children && <div className="text-sm text-gray-800">{children}</div>}
      </div>
    </li>
  );
}
