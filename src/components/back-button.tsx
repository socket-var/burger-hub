"use client";
import { BackwardOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        console.log("going back");
        router.back();
      }}
      icon={<BackwardOutlined title="Go Back" />}
      danger
    >
      Go Back
    </Button>
  );
}
