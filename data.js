/* =====================================================================
   PENGATURAN UTAMA — hanya SATU hal yang perlu Anda isi di file ini:

   SHEET_ID = ID Google Sheet Anda.
   Contoh alamat Sheet:  https://docs.google.com/spreadsheets/d/1AbCdEfGh.../edit
   ID-nya adalah bagian di antara /d/ dan /edit  ->  1AbCdEfGh...
   Tempel di dalam tanda kutip. Kosongkan '' untuk memakai data bawaan di bawah.
   ===================================================================== */
const SHEET_ID='https://docs.google.com/spreadsheets/d/11YK3Lsl3fr1TuCEC5MW0QzK__L9qQZc_/edit?usp=sharing&ouid=115609992470901907479&rtpof=true&sd=true';

/* Data bawaan (cadangan). Dipakai jika SHEET_ID kosong atau Google Sheet tidak bisa dibuka.
   Anda TIDAK perlu mengedit bagian ini; ubah isi website lewat Google Sheet. */
const FALLBACK={
"Profil": [
{
"kunci": "name",
"isi": "Moh Ryan Trisyardi",
"petunjuk": "Nama lengkap (tampil besar di menu Profile)"
},
{
"kunci": "title",
"isi": "Professional Accountant",
"petunjuk": "Jabatan profesional"
},
{
"kunci": "tagline",
"isi": "Finance, accounting and tax professional with a passion for business systems and AI-assisted analysis.",
"petunjuk": "Kalimat pengantar singkat"
},
{
"kunci": "motto",
"isi": "Great Motivation and Great Faith are the ways to be a super-capabilities-man",
"petunjuk": "Motto (boleh dikosongkan)"
},
{
"kunci": "about",
"isi": "Reliable as a Finance and Accounting partner possessing knowledge of Accounting standards. Offering 6 years of comprehensive experiences in the distribution sector corp., and still starving for manufacturing industry experiences in Finance Accounting, or/and Tax. Was born in Majalengka, growing excellent career at Bandung-Jakarta, a father of a saucy baby, always balancing IES-Q, create a challenging & productive working environment mixed with enjoyable situation is must.",
"petunjuk": "Teks About Me"
},
{
"kunci": "location",
"isi": "Cimahi, Jawa Barat",
"petunjuk": "Domisili"
},
{
"kunci": "birth_place",
"isi": "Majalengka",
"petunjuk": "Tempat lahir"
},
{
"kunci": "birth_date",
"isi": "",
"petunjuk": "Tanggal lahir, contoh: 12 Mei 1990. Kosongkan jika tidak ingin ditampilkan"
},
{
"kunci": "languages",
"isi": "English · Indonesia + Sunda",
"petunjuk": "Bahasa"
}
],
"Skill": [
{
"jenis": "skill",
"nama": "Accounting Lifecycle + Analyzing",
"nilai": ""
},
{
"jenis": "skill",
"nama": "Forecasting Income Statement + Cash Flow",
"nilai": ""
},
{
"jenis": "skill",
"nama": "AR Specialist",
"nilai": ""
},
{
"jenis": "skill",
"nama": "Corporation Taxation",
"nilai": ""
},
{
"jenis": "software",
"nama": "Accurate Online",
"nilai": "82"
},
{
"jenis": "software",
"nama": "Access, Visio, Outlook",
"nilai": "78"
},
{
"jenis": "software",
"nama": "MS Excel, MS Word, PowerPoint",
"nilai": "92"
}
],
"Sorotan": [
{
"angka": "3.89",
"label": "GPA, S1 Accounting"
},
{
"angka": "4",
"label": "Subjects as assistant lecturer"
},
{
"angka": "3",
"label": "Certificates & achievements"
}
],
"LatarBelakang": [
{
"kelompok": "Education",
"tahun": "2012 – 2016",
"judul": "Universitas Jenderal Achmad Yani",
"detail": "Bachelor Degree · S1 Akuntansi",
"nilai": "GPA 3.89",
"link": ""
},
{
"kelompok": "Education",
"tahun": "2012",
"judul": "SMA PGRI 1 Majalengka",
"detail": "High school",
"nilai": "Juara Umum 1",
"link": ""
},
{
"kelompok": "Assistant Lecturer",
"tahun": "",
"judul": "Database Management System",
"detail": "Regular and Extension Class",
"nilai": "",
"link": ""
},
{
"kelompok": "",
"tahun": "",
"judul": "Pengantar Teknologi Informasi",
"detail": "Regular Class",
"nilai": "",
"link": ""
},
{
"kelompok": "",
"tahun": "",
"judul": "Accounting Information System 1 + 2",
"detail": "Regular and Extension Class",
"nilai": "",
"link": ""
},
{
"kelompok": "",
"tahun": "",
"judul": "Analisis Perancangan Sistem",
"detail": "Regular and Extension Class",
"nilai": "",
"link": ""
},
{
"kelompok": "Organization & Competitions",
"tahun": "2015",
"judul": "Himpunan Mahasiswa Akuntansi",
"detail": "Elected as Head of Education Department",
"nilai": "",
"link": ""
},
{
"kelompok": "",
"tahun": "2015",
"judul": "Accounting Competition · Universitas POS Indonesia",
"detail": "Participant",
"nilai": "",
"link": ""
},
{
"kelompok": "",
"tahun": "2013 & 2014",
"judul": "Accounting Competition · Universitas Widyatama",
"detail": "Participant",
"nilai": "",
"link": ""
}
],
"Pengalaman": [
{
"id": "1",
"awal": "2022",
"akhir": "Present",
"perusahaan": "PT. Indonesia Broadband Communications",
"nama_singkat": "",
"jabatan": "Accounting Supervisor",
"sektor": "Internet Service Provider",
"merek_produk": "Megavision, Starnet, Corpnet",
"lokasi": "Bandung",
"catatan": "Accounting responsibilities for 4 subsidiary companies"
},
{
"id": "2",
"awal": "2019",
"akhir": "2022",
"perusahaan": "PT. Distribusi Telekomunikasi Indonesia",
"nama_singkat": "",
"jabatan": "Finance Accounting Supervisor",
"sektor": "Retail Business",
"merek_produk": "Smartfren",
"lokasi": "Bandung",
"catatan": ""
},
{
"id": "3",
"awal": "2018",
"akhir": "2019",
"perusahaan": "PT. Buana Citra Abadi — Muncul Group",
"nama_singkat": "PT. Buana Citra Abadi",
"jabatan": "Finance Accounting Branch",
"sektor": "Distribution (Sales & Rent)",
"merek_produk": "Copy Machine",
"lokasi": "Bandung",
"catatan": ""
},
{
"id": "4",
"awal": "2016",
"akhir": "2018",
"perusahaan": "PT. Erafone Artha Retailindo — Erajaya Group, Tbk.",
"nama_singkat": "PT. Erafone Artha Retailindo",
"jabatan": "Finance AR Supervisor",
"sektor": "Retail Business",
"merek_produk": "Multibrand Smartphone + Accessories",
"lokasi": "West Jakarta",
"catatan": ""
},
{
"id": "5",
"awal": "2016",
"akhir": "2016",
"perusahaan": "Motekar Consulting",
"nama_singkat": "",
"jabatan": "Accounting Consultant Staff",
"sektor": "Accounting Consultant",
"merek_produk": "",
"lokasi": "Kuningan, Jawa Barat (office: Bandung)",
"catatan": ""
}
],
"Tugas": [
{
"id": "1",
"kelompok": "Reporting & analysis",
"tugas": "Prepare and review Financial Statement Reporting for four subsidiary companies."
},
{
"id": "1",
"kelompok": "Reporting & analysis",
"tugas": "Analyze Financial Statements and provide insights to support management decision-making."
},
{
"id": "1",
"kelompok": "Supervision",
"tugas": "Supervise and monitor daily accounting activities of 6 Accounting Staff at Headquarters and 10 Accounting Staff across each City Branch."
},
{
"id": "1",
"kelompok": "Supervision",
"tugas": "Including supervision of Opex and Capex Recognition, Revenue Recognition, Bank Reconciliation and Asset Management."
},
{
"id": "1",
"kelompok": "Tax control and equalization",
"tugas": "Tax Unification."
},
{
"id": "1",
"kelompok": "Tax control and equalization",
"tugas": "Value Added Tax (VAT)."
},
{
"id": "1",
"kelompok": "Tax control and equalization",
"tugas": "Corporate Income Tax Estimation."
},
{
"id": "1",
"kelompok": "Audit & team",
"tugas": "Prepare external audit data, coordinate with auditors, and follow up on outstanding and pending audit matters."
},
{
"id": "1",
"kelompok": "Audit & team",
"tugas": "Support recruitment and accounting team expansion for new branches: candidate screening, technical tests and interviews."
},
{
"id": "2",
"kelompok": "Accounting",
"tugas": "Prepared and analyzed Financial Statements."
},
{
"id": "2",
"kelompok": "Accounting",
"tugas": "Prepared Income Statement forecasts and budgeting projections."
},
{
"id": "2",
"kelompok": "Accounting",
"tugas": "Maintained and controlled corporate taxation in coordination with tax consultants."
},
{
"id": "2",
"kelompok": "Accounting",
"tugas": "Conducted Inventory and Cash Opname."
},
{
"id": "2",
"kelompok": "Finance",
"tugas": "Controlled Accounts Receivable (AR), Accounts Payable (AP), Petty Cash and Bank activities."
},
{
"id": "2",
"kelompok": "Finance",
"tugas": "Supervised and controlled the Administration Sales Team, Warehouse/Inventory Team, Couriers and Sales Personnel."
},
{
"id": "2",
"kelompok": "Finance",
"tugas": "Analyzed monthly sales turnover and business performance."
},
{
"id": "2",
"kelompok": "Finance",
"tugas": "Developed, improved and optimized accounting, financial and administrative processes to support business needs and strengthen internal controls."
},
{
"id": "3",
"kelompok": "Accounting",
"tugas": "Prepare All Financial Statements."
},
{
"id": "3",
"kelompok": "Accounting",
"tugas": "Maintain taxation with Tax Controller from HO Yogyakarta."
},
{
"id": "3",
"kelompok": "Accounting",
"tugas": "Stock Opname Machine & Sparepart."
},
{
"id": "3",
"kelompok": "Financial",
"tugas": "Create budget operation."
},
{
"id": "3",
"kelompok": "Financial",
"tugas": "Execute marketing commission."
},
{
"id": "3",
"kelompok": "Financial",
"tugas": "Maintain AR, Petty Cash, Bank."
},
{
"id": "3",
"kelompok": "Financial",
"tugas": "Maintain Asset and General Affair."
},
{
"id": "4",
"kelompok": "AR Retail",
"tugas": "Maintain AR Retail."
},
{
"id": "4",
"kelompok": "AR Retail",
"tugas": "Create KPI Store."
},
{
"id": "4",
"kelompok": "Bank Reconciliation",
"tugas": "Prepare and Reconcile Bank Mutation."
},
{
"id": "4",
"kelompok": "Bank Reconciliation",
"tugas": "Create KPI AR Retail Staff."
},
{
"id": "4",
"kelompok": "AR Promo — Supervisor",
"tugas": "Maintain Team Finance AR Promo."
},
{
"id": "4",
"kelompok": "AR Promo — Supervisor",
"tugas": "Maintain Program Promo (Including Claim)."
},
{
"id": "4",
"kelompok": "AR Promo — Supervisor",
"tugas": "Create KPI Store."
},
{
"id": "4",
"kelompok": "Other responsibilities / projects",
"tugas": "Analyzing Auto Settlement (Support Assistant Manager Project)."
},
{
"id": "4",
"kelompok": "Other responsibilities / projects",
"tugas": "Guide Finance AR Retail from EIN (Era Int. Network — Singapore)."
},
{
"id": "4",
"kelompok": "Other responsibilities / projects",
"tugas": "Analyzing Man Power Finance AR Retail, Promo, and Joint Business."
},
{
"id": "5",
"kelompok": "Projects",
"tugas": "Repair Accounting Method — Hotel Grand Purnama, Kuningan."
},
{
"id": "5",
"kelompok": "Projects",
"tugas": "Mentoring Team Finance Accounting — Hotel Grand Purnama, Kuningan."
}
],
"Portofolio": [
{
"judul": "Tax Cleanup — Telecommunications Distributor",
"deskripsi": "Helped organize the tax administration and resolve tax issues of a telecommunications distributor company.",
"link": "",
"tag": "Taxation"
},
{
"judul": "ERP Application Development",
"deskripsi": "Developing an ERP application for business needs: accounting, HRIS, inventory, purchasing, cash and bank, fixed assets and other business modules.",
"link": "",
"tag": "Manufacturing module in development"
},
{
"judul": "Financial Statement Analytical Dashboard",
"deskripsi": "A dashboard for analyzing company financial statements, with AI-based analysis features that help read the data and give insights.",
"link": "",
"tag": "AI-based analysis"
},
{
"judul": "Accounting Quizzes & Tax Learning Materials",
"deskripsi": "Accounting quizzes and tax learning materials.",
"link": "",
"tag": "Education"
}
],
"Kontak": [
{
"jenis": "whatsapp",
"label": "",
"isi": ""
},
{
"jenis": "telepon",
"label": "",
"isi": ""
},
{
"jenis": "instagram",
"label": "",
"isi": ""
},
{
"jenis": "email",
"label": "",
"isi": "ryan.trisyardi@yahoo.com"
},
{
"jenis": "alamat",
"label": "",
"isi": ""
},
{
"jenis": "linkedin",
"label": "",
"isi": ""
},
{
"jenis": "website",
"label": "",
"isi": ""
}
],
"Arsip": [
{
"kategori": "Ijazah & Transkrip",
"tahun": "2016",
"judul": "Ijazah S1 Akuntansi",
"deskripsi": "Universitas Jenderal Achmad Yani",
"sorotan": "",
"kode": "",
"link": ""
},
{
"kategori": "",
"tahun": "2016",
"judul": "Transkrip Nilai S1",
"deskripsi": "Universitas Jenderal Achmad Yani",
"sorotan": "IPK 3.89",
"kode": "",
"link": ""
},
{
"kategori": "Sertifikat",
"tahun": "2022",
"judul": "Brevet A & B",
"deskripsi": "Tac Tic Tax, Bandung",
"sorotan": "",
"kode": "",
"link": ""
},
{
"kategori": "",
"tahun": "2017",
"judul": "Microsoft Office Specialist",
"deskripsi": "Excel (R) 2016",
"sorotan": "",
"kode": "sob2-XMYn",
"link": "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=251&cvid=TSooaNqnPa70mR6TgHPu8g=="
},
{
"kategori": "Prestasi",
"tahun": "2012",
"judul": "Juara Umum 1",
"deskripsi": "SMA PGRI 1 Majalengka",
"sorotan": "",
"kode": "",
"link": ""
}
],
"Pengaturan": [
{
"kunci": "dim",
"isi": ".5",
"petunjuk": "Kegelapan lapisan di atas gambar: .3 lebih terang, .7 lebih gelap"
},
{
"kunci": "fit",
"isi": "cover",
"petunjuk": "cover = gambar memenuhi layar (terpotong); contain = gambar utuh"
},
{
"kunci": "zoom",
"isi": "true",
"petunjuk": "true = gambar zoom pelan saat pindah menu; false = diam"
},
{
"kunci": "bg1_drive",
"isi": "1B1zW3CYWJPuaZFT2sdtmAwj5U2LGJXTz",
"petunjuk": "ID file Google Drive untuk gambar latar menu Profile (opsional, jika tidak memakai folder images/menu1.jpg)"
},
{
"kunci": "bg1_pos",
"isi": "center",
"petunjuk": "Bagian gambar menu Profile yang dipertahankan: center, left center, right center, center top, center bottom, atau 30% 50%"
},
{
"kunci": "bg2_drive",
"isi": "1GvLO2HlinOtPIxFI4bQqq-PBmo402W3U",
"petunjuk": "ID file Google Drive untuk gambar latar menu Background (opsional, jika tidak memakai folder images/menu2.jpg)"
},
{
"kunci": "bg2_pos",
"isi": "center",
"petunjuk": "Bagian gambar menu Background yang dipertahankan: center, left center, right center, center top, center bottom, atau 30% 50%"
},
{
"kunci": "bg3_drive",
"isi": "1YxaaPfwBwCidPx29utyda97w8Q1cebOu",
"petunjuk": "ID file Google Drive untuk gambar latar menu Experience (opsional, jika tidak memakai folder images/menu3.jpg)"
},
{
"kunci": "bg3_pos",
"isi": "center",
"petunjuk": "Bagian gambar menu Experience yang dipertahankan: center, left center, right center, center top, center bottom, atau 30% 50%"
},
{
"kunci": "bg4_drive",
"isi": "1D4Mz3xOHSDQXl7v1aXkxMEZWIQC5lWCW",
"petunjuk": "ID file Google Drive untuk gambar latar menu Portfolio (opsional, jika tidak memakai folder images/menu4.jpg)"
},
{
"kunci": "bg4_pos",
"isi": "center",
"petunjuk": "Bagian gambar menu Portfolio yang dipertahankan: center, left center, right center, center top, center bottom, atau 30% 50%"
},
{
"kunci": "bg5_drive",
"isi": "1MMMAZ-v8smYXgGlk1tE8FzhXhy31TGIl",
"petunjuk": "ID file Google Drive untuk gambar latar menu Contact & Archive (opsional, jika tidak memakai folder images/menu5.jpg)"
},
{
"kunci": "bg5_pos",
"isi": "center",
"petunjuk": "Bagian gambar menu Contact & Archive yang dipertahankan: center, left center, right center, center top, center bottom, atau 30% 50%"
}
]
};
