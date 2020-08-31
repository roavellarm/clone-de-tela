import React from "react";
import { Divider as ChackaDivider, Grid } from "@chakra-ui/core";

const Divider: React.FC = () => {
  return (
    <Grid gridTemplateColumns="1fr 1fr" columnGap={12} opacity={0.4}>
      <ChackaDivider marginY={6} />
      <ChackaDivider marginY={6} />
    </Grid>
  );
};

export default Divider;
