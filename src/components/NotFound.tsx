import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box 
      className="min-h-screen flex items-center justify-center bg-gray-50"
      sx={{
        backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)",
      }}
    >
      <Container maxWidth="sm">
        <Box className="text-center">
          <ErrorOutlineIcon 
            sx={{ 
              fontSize: 100,
              color: "#1479bc",
              marginBottom: 2
            }} 
          />
          <Typography
            variant="h2"
            className="text-gray-800 font-bold mb-4"
            sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
          >
            404
          </Typography>
          <Typography
            variant="h4"
            className="text-gray-700 mb-6"
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
          >
            Page Not Found
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-600 mb-8"
            sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
          >
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              backgroundColor: "#1479bc",
              padding: "12px 32px",
              fontSize: "1.1rem",
              "&:hover": {
                backgroundColor: "#0f5c8f",
              },
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
