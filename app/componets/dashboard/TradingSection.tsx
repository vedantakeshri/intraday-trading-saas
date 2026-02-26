import TradingHeader from "./TradingHeader";
import TradingChart from "./TradingChart";
import OrderPanel from "./OrderPanel";

export default function TradingSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-3">
        <TradingHeader />
        <TradingChart />
      </div>

      <OrderPanel />
    </div>
  );
}