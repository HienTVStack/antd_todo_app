import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    LoginOutlined,
    ShopOutlined,
    TeamOutlined,
    UnorderedListOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu, theme, } from 'antd';
  import React from 'react';
import { Link, Outlet } from 'react-router-dom';
  const { Header, Content, Footer, Sider } = Layout;
  const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));
  const AppLayout = () => {
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
      <Layout hasSider>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div
            style={{
              height: 32,
              margin: 16,
              background: 'rgba(255, 255, 255, 0.2)',
            }}
          />
           <Menu theme="dark" defaultSelectedKeys={['dashboard']} mode="inline">
              <Menu.Item key="dashboard" icon={<TeamOutlined />}>
                <span>Dashboard</span>
                <Link to="/" />
              </Menu.Item>
              <Menu.Item key="create">
                <span>Create</span>
                <Link to="/create" />
              </Menu.Item>
              <Menu.Item key="list">
                <span>List</span>
                <Link to="/list" />
              </Menu.Item>
              <Menu.Item key="login" icon={<LoginOutlined />}>
                <span>Login</span>
                <Link to="/login" />
              </Menu.Item>
            </Menu>
        </Sider>
        <Layout
          className="site-layout"
          style={{
            marginLeft: 200,
          }}
        >
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <div>
                <img src='https://myphamnhanhon-ui.vercel.app/static/media/logo.afa5c8a58f47d82a54b8.png' alt='' style={{height: '100%', width: '120px'}} />
            </div>
          </Header>
          <Content
            style={{
              height: '100vh',
            }}
          >
             <Outlet />
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  };
  export default AppLayout;