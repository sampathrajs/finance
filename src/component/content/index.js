import React from "react";
import { Link } from "react-router-dom";
import { Layout, Breadcrumb } from 'antd';
const { Content,} = Layout;

export const ContentContainer = ({breadcrumbs, children})=>{
    return (
        <Content style={{ margin: '0 16px' }}>
        {breadcrumbs && (
                <Breadcrumb style={{ margin: '16px 0' }}>
                    {breadcrumbs.map(({ key, label, path }) => (
                        <Breadcrumb.Item key={key}>{path ? <Link to={path}>{label}</Link> : label}</Breadcrumb.Item>
                    ))}
                </Breadcrumb>
            )}
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {children}
            </div>
          </Content>
    )
}