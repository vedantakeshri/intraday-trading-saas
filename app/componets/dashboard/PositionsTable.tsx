// import PositionRow from "./PositionRow";


// export default function PositionsTable() {
//   return (
//     <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-4">
//       <h2 className="text-lg font-semibold mb-4">Open Positions</h2>

//       <table className="w-full text-sm">
//         <thead className="text-gray-400 border-b border-gray-800">
//           <tr>
//             <th className="text-left py-2">Stock</th>
//             <th>Qty</th>
//             <th>Entry</th>
//             <th>LTP</th>
//             <th>P&L</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           <PositionRow stock="RELIANCE" qty="50" entry="2450" ltp="2495" pnl="+₹2250" positive />
//           <PositionRow stock="TCS" qty="10" entry="3820" ltp="3790" pnl="-₹300" />
//           <PositionRow stock="INFY" qty="20" entry="1550" ltp="1580" pnl="+₹600" positive />
//         </tbody>
//       </table>
//     </div>
//   );
// }







// Filter of range 



"use client";

import PositionRow from "./PositionRow";

export type DashboardRange = "today" | "week" | "month";

interface PositionsTableProps {
  range: DashboardRange;
}

export default function PositionsTable({ range }: PositionsTableProps) {
  return (
    <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Open Positions</h2>
        <span className="text-sm text-gray-400 capitalize">
          {range}
        </span>
      </div>

      <table className="w-full text-sm">
        <thead className="text-gray-400 border-b border-gray-800">
          <tr>
            <th className="text-left py-2">Stock</th>
            <th>Qty</th>
            <th>Entry</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <PositionRow
            stock="RELIANCE"
            qty="50"
            entry="2450"
            ltp="2495"
            pnl="+₹2250"
            positive
          />
          <PositionRow
            stock="TCS"
            qty="10"
            entry="3820"
            ltp="3790"
            pnl="-₹300"
          />
          <PositionRow
            stock="INFY"
            qty="20"
            entry="1550"
            ltp="1580"
            pnl="+₹600"
            positive
          />
        </tbody>
      </table>
    </div>
  );
}