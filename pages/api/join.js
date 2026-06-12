import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "仅支持 POST 请求。" });
  }

  const { name, email, school, interest } = req.body || {};
  const values = { name, email, school, interest };

  for (const [key, value] of Object.entries(values)) {
    if (typeof value !== "string" || value.trim().length === 0) {
      return res.status(400).json({ message: `${key} 为必填项。` });
    }
  }

  if (!emailPattern.test(email)) {
    return res.status(400).json({ message: "邮箱格式不正确。" });
  }

  const submission = {
    id: randomUUID(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    school: school.trim(),
    interest: interest.trim(),
    createdAt: new Date().toISOString(),
  };

  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "join-submissions.json");

  await fs.mkdir(dataDir, { recursive: true });

  let existing = [];
  try {
    const content = await fs.readFile(filePath, "utf8");
    existing = JSON.parse(content);
  } catch (error) {
    if (error.code !== "ENOENT") {
      return res.status(500).json({ message: "读取申请数据失败。" });
    }
  }

  existing.push(submission);
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");

  return res.status(201).json({ message: "申请提交成功。", submission });
}
