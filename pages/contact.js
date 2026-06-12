import { useState } from "react";
import { Alert, Button, Container, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PlaceIcon from "@mui/icons-material/Place";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title="联系广州 OPC 团队"
        description="欢迎高校社团、企业团队、项目伙伴与我们联系，共同探索 AI 实战人才与场景落地。"
      />
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3}>
              <Paper elevation={0} sx={{ p: 3, border: "1px solid rgba(16,32,51,0.08)" }}>
                <Stack direction="row" spacing={2}>
                  <EmailOutlinedIcon color="primary" />
                  <div>
                    <Typography fontWeight={800}>邮箱</Typography>
                    <Typography color="text.secondary">hello@opc-guangzhou.ai</Typography>
                  </div>
                </Stack>
              </Paper>
              <Paper elevation={0} sx={{ p: 3, border: "1px solid rgba(16,32,51,0.08)" }}>
                <Stack direction="row" spacing={2}>
                  <PlaceIcon color="primary" />
                  <div>
                    <Typography fontWeight={800}>地点</Typography>
                    <Typography color="text.secondary">中国 广州 · AI 共创与项目交付中心</Typography>
                  </div>
                </Stack>
              </Paper>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              component="form"
              elevation={0}
              sx={{ p: { xs: 3, md: 4 }, border: "1px solid rgba(16,32,51,0.08)" }}
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField label="姓名" fullWidth required />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField label="邮箱" type="email" fullWidth required />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField label="合作需求" fullWidth multiline minRows={5} required />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button type="submit" variant="contained" size="large">
                    发送消息
                  </Button>
                </Grid>
                {sent && (
                  <Grid size={{ xs: 12 }}>
                    <Alert severity="success">消息已记录，团队会尽快回复。</Alert>
                  </Grid>
                )}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
