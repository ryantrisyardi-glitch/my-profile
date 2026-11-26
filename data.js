/* =====================================================================
   DATA CV — hanya file INI yang perlu Anda edit. Simpan, lalu unggah ulang ke GitHub.
   Jangan hapus tanda kutip ' ' , koma , atau kurung. Ubah isi di dalam tanda kutip saja.
   ===================================================================== */

const CFG={
  dim:.5,        // kegelapan lapisan di atas gambar: .3 = lebih terang, .7 = lebih gelap
  fit:'contain',   // 'cover'   = gambar memenuhi layar (sisi yang berlebih terpotong, terkesan lebih zoom)
                 // 'contain' = seluruh gambar terlihat utuh (bisa ada bidang kosong di tepi)
  zoom:true,     // true = gambar bergerak zoom pelan saat berganti menu. false = diam, tidak ada zoom
  imgs:[         // gambar latar menu 1, 2, 3 (taruh file di folder images/ dengan nama menu1, menu2, menu3)
    // pos = bagian gambar yang dipertahankan saat terpotong. Contoh: 'center', 'left center', 'right center',
    //       'center top', 'center bottom', atau persen '30% 50%'. fit (opsional) = mengganti pengaturan fit di atas.
    {f:'menu1',pos:'center',id:'1B1zW3CYWJPuaZFT2sdtmAwj5U2LGJXTz'},
    {f:'menu2',pos:'center',id:'1qnJ4RoKKdN-X7_flNZ_xAcUOf8IFvq8q'},
    {f:'menu3',pos:'center',id:'1sY4AIvYYKLx2seez1mn6pr5aGkUKNBb9'}]
};

const D={
  name:'Moh Ryan Trisyardi',
  title:'Professional Accountant',
  tag:'Finance, accounting and tax professional with a passion for business systems and AI-assisted analysis.',
  motto:'Great Motivation and Great Faith are the ways to be a super-capabilities-man',
  about:'Reliable as a Finance and Accounting partner possessing knowledge of Accounting standards. Offering 6 years of comprehensive experiences in the distribution sector corp., and still starving for manufacturing industry experiences in Finance Accounting, or/and Tax. Was born in Majalengka, growing excellent career at Bandung-Jakarta, a father of a saucy baby, always balancing IES-Q, create a challenging & productive working environment mixed with enjoyable situation is must.',

  location:'Cimahi, Jawa Barat',
  bornPlace:'Majalengka',
  birth:'04 Jan 1995',            // ISI MANUAL, contoh: '12 Mei 1990'. Kosongkan '' jika tidak ingin ditampilkan.
  languages:'English · Indonesia + Sunda',

  /* ---- KONTAK (muncul di pop-up tombol surat di kanan atas) ----
     Baris yang dikosongkan '' tidak akan ditampilkan.
     whatsapp  : angka saja, awali kode negara, tanpa + dan tanpa 0 di depan. Contoh: '6281234567890' (nomor 0812... juga boleh, otomatis diubah)
     phone     : contoh '+6281234567890'
     instagram : username saja tanpa @ (link instagram.com/... juga boleh). Contoh: 'namaandaaja' (isi persis seperti username Instagram Anda)
     email     : alamat email
     address   : alamat rumah lengkap, contoh 'Jl. Contoh No. 1, Cimahi, Jawa Barat' */
  contact:{whatsapp:'6285353823481',phone:'+6285353823481',instagram:'ryantrisyardi',email:'ryan.trisyardi@yahoo.com',address:'Kp. Kebon Manggu, No. 250, RT. 01, Rw. 21, Kel. Padasuka, Kec. Cimahi Tengah, Kota Cimahi, Jawa Barat'},

  skills:['Accounting Lifecycle + Analyzing','Forecasting Income Statement + Cash Flow','AR Specialist','Corporation Taxation'],
  soft:[['Accurate Online',82],['Access, Visio, Outlook',78],['MS Excel, MS Word, PowerPoint',92]],

  lect:['Database Management System — Regular and Extension Class','Pengantar Teknologi Informasi — Regular Class','Accounting Information System 1 + 2 — Regular and Extension Class','Analisis Perancangan Sistem — Regular and Extension Class'],
  org:[['2015','Himpunan Mahasiswa Akuntansi','Elected as Head of Education Department'],['2015','Accounting Competition · Universitas POS Indonesia','Participant'],['2013 & 2014','Accounting Competition · Universitas Widyatama','Participant']],
  // [tahun, judul, keterangan, link verifikasi (opsional), kode verifikasi (opsional)]
  certs:[['2022','Brevet A & B','Tac Tic Tax, Bandung'],
         ['2017','Microsoft Office Specialist','Excel (R) 2016','https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=251&cvid=TSooaNqnPa70mR6TgHPu8g==','sob2-XMYn'],
         ['2012','Juara Umum 1','SMA PGRI 1 Majalengka']],

  jobs:[
  {p:'2022 – Present',s:'PT. Indonesia Broadband Communications',c:'PT. Indonesia Broadband Communications',r:'Accounting Supervisor',m:[['Sector','Internet Service Provider'],['Brands','Megavision, Starnet, Corpnet'],['Location','Bandung'],['Scope','4 subsidiary companies']],g:[
   ['Reporting & analysis',['Prepare and review Financial Statement Reporting for four subsidiary companies.','Analyze Financial Statements and provide insights to support management decision-making.']],
   ['Supervision',['Supervise and monitor daily accounting activities of 6 Accounting Staff at Headquarters and 10 Accounting Staff across each City Branch.','Including supervision of Opex and Capex Recognition, Revenue Recognition, Bank Reconciliation and Asset Management.']],
   ['Tax control and equalization',['Tax Unification.','Value Added Tax (VAT).','Corporate Income Tax Estimation.']],
   ['Audit & team',['Prepare external audit data, coordinate with auditors, and follow up on outstanding and pending audit matters.','Support recruitment and accounting team expansion for new branches: candidate screening, technical tests and interviews.']]]},
  {p:'2019 – 2022',s:'PT. Distribusi Telekomunikasi Indonesia',c:'PT. Distribusi Telekomunikasi Indonesia',r:'Finance Accounting Supervisor',m:[['Sector','Retail Business'],['Brand','Smartfren'],['Location','Bandung']],g:[
   ['Accounting',['Prepared and analyzed Financial Statements.','Prepared Income Statement forecasts and budgeting projections.','Maintained and controlled corporate taxation in coordination with tax consultants.','Conducted Inventory and Cash Opname.']],
   ['Finance',['Controlled Accounts Receivable (AR), Accounts Payable (AP), Petty Cash and Bank activities.','Supervised and controlled the Administration Sales Team, Warehouse/Inventory Team, Couriers and Sales Personnel.','Analyzed monthly sales turnover and business performance.','Developed, improved and optimized accounting, financial and administrative processes to support business needs and strengthen internal controls.']]]},
  {p:'2018 – 2019',s:'PT. Buana Citra Abadi',c:'PT. Buana Citra Abadi — Muncul Group',r:'Finance Accounting Branch',m:[['Sector','Distribution (Sales & Rent)'],['Product','Copy Machine'],['Location','Bandung']],g:[
   ['Accounting',['Prepare All Financial Statements.','Maintain taxation with Tax Controller from HO Yogyakarta.','Stock Opname Machine & Sparepart.']],
   ['Financial',['Create budget operation.','Execute marketing commission.','Maintain AR, Petty Cash, Bank.','Maintain Asset and General Affair.']]]},
  {p:'2016 – 2018',s:'PT. Erafone Artha Retailindo',c:'PT. Erafone Artha Retailindo — Erajaya Group, Tbk.',r:'Finance AR Supervisor',m:[['Sector','Retail Business'],['Product','Multibrand Smartphone + Accessories'],['Location','West Jakarta']],g:[
   ['AR Retail',['Maintain AR Retail.','Create KPI Store.']],['Bank Reconciliation',['Prepare and Reconcile Bank Mutation.','Create KPI AR Retail Staff.']],
   ['AR Promo — Supervisor',['Maintain Team Finance AR Promo.','Maintain Program Promo (Including Claim).','Create KPI Store.']],
   ['Other responsibilities / projects',['Analyzing Auto Settlement (Support Assistant Manager Project).','Guide Finance AR Retail from EIN (Era Int. Network — Singapore).','Analyzing Man Power Finance AR Retail, Promo, and Joint Business.']]]},
  {p:'2016',s:'Motekar Consulting',c:'Motekar Consulting',r:'Accounting Consultant Staff',m:[['Field','Accounting Consultant'],['Project location','Kuningan, Jawa Barat'],['Office','Bandung']],g:[
   ['Projects',['Repair Accounting Method — Hotel Grand Purnama, Kuningan.','Mentoring Team Finance Accounting — Hotel Grand Purnama, Kuningan.']]]}],

  /* ---- PROYEK INDEPENDEN ----
     Format tiap proyek: ['Judul','Deskripsi','LINK']
     Untuk memasang link: tempel alamat lengkap di dalam tanda kutip ketiga, harus diawali https://
     Contoh: ['ERP Application Development','Deskripsi...','https://contoh.github.io/erp']
     Jika dikosongkan '' akan tampil "Link coming soon". Untuk menambah proyek, salin satu baris dan beri koma. */
  ind:[
   ['Tax Cleanup — Telecommunications Distributor','Helped organize the tax administration and resolve tax issues of a telecommunications distributor company.',''],
   ['ERP Application Development','Developing an ERP application for business needs: accounting, HRIS, inventory, purchasing, cash and bank, fixed assets and other business modules. The manufacturing module is still in development.',''],
   ['Financial Statement Analytical Dashboard','A dashboard for analyzing company financial statements, with AI-based analysis features that help read the data and give insights.',''],
   ['Accounting Quizzes & Tax Learning Materials','Accounting quizzes and tax learning materials.','']]
};
