import "../styles/components/adminChart.scss";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  {name: "فروردین", total: 1200},
  {name: "اردیبهشت", total: 800},
  {name: "خرداد", total: 2000},
  {name: "تیر", total: 100},
  {name: "مرداد", total: 2300},
  {name: "شهریور", total: 500},
];

const AdminChart = ({ aspect, title }:{aspect: number; title: string}) => {
  return (
    <div className="admin-chart">
      <p className="title">{title}</p>
      <ResponsiveContainer width="100%" aspect={aspect} className="admin-chart-">
        <AreaChart
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="chart-grid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdminChart;
