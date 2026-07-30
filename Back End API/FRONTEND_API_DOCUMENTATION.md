# 📖 توثيق واجهات البرمجة (API Documentation) - المخصصة لفرونت إند البنك

مستند مرجعي شامل ومفصل لجميع نقط الاتصال (API Endpoints) المخصصة للموقع الإلكتروني الخارجي لـ **بنك بن دول للتمويل الأصغر الإسلامي (`v1`)**.

> 📦 **مجموعة بوستمان (Postman Collection):**
> يمكنك استيراد الملف الجاهز لاستخدام وتجربة كافة الـ APIs الموثقة من خلال:
> [`docs/Bin_Dowal_Bank_v1_Postman_Collection.json`](file:///d:/work/Bank%20Bin%20Dowal%20Back%20End/Bank-Bin-Dowal-Back-End/docs/Bin_Dowal_Bank_v1_Postman_Collection.json)

---

## 🌐 المعايير العامة للاتصال (Global Integration Standards)

### 1. العنوان الرئيسي (Base URL)
- **بيئة الإنتاج (Production):** `https://api.bindowalbank.com/api/v1`
- **البيئة المحلية (Local Development):** `http://localhost:8000/api/v1`

### 2. الترويسات المطلوبة في كل الطلبات (Headers)
```http
Accept: application/json
Content-Type: application/json
Accept-Language: ar   # أرسل 'ar' للغة العربية أو 'en' للغة الإنجليزية
```

---

## 📋 نقط الاتصال المفعلة للفرونت إند (Active Frontend Endpoints)

| # | المجال / Module | المسار / Endpoint | الرمز | الوصف |
| :-: | :--- | :--- | :-: | :--- |
| 1 | **الهيكل والتنقل** | `/navigation` | `GET` | قائمة الموقع والهدر والفوتر والروابط |
| 2 | **الخدمات المصرفية** | `/services` | `GET` | قائمة جميع الخدمات والمنتجات المصرفية |
| 3 | **تفاصيل خدمة** | `/services/{slug}` | `GET` | الشروط والخطوات والمميزات والأسئلة الشائعة للخدمة |
| 4 | **الأخبار والفعاليات** | `/news` | `GET` | المركز الإعلامي والأخبار المستجدة |
| 5 | **تفاصيل خبر** | `/news/{slug}` | `GET` | الخبر الكامل بالتنسيق HTML المترجم |
| 6 | **التقارير السنوية** | `/annual-reports` | `GET` | القوائم والتقارير المالية المعتمدة مع روابط الـ PDF |
| 7 | **المسؤولية المجتمعية** | `/csr-initiatives` | `GET` | حملات ومبادرات البنك المجتمعية والتصنيفات |
| 8 | **تفاصيل مبادرة** | `/csr-initiatives/{slug}` | `GET` | تفاصيل الحملة المجتمعية ونسبة الإنجاز |
| 9 | **الفروع والصرافات** | `/locations` | `GET` | شبكة الفروع وأجهزة الصراف الإحداثيات والدوام |
| 10 | **الشركاء والشبكات** | `/partners` | `GET` | قائمة الشركاء والشبكات المصرفية والبنوك المراسلة |
| 11 | **الوظائف الشاغرة** | `/jobs` | `GET` | قائمة جميع الفرص الوظيفية المتاحة |
| 12 | **تفاصيل الوظيفة** | `/jobs/{slug}` | `GET` | المسمى، الشروط، المهام، الشهادات، البريد للتقديم |

---

## 🔍 التفاصيل الشاملة لنقط الاتصال (Detailed Endpoint Specifications)

---

### 1. قائمة التنقل الرئيسية والفوتر (Navigation)

- **المسار:** `GET /navigation`
- **الوصف:** يُرجع جميع روابط القائمة الهيكلية للموقع العلوي (Navbar) والسفلي (Footer).

#### مثال طلب (Request):
```http
GET /api/v1/navigation HTTP/1.1
Host: localhost:8000
Accept: application/json
Accept-Language: ar
```

#### استجابة ناجحة (Response 200 OK):
```json
{
  "data": [
    {
      "id": 1,
      "key": "about_us",
      "title": "عن البنك",
      "lang": "ar",
      "order_index": 1,
      "items": [
        {
          "id": 1,
          "title": "الخدمات المتاحة",
          "subtitle": null,
          "url": null,
          "icon": null,
          "badge": null,
          "target": "_self",
          "order_index": 1,
          "children": [
            {
              "id": 2,
              "title": "نبذة عن البنك",
              "subtitle": "القيم والخبرة المصرفية",
              "url": "/about",
              "icon": "Building2",
              "badge": null,
              "target": "_self",
              "order_index": 1,
              "children": []
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "key": "individual_services",
      "title": "خدمات الأفراد",
      "lang": "ar",
      "order_index": 2,
      "items": [
        {
          "id": 10,
          "title": "الحسابات",
          "subtitle": null,
          "url": null,
          "icon": null,
          "badge": null,
          "target": "_self",
          "order_index": 1,
          "children": [
            {
              "id": 11,
              "title": "الحساب الجاري",
              "subtitle": null,
              "url": "/services/current-account",
              "icon": "Wallet",
              "children": []
            }
          ]
        },
        {
          "id": 14,
          "title": "الخدمات المالية",
          "subtitle": null,
          "url": null,
          "children": [
            {
              "id": 15,
              "title": "التحويلات المحلية",
              "icon": "Send",
              "children": [
                {
                  "id": 16,
                  "title": "دول إكسبرس",
                  "url": "/services/dowal-express",
                  "icon": "Zap",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

---

### 2. قائمة الخدمات المصرفية (Services List)

- **المسار:** `GET /services`
- **الوصف:** يُرجع قائمة بالخدمات المصرفية مع إمكانية البحث والتصفية حسب الفئة.

#### برامترات البحث والاستعلام (Query Parameters):
| البرامتر | النوع | اختياري/مطلوب | الوصف |
| :--- | :--- | :--- | :--- |
| `search` | String | اختياري | البحث في عنوان أو محتوى الخدمة |
| `category` | String | اختياري | التصفية حسب الفئة (مثلاً: `خدمات الأفراد` أو `Personal Banking`) |
| `per_page` | Integer | اختياري | عدد العناصر في الصفحة (الافتراضي: 15) |

#### مثال طلب (Request):
```http
GET /api/v1/services?category=Personal%20Banking HTTP/1.1
Host: localhost:8000
Accept: application/json
```

#### استجابة ناجحة (Response 200 OK):
```json
{
  "data": [
    {
      "id": 1,
      "slug": "current-account",
      "title_ar": "الحساب الجاري للأفراد",
      "title_en": "Current Account for Individuals",
      "name_ar": "الحساب الجاري",
      "name_en": "Current Account",
      "summary_ar": "افتح حساب جاري بسهولة وابدأ إدارة أموالك اليوم.",
      "summary_en": "Open a current account easily and start managing your money today.",
      "category_ar": "خدمات الأفراد",
      "category_en": "Personal Banking",
      "icon_config": {
        "type": "icon",
        "value": "Wallet"
      },
      "order_index": 1
    }
  ],
  "links": {
    "first": "http://localhost:8000/api/v1/services?page=1",
    "last": "http://localhost:8000/api/v1/services?page=2",
    "prev": null,
    "next": "http://localhost:8000/api/v1/services?page=2"
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 2,
    "per_page": 15,
    "total": 23
  }
}
```

---

### 3. تفاصيل الخدمة المصرفية (Single Service Details)

- **المسار:** `GET /services/{slug}`
- **الوصف:** يُرجع تفاصيل الخدمة الكاملة بما في ذلك المميزات، الشروط والأنظمة، خطوات التقديم، الفئات المستهدفة، الأسئلة الشائعة، والخدمات ذات الصلة.

#### مثال طلب (Request):
```http
GET /api/v1/services/current-account HTTP/1.1
Host: localhost:8000
Accept: application/json
```

#### استجابة ناجحة (Response 200 OK):
```json
{
  "data": {
    "id": 1,
    "slug": "current-account",
    "title_ar": "فتح حساب جاري في بنك بن دول في اليمن | الشروط والخطوات بالتفصيل",
    "title_en": "Open a current account with Bin Dowal Bank easily",
    "name_ar": "الحساب الجاري",
    "name_en": "Current Account",
    "hero_title": "فتح حساب جاري في بنك بن دول",
    "hero_description": "إدارة أموالك بسهولة وأمان عالي بدون تعقيدات.",
    "about_title_ar": "ما هو الحساب الجاري؟",
    "about_title_en": "What is a Current Account?",
    "about_content_ar": "الحساب الجاري هو أداة يومية لإدارة أموالك تتيح لك الإيداع والسحب في أي وقت...",
    "about_content_en": "A current account is a daily tool for managing your money...",
    "why_title_ar": "لماذا تحتاج حساب جاري اليوم؟",
    "why_title_en": "Why do you need a current account today?",
    "why_content": [
      "لتسهيل التحويلات المالية.",
      "لتجنب حمل الكاش ومخاطره.",
      "للاستفادة من الخدمات المصرفية الرقمية الحديثة."
    ],
    "features_title_ar": "مميزات فتح حساب جاري في بنك بن دول",
    "features_title_en": "Features of opening a current account",
    "features": [
      {
        "title_ar": "إدارة أموال آمنة",
        "title_en": "Secure Money Management",
        "description_ar": "إيداع وسحب الأموال مرونة كاملة."
      }
    ],
    "target_audiences": [
      "الأفراد (مواطنون، مقيمون، مغتربون).",
      "أصحاب الأعمال والأنشطة التجارية."
    ],
    "conditions_title_ar": "شروط فتح حساب جاري في اليمن",
    "conditions_title_en": "Conditions for opening a current account",
    "conditions": [
      "هوية سارية المفعول (بطاقة شخصية أو جواز سفر).",
      "صورة شخصية حديثة مقاس 4×6.",
      "أن لا يقل عمر العميل عن 18 سنة."
    ],
    "steps_title_ar": "خطوات فتح حساب جاري في بنك بن دول",
    "steps": [
      {
        "title_ar": "زيارة أقرب فرع",
        "title_en": "Visit Nearest Branch",
        "description_ar": "توجه إلى أقرب فرع لبنك بن دول مصحوباً ببطاقتك المستندية."
      }
    ],
    "faqs": [
      {
        "question_ar": "هل هناك حد أدنى لفتح الحساب؟",
        "question_en": "Is there a minimum deposit required?",
        "answer_ar": "نعم، حد أدنى مبسط لتفعيل الحساب وفق السياسات المعمول بها.",
        "answer_en": "Yes, a simple minimum amount to activate the account."
      }
    ],
    "related_services": [
      {
        "slug": "savings-account",
        "name_ar": "حساب التوفير",
        "name_en": "Savings Account"
      }
    ]
  }
}
```

---

### 4. قائمة الأخبار والمركز الإعلامي (News List)

- **المسار:** `GET /news`
- **الوصف:** يُرجع قائمة الأخبار المنشورة والفعاليات.

#### برامترات الاستعلام (Query Parameters):
| البرامتر | النوع | الوصف |
| :--- | :--- | :--- |
| `search` | String | البحث في عنوان الخبر أو محتواه |
| `category` | String | التصفية حسب الفئة (مثلاً: `أخبار البنك`) |
| `is_featured` | Boolean | `true` لطلب الأخبار المختارة محررياً فقط |
| `show_in_home` | Boolean | `true` لطلب الأخبار المخصصة للعرض في الصفحة الرئيسية |

#### مثال طلب (Request):
```http
GET /api/v1/news?is_featured=true HTTP/1.1
Host: localhost:8000
Accept: application/json
```

#### استجابة ناجحة (Response 200 OK):
```json
{
  "data": [
    {
      "id": 1,
      "slug": "bank-bin-dowal-participates-in-uab-forum-beirut",
      "title_ar": "بنك بن دول للتمويل الأصغر الإسلامي يشارك في ملتقى اتحاد المصارف العربية في بيروت",
      "title_en": "Bin Dowal Islamic Microfinance Bank Participates in Union of Arab Banks Forum in Beirut",
      "brief_ar": "شارك بنك بن دول للتمويل الأصغر الإسلامي في ملتقى اتحاد المصارف العربية في بيروت...",
      "brief_en": "Bin Dowal Islamic Microfinance Bank participated in the Union of Arab Banks Forum...",
      "image_path": "storage/news/beirut-forum.jpg",
      "category_ar": "أخبار البنك",
      "category_en": "Bank News",
      "is_featured": true,
      "views_count": 340,
      "published_at": "2026-04-12"
    }
  ]
}
```

---

### 5. تفاصيل الخبر الكامل (Single News Details)

- **المسار:** `GET /news/{slug}`
- **الوصف:** يُرجع نص الخبر المترجم كاملاً بتنسيق HTML مع الصور والأخبار ذات الصلة.

#### مثال طلب (Request):
```http
GET /api/v1/news/saba-african-bank-official-visit HTTP/1.1
Host: localhost:8000
Accept: application/json
```

#### استجابة ناجحة (Response 200 OK):
```json
{
  "data": {
    "id": 2,
    "slug": "saba-african-bank-official-visit",
    "title_ar": "بنك سبأ الافريقي في زيارة رسمية لبنك بن دول للتمويل الأصغر الإسلامي",
    "title_en": "Saba African Bank Makes an Official Visit to Bin Dowal Bank",
    "brief_ar": "استقبل بنك بن دول وفداً من بنك سبأ الافريقي في زيارة رسمية...",
    "brief_en": "Bin Dowal Bank welcomed a delegation from Saba African Bank...",
    "content_ar": "<h4>محاور الزيارة</h4><p>استقبل بنك بن دول للتمويل الأصغر الإسلامي وفداً رفيع المستوى...</p>",
    "content_en": "<h4>Visit Themes</h4><p>Bin Dowal Islamic Microfinance Bank received a high-level delegation...</p>",
    "image_path": "storage/news/saba-visit.jpg",
    "published_at": "2026-04-10",
    "views_count": 185
  }
}
```

---

### 6. قائمة التقارير السنوية (Annual Reports)

- **المسار:** `GET /annual-reports`
- **الوصف:** يُرجع قوائم وتقارير البنك السنوية المعتمدة المنشورة مع رابط ملف الـ PDF وحجمه وعدد الصفحات.

#### مثال طلب (Request):
```http
GET /api/v1/annual-reports HTTP/1.1
Host: localhost:8000
Accept: application/json
```

#### استجابة ناجحة (Response 200 OK):
```json
{
  "data": [
    {
      "id": 1,
      "year": 2025,
      "title": "التقرير السنوي لعام 2025",
      "brief_description": "القوائم المالية وحسابات الأرباح المعتمدة لبنك بن دول عن العام المالي 2025",
      "pdf_file_path": "http://localhost:8000/storage/reports/annual-report-2025.pdf",
      "file_size": "14.2 MB",
      "page_count": 64,
      "publish_date": "2026-03-01",
      "is_published": true
    }
  ]
}
```

---

### 7. المسؤولية المجتمعية والمبادرات (CSR Initiatives)

- **المسار:** `GET /csr-initiatives`
- **الوصف:** يُرجع مبادرات البنك المجتمعية المستدامة (بيئية، اجتماعية، صحية، ذوي الإعاقة).

#### برامترات الاستعلام (Query Parameters):
| البرامتر | النوع | القيم المتاحة | الوصف |
| :--- | :--- | :--- | :--- |
| `category` | String | `environment`, `social`, `disability`, `health` | التصفية حسب تصنيف المبادرة |
| `year` | Integer | (مثلاً: `2024`) | سنة التنفيذ |

#### مثال طلب (Request):
```http
GET /api/v1/csr-initiatives?category=environment HTTP/1.1
Host: localhost:8000
Accept: application/json
```

#### استجابة ناجحة (Response 200 OK):
```json
{
  "data": [
    {
      "id": 1,
      "slug": "coastal-cleaning-sustainability-campaign",
      "title_ar": "حملة استدامة وتنظيف السواحل",
      "title_en": "Coastal Clean-up & Sustainability Campaign",
      "brief_ar": "مبادرة بيئية تهدف إلى تنظيف الشواطئ ونشر الوعي البيئي بالتعاون مع المجتمع.",
      "brief_en": "An environmental initiative aimed at cleaning beaches and building awareness.",
      "main_image": "storage/csr/coastal-cleanup.jpg",
      "category": "environment",
      "status_ar": "منجزة",
      "status_en": "Completed",
      "execution_year": 2024
    }
  ]
}
```

---

### 8. تفاصيل المبادرة المجتمعية (Single CSR Initiative)

- **المسار:** `GET /csr-initiatives/{slug}`
- **الوصف:** يُرجع المحتوى التفصيلي للمبادرة والهدف منها وصور التوثيق.

#### مثال طلب (Request):
```http
GET /api/v1/csr-initiatives/coastal-cleaning-sustainability-campaign HTTP/1.1
Host: localhost:8000
Accept: application/json
```

#### استجابة ناجحة (Response 200 OK):
```json
{
  "data": {
    "id": 1,
    "slug": "coastal-cleaning-sustainability-campaign",
    "title_ar": "حملة استدامة وتنظيف السواحل",
    "title_en": "Coastal Clean-up & Sustainability Campaign",
    "content_ar": "<p>شملت المبادرة رفع مخلفات وتوعية أسر الصيادين والشواطئ السياحية في المكلا...</p>",
    "content_en": "<p>The campaign covered waste removal and community awareness in Mukalla...</p>",
    "main_image": "storage/csr/coastal-cleanup.jpg",
    "category": "environment",
    "status_ar": "منجزة",
    "status_en": "Completed",
    "execution_year": 2024
  }
}
```

---

### 9. شبكة الفروع والصرافات الآلية (Bank Locations & ATMs)

- **المسار:** `GET /locations`
- **الوصف:** يُرجع كافة الفروع والصرافات الآلية للبنك متضمنة الإحداثيات الجغرافية (`latitude`, `longitude`) لخرائط Google وأوقات الدوام والخدمات.

#### برامترات الاستعلام (Query Parameters):
| البرامتر | النوع | القيم المتاحة | الوصف |
| :--- | :--- | :--- | :--- |
| `type` | String | `branch`, `atm` | التصفية حسب نوع المقر (فرع أو صراف آلي) |
| `city` | String | (مثال: `المكلا` أو `Mukalla`) | التصفية حسب المدينة |

#### مثال طلب (Request):
```http
GET /api/v1/locations?type=branch HTTP/1.1
Host: localhost:8000
Accept: application/json
```

#### استجابة ناجحة (Response 200 OK):
```json
{
  "data": [
    {
      "id": "branch-1",
      "name_ar": "الفرع الرئيسي - جول مسحه",
      "name_en": "Main Branch - Jawl Mas-hah",
      "type": "branch",
      "city_ar": "المكلا",
      "city_en": "Mukalla",
      "district_ar": "جول مسحة",
      "district_en": "Jawl Mas-hah",
      "address_ar": "جول مسحة، المكلا، حضرموت",
      "address_en": "Jawl Mas-hah, Mukalla, Hadhramaut",
      "latitude": 14.5819925,
      "longitude": 49.1769996,
      "phone": "+967 5 300 0018",
      "working_hours": {
        "ar": "السبت – الخميس: 8:00 ص – 3:00 م",
        "en": "Sat – Thu: 8:00 AM – 3:00 PM"
      },
      "services": [
        { "ar": "صراف آلي", "en": "ATM" },
        { "ar": "فتح حسابات", "en": "Account Opening" },
        { "ar": "تحويلات سريعة", "en": "Express Money Transfer" }
      ]
    }
  ]
}
```

---

### 10. الشركاء والشبكات المصرفية (Bank Partners)

- **المسار:** `GET /partners`
- **الوصف:** يُرجع قائمة الشركاء والشبكات المالية والبنوك المراسلة المعتمدة للبنك.

#### برامترات الاستعلام (Query Parameters):
| البرامتر | النوع | القيم المتاحة | الوصف |
| :--- | :--- | :--- | :--- |
| `type` | String | `local`, `international`, `corresponding_bank` | التصفية حسب نوع الشريك |

#### مثال طلب (Request):
```http
GET /api/v1/partners?type=corresponding_bank HTTP/1.1
Host: localhost:8000
Accept: application/json
```

#### استجابة ناجحة (Response 200 OK):
```json
{
  "data": [
    {
      "id": 1,
      "name": "موني جرام العالمية",
      "logo_path": "storage/partners/moneygram.png",
      "partner_type": "international",
      "website_url": "https://moneygram.com",
      "order_index": 1
    }
  ]
}
```

---

### 11. قائمة الوظائف الشاغرة (Job Vacancies)

- **المسار:** `GET /jobs`
- **الوصف:** يُرجع جميع الوظائف الشاغرة النشطة والتي ما زالت في فترة التقديم.

#### برامترات الاستعلام (Query Parameters):
| البرامتر | النوع | مثال | الوصف |
| :--- | :--- | :--- | :--- |
| `department` | String | `خدمة العملاء` | التصفية حسب القسم أو المجال |

#### مثال طلب (Request):
```http
GET /api/v1/jobs HTTP/1.1
Host: localhost:8000
Accept: application/json
Accept-Language: ar
```

#### استجابة ناجحة (Response 200 OK):
```json
{
  "data": [
    {
      "id": 1,
      "title": "ممثل خدمة عملاء",
      "slug": "customer-service-representative",
      "location": "عدن، اليمن",
      "department": "خدمة العملاء",
      "employment_type": "دوام كامل",
      "application_start_date": "2026-08-01",
      "application_deadline": "2026-08-30",
      "application_email": "careers@bindowalbank.com",
      "responsibilities": [
        "استقبال العملاء والترحيب بهم وتقديم المساعدة اللازمة.",
        "الرد على استفسارات العملاء وشكاويهم بكفاءة وفعالية.",
        "تنفيذ المعاملات المصرفية بدقة وسرعة.",
        "ترويج خدمات ومنتجات البنك للعملاء."
      ],
      "qualifications": [
        "درجة البكالوريوس في إدارة الأعمال أو مجال ذي صلة.",
        "خبرة لا تقل عن سنتين في مجال خدمة العملاء.",
        "إجادة استخدام الحاسب الآلي وتطبيقات الأوفيس."
      ],
      "conditions": [
        "القدرة على العمل تحت الضغط.",
        "مهارات تواصل ممتازة.",
        "اللباقة وحسن المظهر.",
        "التفرغ التام للعمل."
      ],
      "description": "يسر بنك بن دول للتمويل الأصغر الإسلامي الإعلان عن فتح باب التقديم لوظيفة ممثل خدمة عملاء في الفرع الرئيسي لمدينة عدن.",
      "is_active": true,
      "views_count": 5
    }
  ]
}
```

---

### 12. تفاصيل وظيفة محددة (Single Job Vacancy Details)

- **المسار:** `GET /jobs/{slug}`
- **الوصف:** يُرجع التفاصيل الكاملة للوظيفة المحددة ويقوم بزيادة عداد المشاهدات تلقائياً.

#### مثال طلب (Request):
```http
GET /api/v1/jobs/customer-service-representative HTTP/1.1
Host: localhost:8000
Accept: application/json
Accept-Language: ar
```

#### استجابة ناجحة (Response 200 OK):
```json
{
  "data": {
    "id": 1,
    "title": "ممثل خدمة عملاء",
    "title_ar": "ممثل خدمة عملاء",
    "title_en": "Customer Service Representative",
    "slug": "customer-service-representative",
    "location": "عدن، اليمن",
    "location_ar": "عدن، اليمن",
    "location_en": "Aden, Yemen",
    "department": "خدمة العملاء",
    "department_ar": "خدمة العملاء",
    "department_en": "Customer Service",
    "employment_type": "دوام كامل",
    "application_start_date": "2026-08-01",
    "application_deadline": "2026-08-30",
    "application_email": "careers@bindowalbank.com",
    "responsibilities": [
      "استقبال العملاء والترحيب بهم وتقديم المساعدة اللازمة.",
      "الرد على استفسارات العملاء وشكاويهم بكفاءة وفعالية.",
      "تنفيذ المعاملات المصرفية بدقة وسرعة.",
      "ترويج خدمات ومنتجات البنك للعملاء."
    ],
    "qualifications": [
      "درجة البكالوريوس في إدارة الأعمال أو مجال ذي صلة.",
      "خبرة لا تقل عن سنتين في مجال خدمة العملاء.",
      "إجادة استخدام الحاسب الآلي وتطبيقات الأوفيس."
    ],
    "conditions": [
      "القدرة على العمل تحت الضغط.",
      "مهارات تواصل ممتازة.",
      "اللباقة وحسن المظهر.",
      "التفرغ التام للعمل."
    ],
    "description": "يسر بنك بن دول للتمويل الأصغر الإسلامي الإعلان عن فتح باب التقديم لوظيفة ممثل خدمة عملاء في الفرع الرئيسي لمدينة عدن.",
    "is_active": true,
    "views_count": 6
  }
}
```

---

## 🛑 أكواد الأخطاء المتوقعة (HTTP Error Codes)

| الكود / Status | السبب / Meaning | نمط الاستجابة |
| :-: | :--- | :--- |
| **`404 Not Found`** | المورد أو العنصر غير موجود | `{"message": "المورد المطلوب غير موجود."}` |
| **`422 Unprocessable`** | فشل في التحقق من البيانات | `{"message": "البيانات الممررة غير صالحة", "errors": {...}}` |
| **`500 Server Error`** | خطأ داخلي في السيرفر | `{"message": "حدث خطأ غير متوقع في النظام."}` |
