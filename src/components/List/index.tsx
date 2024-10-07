import React, { FC } from 'react';
import { Data } from '../../types/Data';

interface ListT {
  data: Data[];
}

const List: FC<ListT> = ({ data }) => {
  const listItems = data?.map((item, k) => {
    return (
      <li key={k}>
        <div>{item?.author}</div>
        <div>{item?.title}</div>
        <div>{item?.points}</div>
        <div>{item?.data}</div>
      </li>
    );
  });

  return <div>{listItems}</div>;
};

export default List;
