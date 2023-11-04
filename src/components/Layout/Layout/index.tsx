import React from "react";
import Header from "../Header"; // Use default import
import SideNav from "../SideNav"; // Use default import
import MainContent from "../MainContent"; // Use default import
import { Grid } from "@mui/material";

const Layout: React.FC = () => {
  return (
    <Grid container={true}>
      {/* SideNav */}
      <Grid item={true} xs={3}>
        <SideNav examples={""} />
      </Grid>

      {/* Header */}
      <Grid item={true} xs={true}>
        <Header
          user={{ name: "shubham" }}
          onLogout={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        {/* Main Content */}
        <Grid item={true} xs={12} md={9}>
          <MainContent />
        </Grid>
      </Grid>
    </Grid>
  );
};

Layout.displayName = "Layout";

export default Layout;
