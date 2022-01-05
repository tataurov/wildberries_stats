import React from 'react';
import BaseLayout from "../../Components/Layout";
import {useMount, useUnmount} from 'ahooks';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import * as ordersActions from '../../actions/ordersActionCreators';
import * as applicationActions from '../../actions/applicationActionCreators';
import { Table, Tag, Space } from 'antd';

const Orders = (props) => {
  useMount(() => {
    props.ordersActions.fetchOrders();
  });

  useUnmount(() => {
    console.log('UnMount');
  });
  const columns = [
    {
      title: 'Номер',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Товар',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Бренд',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'Категория19.1',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Количество',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Сумма',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    },
    {
      title: 'Скидка',
      dataIndex: 'discountPercent',
      key: 'discountPercent',
    },
  ];

  return (
    <BaseLayout>
      <div>
        <Table dataSource={props.ordersState.orders} columns={columns} />;
      </div>
    </BaseLayout>
  );
}
const
  mapDispatchToProps = (dispatch) => {
    return {
      ordersActions: bindActionCreators(ordersActions, dispatch),
      applicationActions: bindActionCreators(applicationActions, dispatch),
    };
  },

  mapStateToProps = ({ordersState}) => {
    return {
      ordersState,
    };
  },

  withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
  );

export default compose(withConnect)(Orders);
