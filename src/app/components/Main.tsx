import React from "react";
import BrokerageAccount from "./components/BrokerageAccount";
import CustomizableDashboard from "./components/CustomizableDashboard";
import AlertsNotifications from "./components/AlertsNotifications";

const Main = () => {
  return (
    <div className="mt-14 w-dvw bg-colored">
      <div className="container mb-16 flex flex-col">
        {/* Brokerage Account */}
        <BrokerageAccount />
        {/* Customizable Dashboard */}
        <CustomizableDashboard />
        {/* Real-Time Alerts & Notifications */}
        <AlertsNotifications />
      </div>
    </div>
  );
};

export default Main;
