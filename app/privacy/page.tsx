import { LegalPage } from "@/components/common/legal-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chính sách bảo mật",
  description: "Thông tin về cách VietAuction dự kiến bảo vệ dữ liệu người dùng.",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Thông tin pháp lý"
      title="Chính sách bảo mật"
      intro="Cách VietAuction dự kiến thu thập, sử dụng và bảo vệ thông tin khi hệ thống chính thức được vận hành."
      sections={[
        {
          title: "Dữ liệu được thu thập",
          body: "Thông tin tài khoản, hồ sơ tham gia và dữ liệu giao dịch chỉ được thu thập khi có mục đích rõ ràng và cơ sở xử lý phù hợp.",
        },
        {
          title: "Mục đích sử dụng",
          body: "Dữ liệu được dùng để cung cấp dịch vụ, xác minh quyền tham gia, hỗ trợ khách hàng và đáp ứng nghĩa vụ vận hành hoặc pháp lý.",
        },
        {
          title: "Quyền của người dùng",
          body: "Người dùng có thể yêu cầu truy cập, cập nhật hoặc xử lý dữ liệu theo chính sách chính thức và quy định áp dụng.",
        },
      ]}
    />
  )
}
