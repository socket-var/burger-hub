"use client";
import { BackwardOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      icon={<BackwardOutlined title="Go Back" onClick={() => router.back()} />}
    >
      Go Back
    </Button>
  );
}
