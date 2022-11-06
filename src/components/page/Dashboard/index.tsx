import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import imageLogo from "../../../assets/logo.png"
import IDashboard from './interfaces/IDashboard';
import { HeaderRight, Image } from './style';
import { useNavigate } from "react-router-dom";
import { AuthProvider } from '../../../context/Auth/AuthProvider';
import { RequireAuth } from '../../../context/Auth/RequireAuth';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Inicio', '/dashboard', <PieChartOutlined />),
    getItem('Relatório', '/dashboard/relatorio', <FileOutlined />),
    getItem('Gestão', '/dashboard/gestao', <DesktopOutlined />),
];

export default function Dashboard({ children }: IDashboard) {

    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    return (
        <RequireAuth>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                    <Image collapsed={collapsed}><img src={imageLogo} alt="logo" /></Image>

                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={(item) => navigate(item.key)} style={{ borderTop: '1px solid #ffffff' }} />
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <HeaderRight>
                            <h3 onClick={() => navigate('/')}>Deslogar</h3>
                        </HeaderRight>
                    </Header>
                    <Content >

                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {children}

                        </div>
                    </Content>
                </Layout>
            </Layout>
        </RequireAuth>


    )
}