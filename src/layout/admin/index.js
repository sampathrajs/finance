import React,{useState} from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Breadcrumb } from 'antd';
import {UserOutlined } from '@ant-design/icons';
import "./admin.css";

const { Header, Content, Footer, Sider } = Layout;

export const AdminView = props => {
    const [collapsed, setcollapsed] = useState(false);

    const onCollapse = col => {
    console.log(col);
    setcollapsed( col );
  };
    
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />}>
              Customer
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          {props.children}
          <Footer style={{ textAlign: 'center' }}>@Sampath Raj </Footer>
        </Layout>
      </Layout>
        </>
    );
};

AdminView.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    history: PropTypes.shape({
        push: PropTypes.func,
    }),
};
