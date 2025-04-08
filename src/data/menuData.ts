import { I0LinkItem } from "@/components/Layouts/BasicAppShell/BasicAppShell";

export const menuData: I0LinkItem[] = [
  {
    label: "Quản lí hệ thống",
    links: [
      { pageId: 1, name: "Account management", label: "Quản lí tài khoản", link: "core71678" },
      // { label: "Danh mục quyền", link: "47643", status: "Prototype" },
      { pageId: 2, name: "Access control level", label: "Phân quyền cấp đơn vị", link: "core38677" },
      { pageId: 3, name: "Access control", label: "Phân quyền sử dụng", link: "core83092" },
      { name: "Document categories", label: "Danh mục loại văn bản", link: "core18256" },
      { pageId: 4, name: "Security regulations", label: "Quy định an toàn/ bảo mật thông tin", link: "core76318", status: "Default" },
      { pageId: 5, name: "System updates", label: "Thông tin xây dựng, cải tiến, bảo trì hệ thống", link: "core16209", status: "Default" },
      { pageId: 6, name: "User guide", label: "Tài liệu hướng dẫn sử dụng", link: "core40207", status: "Default" },
    ],
  },
  {
    label: "Văn bản - Quy định",
    links: [
      { pageId: 7, name: "Organizational regulations", label: "Văn bản - Quy định tổ chức", link: "core26965", status: "Default" },
      { pageId: 8, name: "Workflow process", label: "Quy trình xử lý công việc", link: "core27311", status: "Default" },
      { pageId: 9, name: "Form templates", label: "Tài liệu biểu mẫu", link: "core12196", status: "Default" },
    ],
  },
  {
    label: "Quản lý chương trình đào tạo ",
    links: [
      {
        label: "Định nghĩa dữ liệu",
        links: [
          { pageId: 609, name: "Training Level Catalog", label: "Danh mục bậc đào tạo", link: "vf2cwmibmh" },
          { pageId: 610, name: "Training systems Catalog", label: "Danh mục hệ đào tạo", link: "4hi65qkj5n" },
          { pageId: 611, name: "Regulation Catalog", label: "Danh mục quy chế", link: "j9ul1u9c2n", status: "Default" },
          { pageId: 612, name: "Degree levels Catalog", label: "Danh mục bậc hệ", link: "zvib1md6z9" },
          { pageId: 613, name: "Program Catalog", label: "Danh mục chương trình", link: "h7op7f4nav", status: "Default" },
          { pageId: 614, name: "Grade Catalog", label: "Danh mục Khóa", link: "ukagvjhxgy" },
          { pageId: 615, name: "Subject group Catalog", label: "Danh mục nhóm môn học", link: "zudcgcvda8", status: "Default" },
          { pageId: 616, name: "Subject Catalog", label: "Danh mục môn học", link: "rdrmqcfvux" },
          { pageId: 617, name: "Subject group MIT", label: "Quan hệ nhóm môn học và thang MIT", link: "wfl5pwciof" },
        ],
      },
      {
        label: "Chương trình đào tạo",
        links: [
          { pageId: 618, name: "Training program", label: "Chương trình đào tạo", link: "hlnya90qi9" },
          { pageId: 619, name: "Program Learning Outcomes", label: "Chuẩn đầu ra chương trình đào tạo (PLO)", link: "lz8rrabyws", status: "Prototype" },
          { pageId: 620, name: "Course Learning Outcomes", label: "Chuẩn đầu ra môn học (CLO)", link: "upgwbnmsn8", status: "Default" },
          { pageId: 621, name: "CLO PIs relation", label: "Quan hệ CLO và Pis", link: "hxrvhadcfm", status: "Prototype" },
          { pageId: 622, name: "Evaluation unit assignment", label: "Phân công đơn vị đánh giá", link: "rb55trm19d", status: "Prototype" },
        ],
      },
    ],
  },
  {
    label: "Khung đo lường CĐR CTĐT ",
    links: [
      { pageId: 623, name: "Core courses measuring PLOs", label: "Danh mục môn học cốt lõi đo lường CĐR CTĐT", link: "t5sip6yyka" },
      { pageId: 624, name: "PLO measurement framework", label: "Khung đo lường CĐR CTĐT", link: "PLOFramework/CLOCoreSubject" },
      { pageId: 625, name: "PLO measurement by CLOs", label: "Đo lường CĐR CTĐT theo CĐR môn học", link: "PLOFramework/ManageGroupCoreSubject" },
    ],
  },
  {
    label: "Xây dựng kế hoạch đo lường CĐR CTĐT ",
    links: [
      { pageId: 626, name: "Unit PLO assessment plan", label: "Kế hoạch đo chuẩn đầu ra theo đơn vị", link: "afqdc7uf8b" },
      { pageId: 627, name: "Program PLO assessment plan", label: "Kế hoạch đo chuẩn đầu ra theo CTĐT", link: "g2" },
    ],
  },
  {
    label: "Đánh giá kết quả học tập môn học ",
    links: [
      {
        label: "Đánh giá CLO môn học ",
        links: [
          { pageId: 628, name: "Course required competencies", label: "Năng lực yêu cầu của môn học", link: "licl7ube7d", status: "Prototype" },
          { pageId: 629, name: "CLO assessment methods", label: "Phương pháp đánh giá CLO", link: "subjectAssessment/CLOAssessment/config" },
          { pageId: 630, name: "Exam structure", label: "Cấu trúc đề thi", link: "vq720hj9jx", status: "Prototype" },
        ],
      },
      {
        label: "Dữ liệu điểm sinh viên đánh giá ",
        links: [
          { pageId: 631, name: "Student database", label: "Cơ sở dữ liệu sinh viên", link: "4ltk4f68a8", status: "Prototype" },
          { pageId: 632, name: "Student course registration", label: "Sinh viên đăng ký môn học", link: "nugmpmukta", status: "Prototype" },
          { pageId: 633, name: "Course grade entry", label: "Nhập điểm theo nhóm học", link: "l9bml18o7p", status: "Prototype" },
          { pageId: 634, name: "Student grade entry", label: "Nhập điểm từng sinh viên", link: "clzixswvmy", status: "Prototype" },
        ],
      },
      {
        label: "Tổng hợp điểm CLO môn học ",
        links: [
          { pageId: 635, name: "Class CLO grade summary", label: "Tổng hợp điểm CLO môn học theo lớp", link: "fgmpowiqop", status: "Default" },
          { pageId: 636, name: "Course wide CLO chart", label: "Biểu đồ CLO toàn môn học", link: "6cnw99q4zo", status: "Prototype" },
        ],
      },
    ],
  },

  {
    label: "Triển khai kế hoạch đo lường CĐR CTĐT ",
    link: "zz2",
    status: "Menu"
  },
  {
    label: "Kết quả thực hiện đo lường CĐR CTĐT ",
    link: "8",
    links: [
      { pageId: 637, name: "Program wide PLO summary", label: "Tổng hợp PLO toàn khóa", link: "5bmex2c6in", status: "Prototype" },
      { pageId: 638, name: "PLO achievement report", label: "Báo cáo kết quả đo lường mức độ đạt CĐR CTĐT", link: "jsnsipqfgt", status: "Prototype" },
      { pageId: 639, name: "Unit PLO achievement report", label: "Báo cáo kết quả đo lường mức độ đạt CĐR Đơn vị", link: "qgpxxmcfjh", status: "Prototype" },
    ],
  },
  {
    label: "Báo cáo và đề xuất cải tiến ",
    link: "i1",
    status: "Menu",
  },
  {
    label: "Họp hội đồng đo lường CĐR CTĐT ",
    link: "j1",
    status: "Menu",
  },
  {
    label: "Danh mục hệ thống ",
    links: [
      { pageId: 640, name: "Unit list", label: "Danh mục đơn vị", link: "14w3vwnnfy", status: "Default" },
      { pageId: 641, name: "MIT scale", label: "Thang đo MIT", link: "umg0mq7o3x", status: "Default" },
      { pageId: 642, name: "Rubric scale", label: "Thang đo Rubrics", link: "fmc2n1ftq1", status: "Prototype" },
      { pageId: 643, name: "PLO ranking table", label: "Bảng xếp loại PLO", link: "f0oia066vb", status: "Prototype" },
      { pageId: 644, name: "Academic year list", label: "Danh mục năm học", link: "omhcfkliwa", status: "Default" },
      { pageId: 645, name: "Academic year semester list", label: "Danh mục năm học học kỳ", link: "cw38zkpvg4" },
    ],
  },
];
