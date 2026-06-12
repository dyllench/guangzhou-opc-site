import Link from "next/link";
import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#0D1726", color: "white", mt: 8 }}>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" fontWeight={800}>
              广州类智能体科技有限公司
            </Typography>
            <Typography color="rgba(255,255,255,0.68)" sx={{ mt: 1, maxWidth: 560 }}>
              连接高校青年、AI 创业者与企业场景，用实战项目培养下一代智能体应用人才。
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ justifyContent: { md: "flex-end" } }}
            >
              <Link href="/about">关于我们</Link>
              <Link href="/services">服务介绍</Link>
              <Link href="/join">招募申请</Link>
              <Link href="/contact">联系我们</Link>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.14)" }} />
        <Typography variant="body2" color="rgba(255,255,255,0.56)">
          © {new Date().getFullYear()} Guangzhou Agentic Intelligence Technology Co., Ltd. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
