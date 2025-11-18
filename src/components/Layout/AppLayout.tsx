import { Box } from "@mui/material";
import SideNav from "../Sidenav/Sidenav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box display="flex" minHeight="100vh" 
     sx={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <SideNav />

      <Box flex={1} p={4}>
        {children}
      </Box>
    </Box>
  );
}
