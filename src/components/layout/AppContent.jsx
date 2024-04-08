import { Layout } from "antd";

const contentStyle = {
    textAlign: "center",
    minHeight: "calc(100vh - 60px)",
    color: "#fff",
    backgroundColor: "#001529",
};

export default function AppHeader() {
    return <Layout.Content style={contentStyle}></Layout.Content>;
}
