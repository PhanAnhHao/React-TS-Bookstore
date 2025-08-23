import React from "react";
import { useCurrentApp } from "../context/app.context";
import { Button, Result } from "antd";
import { useLocation, useNavigate } from "react-router-dom";


interface IProps {
    children: React.ReactNode;
}

const ProtectedRoute = (props: IProps) => {
    const { isAuthenticated, user } = useCurrentApp();
    const navigate = useNavigate();
    const location = useLocation();
    if (isAuthenticated === false) {
        return (
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button onClick={() => navigate('/')} type="primary">Back Home</Button>}
            />
        )
    }

    const isAdminRoute = location.pathname.includes("admin");
    if (isAuthenticated === true && isAdminRoute === true) {
        const role = user?.role;
        if (role === "USER") {
            return (
                <Result
                    status="403"
                    title="403"
                    subTitle="Sorry, you are not authorized to access this page."
                    extra={<Button onClick={() => navigate('/')} type="primary">Back Home</Button>}
                />
            )
        }
    }

    return (
        <>
            {props.children}
        </>
    )
};

export default ProtectedRoute;