import { redirect } from "next/navigation";
import { siteConfig } from "@/data/site";

export default function ResumePage() {
  // Redirect to the resume PDF file
  redirect(siteConfig.resumeUrl);
}
