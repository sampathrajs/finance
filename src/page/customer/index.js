import React, { useEffect } from 'react';
import { AntdTable } from '../../component/table';
import { ContentContainer } from '../../component/content';
import { getCustomers } from '../../store/actions/customer';
import { useSelector, useDispatch } from 'react-redux';
const columns = [
  {
    title: 'Customer Number',
    dataIndex: 'customerNo',
  },
  {
    title: 'Name',
    render: (record) => record.personalInfo.firstName,
  },
  {
    title: 'Father Name',
    render: (record) => record.personalInfo.fatherName,
    sorter: (a, b) =>
      a.personalInfo.fatherName.localeCompare(b.personalInfo.fatherName),
  },
  {
    title: 'Gender',
    render: (record) => record.personalInfo.gender,
  },
  {
    title: 'Mobile Number',
    render: (record) => record.personalInfo.mobileNo,
  },
  {
    title: 'Email',
    render: (record) => record.personalInfo.email,
  },
  {
    title: 'Occupation',
    render: (record) => record.personalInfo.occupation,
  },
  {
    title: 'Monthly Income',
    render: (record) => record.personalInfo.monthlyIncome,
    sorter: (a, b) =>
      a.personalInfo.monthlyIncome - b.personalInfo.monthlyIncome,
  },
];

const expand = {
  expandedRowRender: (record) => (
    <p style={{ margin: 10 }}>
      {record.personalInfo.address.building},{' '}
      {record.personalInfo.address.street}, {record.personalInfo.address.city},{' '}
      {record.personalInfo.address.state}, {record.personalInfo.address.pincode}
    </p>
  ),
};

export const Customer = (props) => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.customers);
  useEffect(() => {
    getCustomers(dispatch);
  }, []);
  return (
    <ContentContainer
      breadcrumbs={[
        { key: 'home', label: 'Home', path: '/' },
        { key: 'customer', label: 'Customer', path: '/customer' },
      ]}
    >
      <AntdTable columns={columns} data={customers} expand={expand} />
    </ContentContainer>
  );
};
