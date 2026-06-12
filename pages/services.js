import { Card, CardContent, Container, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const services = [
  {
    title: "AI 实战训练营",
    desc: "面向高校学生和转型开发者，覆盖提示工程、RAG、智能体编排、低代码自动化与产品验证。",
    points: ["项目制课程", "导师评审", "作品集沉淀"],
  },
  {
    title: "AI 项目交付",
    desc: "为企业提供从需求梳理、原型设计、模型接入到上线运维的轻量交付服务。",
    points: ["企业知识库", "流程自动化", "智能客服与运营助手"],
  },
  {
    title: "校园共创计划",
    desc: "联合高校社团、实验室与创新创业团队，建设 AI 应用挑战赛和实践基地。",
    points: ["校企课题", "实习通道", "Demo Day 展示"],
  },
];

export default function Services() {
  return (
    <Layout>
      <PageHero
        eyebrow="Services"
        title="训练、共创、交付一体化服务"
        description="我们把 AI 技术学习与真实业务场景放在同一条路径上，让能力成长能被项目结果证明。"
      />
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid size={{ xs: 12, md: 4 }} key={service.title}>
              <Card elevation={0} sx={{ height: "100%", border: "1px solid rgba(16,32,51,0.08)" }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" fontWeight={800}>
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.8 }}>
                    {service.desc}
                  </Typography>
                  <List dense sx={{ mt: 2 }}>
                    {service.points.map((point) => (
                      <ListItem key={point} disableGutters>
                        <ListItemText primary={point} primaryTypographyProps={{ fontWeight: 700 }} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}
