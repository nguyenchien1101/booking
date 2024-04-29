import ChiTietComponent from '@/components/khach-san/chi-tiet/ChiTietKhachsan';
import React from 'react';

const page = ({ params }) => {
  return <ChiTietComponent id={params.id} />;
};

export default page;
