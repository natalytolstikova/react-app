import React, { FC } from 'react';

interface Data {
  name: string;
  subject: string;
  status: string;
}

interface ListT {
  data: Data[];
}

const List: FC<ListT> = ({ data }) => {
  const listItems = data?.map((item, k) => {
    return (
      <li key={k}>
        <div>{item?.name}</div>
        <div>{item?.subject}</div>
        <div>{item?.status}</div>
      </li>
    );
  });

  return <div>{listItems}</div>;
};

export default List;
