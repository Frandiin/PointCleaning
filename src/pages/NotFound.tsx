import { Box, Container, Typography } from "@mui/material";

export function NotFound() {
  return (
    <Box className="flex items-center justify-center h-screen">
      <Container>
        <Typography variant="h1">404 - Página não encontrada</Typography>
      </Container>
    </Box>
  );
}
