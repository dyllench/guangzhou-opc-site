import { Box, Container, Typography } from "@mui/material";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <Box
      sx={{
        py: { xs: 7, md: 9 },
        color: "white",
        background:
          "linear-gradient(135deg, #073A86 0%, #0B63CE 46%, #00A6A6 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ opacity: 0.82, fontWeight: 800 }}>
          {eyebrow}
        </Typography>
        <Typography variant="h2" sx={{ mt: 1, maxWidth: 780, fontSize: { xs: 36, md: 54 } }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, maxWidth: 720, opacity: 0.86, lineHeight: 1.7 }}>
          {description}
        </Typography>
      </Container>
    </Box>
  );
}
