import React, { FC, memo } from 'react';
import List from '../List';
import { Data } from '../../types/Data';

interface PaginationListT {
  data: Data[];
  onNext: () => void;
  onPrev: () => void;
}

const PaginationList: FC<PaginationListT> = memo(function PaginationList({
  data,
  onNext,
  onPrev,
}: PaginationListT) {
  return (
    <div>
      <List data={data} />

      <div onClick={onPrev}>-- PREV --</div>

      <div onClick={onNext}>-- NEXT --</div>
    </div>
  );
});

export default PaginationList;
