"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple line chart";

const chartData = [
  { day: "Monday", customers: 186, shipments: 80, quotes: 266 },
  { day: "Tuesday", customers: 305, shipments: 505, quotes: 123 },
  { day: "Wednesday", customers: 237, shipments: 357, quotes: 123 },
  { day: "Thursday", customers: 73, shipments: 190, quotes: 263 },
  { day: "Friday", customers: 209, shipments: 339, quotes: 427 },
  { day: "Saturday", customers: 214, shipments: 140, quotes: 354 },
  { day: "Sunday", customers: 124, shipments: 70, quotes: 194 },
];

const chartConfig = {
  customers: {
    label: "Customer",
    color: "hsl(var(--primary))",
  },
  shipments: {
    label: "Shipments",
    color: "hsl(var(--secondary))",
  },
  quotes: {
    label: "Quotes",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

function InfoCard({ title }: { title: string }) {
  return (
    <div>
      <div className="w-[260px] p-[10px]">
        <div className="flex justify-between items-center border-b pt-2 pb-2">
          <div className="gap-y-2">
            <h2 className="text-2xl">{title}</h2>
            <span className="opacity-60">New {title} added</span>
          </div>
          <div className="gap-y-2">
            <h2 className="text-2xl">1</h2>
            <span className="opacity-60">-</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const LegendCard: React.FC = () => {
  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Chart Legend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {Object.values(chartConfig).map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-4 h-4 rounded-full mr-3 shadow-sm"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export function ReportChart() {
  return (
    <div className="w-full flex space-x-6">
      <div className="flex flex-col space-y-4">
        <InfoCard title="Customers" />
        <InfoCard title="Shipments" />
        <InfoCard title="Quotes" />
      </div>
      <div className="flex">
        <div className="w-full">
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold">Last 7 days statistics</h2>
          </div>
          <div className="w-[450px]">
            <ChartContainer config={chartConfig}>
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Line
                  dataKey="customers"
                  type="monotone"
                  stroke={chartConfig.customers.color}
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="shipments"
                  type="monotone"
                  stroke={chartConfig.shipments.color}
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="quotes"
                  type="monotone"
                  stroke={chartConfig.quotes.color}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </div>
        <div className="p-4 flex h-full items-center">
          <LegendCard />
        </div>
      </div>
    </div>
  );
}
