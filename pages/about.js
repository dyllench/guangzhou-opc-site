import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

export default function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="About OPC"
        title="广州类智能体科技有限公司与 OPC 社区"
        description="我们专注于 AI 智能体应用、项目制学习和企业级场景落地，帮助青年开发者在真实问题中成长。"
      />
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" fontWeight={800}>
              公司定位
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.9 }}>
              广州类智能体科技有限公司是一家面向 AI 原生应用与智能体工作流的技术服务公司，关注企业效率提升、知识自动化、教育创新与青年人才发展。
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" fontWeight={800}>
              OPC 社区
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.9 }}>
              OPC 社区通过训练营、项目组队、导师评审和公开 Demo Day，把学习者转化为能独立理解业务、设计方案并交付 AI 产品的实战成员。
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Grid container spacing={3}>
            {[
              ["开放共创", "成员可参与真实业务课题，与产品、设计、开发角色协同推进。"],
              ["项目驱动", "以可上线、可演示、可复盘的成果作为学习和成长的核心单位。"],
              ["产业连接", "链接广州本地企业、高校资源与 AI 创业生态，持续创造实践机会。"],
            ].map(([title, text]) => (
              <Grid size={{ xs: 12, md: 4 }} key={title}>
                <Paper elevation={0} sx={{ p: 3, height: "100%", border: "1px solid rgba(16,32,51,0.08)" }}>
                  <Typography variant="h6" fontWeight={800}>
                    {title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.8 }}>
                    {text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
