import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import { resolver, theme } from "../styles/mantine-theme";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <MantineProvider theme={theme} cssVariablesResolver={resolver}>
    {children}
    </MantineProvider>;
};
