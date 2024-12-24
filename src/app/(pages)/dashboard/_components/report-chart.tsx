"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Shipment } from "@/types/shipment.type";
import { GetQuoteRequestType } from "@/schema/quote-request.schema";

export const description = "A multiple line chart";

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

function InfoCard({ title, value }: { title: string; value: number }) {
  return (
    <div>
      <div className="w-[260px] p-[10px]">
        <div className="flex items-center justify-between border-b pb-2 pt-2">
          <div className="gap-y-2">
            <h2 className="text-2xl">{title}</h2>
          </div>
          <div className="gap-y-2">
            <h2 className="text-2xl">{value}</h2>
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
                className="mr-3 h-4 w-4 rounded-full shadow-sm"
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

type ReportChartProps = {
  customer: CustomerResponse[] | undefined;
  shipment: Shipment[] | undefined;
  quote: GetQuoteRequestType | undefined;
};

export function ReportChart({ customer, shipment, quote }: ReportChartProps) {
  const chartData = [
    {
      label: "customers",
      value: customer?.length || 0,
      fill: chartConfig.customers.color,
    },
    {
      label: "shipments",
      value: shipment?.length || 0,
      fill: chartConfig.shipments.color,
    },
    {
      label: "quotes",
      value: quote?.length || 0,
      fill: chartConfig.quotes.color,
    },
  ];

  return (
    <div className="flex w-full space-x-6">
      <div className="flex flex-col space-y-4">
        <InfoCard title="Customers" value={customer?.length || 0} />
        <InfoCard title="Shipments" value={shipment?.length || 0} />
        <InfoCard title="Quotes" value={quote?.length || 0} />
      </div>
      <div className="flex w-full">
        <div className="w-full">
          <div className="mb-8">
            <h2 className="text-center text-2xl font-bold">
              <span className="text-primary">Report</span> Chart
            </h2>
          </div>
          <div className="w-full">
            <ChartContainer className="h-[263px] w-full" config={chartConfig}>
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{
                  left: 20,
                }}
                height={100}
              >
                <YAxis
                  dataKey="label"
                  type="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) =>
                    chartConfig[value as keyof typeof chartConfig]?.label
                  }
                />
                <XAxis type="number" />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="value" layout="vertical" radius={5} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
