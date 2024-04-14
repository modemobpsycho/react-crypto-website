import { Layout, Typography } from "antd";
import { useCrypto } from "../../context/crypto-context";
import PortfolioChart from "../PortfolioChart";
import AssetsTable from "../AssetsTable";

const contentStyle = {
    textAlign: "center",
    minHeight: "calc(100vh - 60px)",
    color: "#fff",
    backgroundColor: "#001529",
};

export default function AppСontent() {
    const { assets } = useCrypto();
    return (
        <Layout.Content style={contentStyle}>
            <Typography.Title
                level={3}
                style={{ textAlign: "left", color: "#fff" }}
            >
                Portfolio:{" "}
                {assets
                    .map((asset) => asset.totalAmount)
                    .reduce((a, b) => a + b, 0)
                    .toFixed(2)}
                $
            </Typography.Title>
            <PortfolioChart />
            <AssetsTable assets={assets} />
        </Layout.Content>
    );
}
