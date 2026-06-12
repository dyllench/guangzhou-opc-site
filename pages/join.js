import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const initialForm = {
  name: "",
  email: "",
  school: "",
  interest: "",
};

export default function Join() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "提交失败，请稍后再试。");
      }

      setForm(initialForm);
      setStatus({ type: "success", message: "申请已提交，我们会尽快与你联系。" });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Join OPC"
        title="加入广州 OPC AI 共创计划"
        description="提交你的基本信息与 AI 兴趣方向，我们会根据训练营、项目组和社区活动匹配合适机会。"
      />
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h4" fontWeight={800}>
              适合谁申请
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.9 }}>
              如果你正在学习 AI 应用开发、希望参与真实项目、想寻找队友或导师反馈，OPC 社区会提供连续的实践任务与展示机会。
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, border: "1px solid rgba(16,32,51,0.08)" }}>
              <Box component="form" onSubmit={submitForm}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="姓名" name="name" value={form.name} onChange={updateField} fullWidth required />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="邮箱" name="email" type="email" value={form.email} onChange={updateField} fullWidth required />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField label="院校" name="school" value={form.school} onChange={updateField} fullWidth required />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      label="AI 意向"
                      name="interest"
                      value={form.interest}
                      onChange={updateField}
                      fullWidth
                      multiline
                      minRows={4}
                      required
                      placeholder="例如：智能体开发、RAG、AI 产品经理、企业项目交付等"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button type="submit" variant="contained" size="large" endIcon={<SendIcon />} disabled={submitting}>
                      {submitting ? "提交中" : "提交申请"}
                    </Button>
                  </Grid>
                  {status && (
                    <Grid size={{ xs: 12 }}>
                      <Alert severity={status.type}>{status.message}</Alert>
                    </Grid>
                  )}
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
