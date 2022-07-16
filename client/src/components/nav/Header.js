import React, { useState } from "react";
import "../defaultLayout/Layout.css";
import { Menu, Badge, Layout, Drawer } from "antd";
import Footer from "../footer/Footer";
import AppHeader from "./AppHeader";

import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  InfoCircleOutlined,
  MessageOutlined,
  UnorderedListOutlined,
  SubnodeOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";
const { Header, Sider, Content } = Layout;
const { SubMenu, Item } = Menu;

const HeaderMain = (props) => {
  const [current, setCurrent] = useState("home");
  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => { 
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };
  

  return (
    <Layout>
      <AppHeader />
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="md"
          collapsedWidth="0"
         
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
            toggle();
          }}
        >
         
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="inline"
            theme="dark"                
          >
         

            <Item key="home" icon={<AppstoreOutlined />}>
              <Link to="/">
                Home            
              </Link>
            </Item>
            <Item className="" key="shop" icon={<ShoppingOutlined />}>
              <Link to="/shop">Search</Link>
            </Item>
            <Item
              className="text-white"
              key="cart"
              icon={<ShoppingCartOutlined />}
            >
              <Link to="/cart" className="text-white">
                <Badge
                  count={cart.length}
                  offset={[9, 0]}
                  className="text-white"
                >
                  Favorite
                </Badge>
              </Link>
            </Item>
            <Item className="" key="category" icon={<UnorderedListOutlined />}>
              <Link to="/categorieslist">Country</Link>
            </Item>
            <Item className="" key="subcategory" icon={<SubnodeOutlined />}>
              <Link to="/subcategorieslist"> Choose City</Link>
            </Item>
            <Item className="" key="faq" icon={<QuestionCircleOutlined />}>
              <Link to="/faq">FAQ</Link>
            </Item>
            <Item className="" key="leadnews" icon={<InfoCircleOutlined />}>
              <Link to="/leadnews">Blog</Link>
            </Item>
            <Item className="" key="contact" icon={<MessageOutlined />}>
              <Link to="/contact">Contact Us</Link>
            </Item>
        
            {!user && (
              <Item key="register" icon={<UserAddOutlined />} className="">
                <Link to="/register">Register</Link>
              </Item>
            )}

            {!user && (
              <Item key="login" icon={<UserOutlined />} className="">
                <Link to="/login">Login</Link>
              </Item>
            )}

            {user && (
              <SubMenu
                icon={<SettingOutlined />}
                title={user.email && user.email.split("@")[0]}
                className=""
                key={user.email}
              >
                {user && user.role === "subscriber" && (
                  <Item>
                    <Link to="/user/history">Dashboard</Link>
                  </Item>
                )}

                {user && user.role === "admin" && (
                  <Item>
                    <Link to="/admin/dashboard">Dashboard</Link>
                  </Item>
                )}

                <Item icon={<LogoutOutlined />} onClick={logout}>
                  Logout
                </Item>
              </SubMenu>
            )}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 10 }}>
          <div className="mobileVisible">
          {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: showDrawer,
              }
            )}
            <Drawer
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
              width="50vw"
            >
              <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="inline"
            theme="dark"
          >
         

            <Item key="home" icon={<AppstoreOutlined />}>
              <Link to="/">
                Home            
              </Link>
            </Item>
            <Item className="" key="shop" icon={<ShoppingOutlined />}>
              <Link to="/shop">Search</Link>
            </Item>
            <Item
              className="text-white"
              key="cart"
              icon={<ShoppingCartOutlined />}
            >
              <Link to="/cart" className="text-white">
                <Badge
                  count={cart.length}
                  offset={[9, 0]}
                  className="text-white"
                >
                  Favorite
                </Badge>
              </Link>
            </Item>
            <Item className="" key="category" icon={<UnorderedListOutlined />}>
              <Link to="/categorieslist">Country</Link>
            </Item>
            <Item className="" key="subcategory" icon={<SubnodeOutlined />}>
              <Link to="/subcategorieslist"> Choose City</Link>
            </Item>
            <Item className="" key="faq" icon={<QuestionCircleOutlined />}>
              <Link to="/faq">FAQ</Link>
            </Item>
            <Item className="" key="leadnews" icon={<InfoCircleOutlined />}>
              <Link to="/leadnews">Blog</Link>
            </Item>
            <Item className="" key="contact" icon={<MessageOutlined />}>
              <Link to="/contact">Contact Us</Link>
            </Item>
          
            {!user && (
              <Item key="register" icon={<UserAddOutlined />} className="">
                <Link to="/register">Register</Link>
              </Item>
            )}

            {!user && (
              <Item key="login" icon={<UserOutlined />} className="">
                <Link to="/login">Login</Link>
              </Item>
            )}

            {user && (
              <SubMenu
                icon={<SettingOutlined />}
                title={user.email && user.email.split("@")[0]}
                className=""
                key={user.email}
              >
                {user && user.role === "subscriber" && (
                  <Item>
                    <Link to="/user/history">Dashboard</Link>
                  </Item>
                )}

                {user && user.role === "admin" && (
                  <Item>
                    <Link to="/admin/dashboard">Dashboard</Link>
                  </Item>
                )}

                <Item icon={<LogoutOutlined />} onClick={logout}>
                  Logout
                </Item>
              </SubMenu>
            )}
          </Menu>
                        </Drawer>
          </div>
          
            <Menu
              onClick={handleClick}
              selectedKeys={[current]}
              mode="inline"
              theme="light"
            >
              <Item key="search">
                <Search />
              </Item>
            </Menu>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "10px",
              padding: 24,
              minHeight: "80vh",
            }}
          >
            {props.children}
            <Footer></Footer>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default HeaderMain;
