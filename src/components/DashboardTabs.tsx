import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Summary, Logs } from "lucide-react";

import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";

export function DashboardTabs() {
  return (
    <div className="w-full">
      <Tabs defaultValue="Overview">
        <TabsList>
          <TabsTrigger value="Overview">
            <Summary />
            Overview
          </TabsTrigger>
          <TabsTrigger value="Category">
            <Logs />
            By Category
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Overview">{OverviewCards()}</TabsContent>
        <TabsContent value="Category">{CategoryCards()}</TabsContent>
      </Tabs>
    </div>
  );
}
