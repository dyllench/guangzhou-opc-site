import Link from "next/link";
import { useRouter } from "next/router";
import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import HubIcon from "@mui/icons-material/Hub";

const navItems = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  { label: "服务介绍", href: "/services" },
  { label: "招募申请", href: "/join" },
  { label: "联系我们", href: "/contact" },
];

export default function Header() {
  const router = useRouter();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(255,255,255,0.92)",
        color: "text.primary",
        borderBottom: "1px solid rgba(16,32,51,0.08)",
        backdropFilter: "blur(14px)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72, gap: 3 }}>
          <Link href="/" aria-label="广州OPC社区首页">
            <Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 2,
                  color: "white",
                  bgcolor: "primary.main",
                }}
              >
                <HubIcon fontSize="small" />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight={800} sx={{ lineHeight: 1.1 }}>
                  OPC 广州
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  AI 实战共创社区
                </Typography>
              </Box>
            </Stack>
          </Link>

          <Stack
            component="nav"
            direction="row"
            spacing={0.5}
            sx={{
              ml: "auto",
              display: { xs: "none", md: "flex" },
            }}
          >
            {navItems.map((item) => {
              const active = router.pathname === item.href;
              return (
                <Button
                  key={item.href}
                  component={Link}
                  href={item.href}
                  color={active ? "primary" : "inherit"}
                  variant={active ? "contained" : "text"}
                  size="small"
                >
                  {item.label}
                </Button>
              );
            })}
          </Stack>

          <Button
            component={Link}
            href="/join"
            variant="contained"
            sx={{ ml: "auto", display: { xs: "inline-flex", md: "none" } }}
          >
            申请
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
