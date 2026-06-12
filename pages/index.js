import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import GroupsIcon from "@mui/icons-material/Groups";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Layout from "@/components/Layout";

const highlights = [
  {
    icon: <AutoAwesomeIcon />,
    title: "AI 原生实战",
    text: "围绕智能体、自动化工作流、多模态应用和企业知识库，建立从学习到交付的闭环。",
  },
  {
    icon: <GroupsIcon />,
    title: "高校社区网络",
    text: "面向广州高校学生与青年开发者，提供协作任务、导师反馈和展示机会。",
  },
  {
    icon: <RocketLaunchIcon />,
    title: "项目交付能力",
    text: "将真实业务需求拆解为可执行项目，帮助团队快速验证 AI 方案并形成作品集。",
  },
];

export default function Home() {
  return (
    <Layout>
      <Box
        sx={{
          minHeight: { xs: "calc(100vh - 72px)", md: 640 },
          display: "flex",
          alignItems: "center",
          color: "white",
          background:
            "radial-gradient(circle at 70% 20%, rgba(0,166,166,0.48), transparent 32%), linear-gradient(135deg, #071B3A 0%, #0B3E89 50%, #0D1726 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="overline" sx={{ color: "rgba(255,255,255,0.72)", fontWeight: 800 }}>
                Guangzhou OPC AI Community
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  mt: 1,
                  fontSize: { xs: 42, md: 68 },
                  lineHeight: 1.06,
                  maxWidth: 760,
                }}
              >
                让广州青年成为 AI 项目实战的主力
              </Typography>
              <Typography variant="h6" sx={{ mt: 3, maxWidth: 680, color: "rgba(255,255,255,0.78)", lineHeight: 1.7 }}>
                广州类智能体科技有限公司发起 OPC 社区，连接校园人才、产业场景与智能体技术，提供训练营、项目交付和共创孵化支持。
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
                <Button component={Link} href="/join" variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
                  加入招募计划
                </Button>
                <Button component={Link} href="/services" variant="outlined" size="large" sx={{ color: "white", borderColor: "rgba(255,255,255,0.5)" }}>
                  查看服务
                </Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  bgcolor: "rgba(255,255,255,0.08)",
                  p: 3,
                  borderRadius: 2,
                }}
              >
                {["AI 产品原型", "智能体工作流", "企业场景交付", "高校人才共创"].map((item, index) => (
                  <Box
                    key={item}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      py: 2,
                      borderBottom: index === 3 ? 0 : "1px solid rgba(255,255,255,0.16)",
                    }}
                  >
                    <Typography fontWeight={700}>{item}</Typography>
                    <Typography color="rgba(255,255,255,0.62)">0{index + 1}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 44 }, maxWidth: 760 }}>
          从能力训练到真实交付，构建 AI 青年人才飞轮
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {highlights.map((item) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.title}>
              <Card elevation={0} sx={{ height: "100%", border: "1px solid rgba(16,32,51,0.08)" }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ color: "primary.main", mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" fontWeight={800}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.8 }}>
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}
