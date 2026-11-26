/* ============================================
   I18N.JS — English / Arabic switch
   English is written in the HTML. Arabic comes from the table below.
   The choice is saved in localStorage ("zp_lang"). Project screenshots follow the language:
   English page -> *-en.jpg, Arabic page -> the Arabic-interface screenshots.
============================================ */
(function () {
  var AR = {
    /* ADDED-TOUR-START */
    "Send message":"إرسال الرسالة",
    "Sending...":"جارٍ الإرسال...",
    "Your message goes straight to my inbox.":"رسالتك بتوصل مباشرة لإيميلي.",
    "Message sent. Thank you, I will reply soon.":"الرسالة اتبعتت. شكراً ليك، هرد عليك قريب.",
    "Could not send the message. Please try again, or email me directly.":"معرفناش نبعت الرسالة. ممكن تحاول تاني، أو تراسلني على الإيميل مباشرة.",
    "On the phone":"على الموبايل",
    "The rest of the":"باقي",
    "screens":"الشاشات",
    "A quick tour":"جولة سريعة",
    "From the first screen to":"من أول شاشة لحد",
    "the full project":"المشروع كامل",
    "Home page":"الصفحة الرئيسية",
    "Project details":"تفاصيل المشروع",
    "Home page on a phone":"الصفحة الرئيسية على موبايل",
    "Projects on a phone":"المشاريع على موبايل",
    "Project details on a phone":"تفاصيل المشروع على موبايل",
    "@A quick tour of the site":"جولة سريعة في الموقع",
    /* ADDED-TOUR-END */
    /* ADDED-PROJECTS-START */
    "Learn programming line by line":"تعلّم البرمجة سطراً بسطر",
    "Satr is a programming-courses website in Arabic and English. A learner picks one of five tracks, opens its courses and lessons, and can try code straight away in a built-in playground without installing anything.":"سطر موقع كورسات برمجة بالعربي والإنجليزي. المتعلم يختار واحد من خمس مسارات، يفتح كورساته ودروسه، ويجرّب الكود فوراً في ساحة تجربة جوه الموقع من غير ما ينزّل أي حاجة.",
    "Five learning tracks: .NET, Java, Node.js, Python and C++":"خمس مسارات تعليمية: ‎.NET وJava وNode.js وPython وC++",
    "Course and lesson pages for every track":"صفحات كورسات ودروس لكل مسار",
    "Each lesson unlocks the next one, and progress is tracked":"كل درس بيفتح اللي بعده، والتقدم بيتحسب",
    "An in-browser code playground: write, run, see the output":"ساحة تجربة للكود في المتصفح: اكتب وشغّل وشوف النتيجة",
    "Arabic and English interface with a light and dark switch":"واجهة بالعربي والإنجليزي مع زر للوضع الفاتح والداكن",
    "Courses & education":"تعليم وكورسات",
    "← FitZone Gym":"FitZone Gym →",
    "Laffa →":"← Laffa",
    "Streetwear brand landing page":"صفحة هبوط لبراند ستريت وير",
    "A bold dark landing page for an Egyptian streetwear brand. It opens on the winter collection, then moves through a filterable product grid, a lookbook, customer opinions, discounts and a working cart.":"صفحة هبوط داكنة وجريئة لبراند ستريت وير مصري. بتبدأ بكوليكشن الشتا، وبعدها شبكة منتجات بفلتر وlookbook وآراء العملاء والخصومات وسلة شغالة.",
    "Hero for the new winter collection":"هيرو لكوليكشن الشتا الجديد",
    "Product grid with category filters: hoodies, tees, pants":"شبكة منتجات بفلتر: هوديز وتيشيرتات وبناطيل",
    "Add to cart with a live cart counter":"إضافة للسلة وعدّاد حي للسلة",
    "Lookbook, customer opinions and a discounts banner":"لوك بوك وآراء العملاء وبانر الخصومات",
    "Right-to-left Arabic layout built for phone and laptop":"تصميم عربي من اليمين لليسار للموبايل واللابتوب",
    "Landing pages":"صفحات هبوط",
    "Shops & e-commerce":"متاجر وتجارة إلكترونية",
    "← Satr":"Satr →",
    "Bab Halab →":"← Bab Halab",
    "Laffa · Project — Zaynab AbouTwylah":"Laffa · مشروع — Zaynab",
    "Syrian restaurant website":"موقع مطعم شامي",
    "A warm website for a Syrian restaurant. Deep green, Arabic calligraphy and arch-inspired shapes set the mood, then a menu you can filter by course leads to the brand story and an inquiry form.":"موقع دافئ لمطعم شامي. الأخضر العميق والخط العربي وأشكال الأقواس بتحط المزاج، وبعدها منيو بفلتر للأقسام وحكاية المكان ونموذج استفسار.",
    "Menu with filters: full table, main dishes, starters":"منيو بفلتر: السفرة كاملة وأطباق رئيسية ومقبلات",
    "Dish cards with short descriptions":"كروت أطباق بوصف قصير",
    "Brand story section with arch details":"قسم حكاية المكان بتفاصيل الأقواس",
    "Inquiry form for group and large orders":"نموذج استفسار للمناسبات والطلبات الكبيرة",
    "Deep green identity with Arabic typography":"هوية خضراء عميقة بخط عربي",
    "Food & cafés":"مطاعم وكافيهات",
    "← Laffa":"Laffa →",
    "Smile Care →":"← Smile Care",
    "Bab Halab · Project — Zaynab AbouTwylah":"Bab Halab · مشروع — Zaynab",
    "Dental clinic landing page":"صفحة هبوط لعيادة أسنان",
    "A clean, trustworthy landing page for a dental clinic. Patients see the services, the doctors and the common questions in one scroll, with a booking call to action always within reach.":"صفحة هبوط نضيفة وتديك ثقة لعيادة أسنان. المريض يشوف الخدمات والدكاترة والأسئلة الشائعة في سكرول واحد، وزر الحجز دايماً قدامه.",
    "Hero with working hours and a clear booking button":"هيرو بمواعيد العمل وزر حجز واضح",
    "Services grid for cleaning, whitening and more":"شبكة خدمات: تنظيف وتبييض وغيرها",
    "Doctor profiles and a why-us section":"بروفايلات الدكاترة وقسم ليه إحنا",
    "FAQ accordion":"أسئلة شائعة بتتفتح وتتقفل",
    "Booking form, in a calm blue and white style":"نموذج حجز بتصميم أزرق وأبيض هادي",
    "Business & services":"أعمال وخدمات",
    "← Bab Halab":"Bab Halab →",
    "Manhal →":"← Manhal",
    "Smile Care · Project — Zaynab AbouTwylah":"Smile Care · مشروع — Zaynab",
    "Online courses platform":"منصة كورسات أونلاين",
    "Manhal is an Arabic and English courses marketplace for programming, design, marketing, languages and business. Visitors search, browse by category, compare courses, and open a course page that lays out what they will learn.":"منهل سوق كورسات بالعربي والإنجليزي للبرمجة والتصميم والتسويق واللغات والبيزنس. الزائر يبحث ويتصفح حسب التصنيف ويقارن الكورسات ويفتح صفحة الكورس ويشوف هيتعلم إيه.",
    "Search with popular topics, plus seven category cards":"بحث مع كلمات شائعة وسبع كروت تصنيفات",
    "Course cards with instructor, level, price and lesson count":"كروت كورسات فيها المدرب والمستوى والسعر وعدد الدروس",
    "Course page with what you will learn and the course content":"صفحة كورس فيها هتتعلم إيه ومحتوى الكورس",
    "Step-by-step explanation of how the platform works":"شرح خطوة بخطوة لإزاي بتشتغل المنصة",
    "Arabic and English, light and dark mode":"عربي وإنجليزي ووضع فاتح وداكن",
    "← Smile Care":"Smile Care →",
    "Rayhan →":"← Rayhan",
    "Plant-based skincare store":"متجر عناية نباتية بالبشرة",
    "A calm skincare store with a clear promise: plain ingredients, short routines and no exaggerated claims. Shoppers browse the collection, add products to a bag and follow a morning and evening routine.":"متجر عناية بالبشرة بوعد واضح: مكونات مفهومة وروتين قصير ومن غير وعود مبالغ فيها. الزائر يتصفح المجموعة ويضيف للحقيبة ويتابع روتين الصباح والمساء.",
    "Collection of nine products with a shopping bag":"مجموعة من تسع منتجات وحقيبة تسوّق",
    "Morning and evening routine steps":"خطوات روتين الصباح والمساء",
    "Ingredients and story pages":"صفحات المكونات والقصة",
    "Arabic and English with a theme switch":"عربي وإنجليزي مع زر للثيم",
    "Soft botanical look with clear product cards":"شكل نباتي هادي وكروت منتجات واضحة",
    "← Manhal":"Manhal →",
    "Salma Anwar →":"← Salma Anwar",
    "Rayhan · Project — Zaynab AbouTwylah":"Rayhan · مشروع — Zaynab",
    "Graphic designer portfolio":"بورتفوليو مصممة جرافيك",
    "A bold portfolio site for a graphic and brand designer. A strong orange and black hero leads into a selected-work list, an about section and a contact call to action.":"موقع بورتفوليو جريء لمصممة جرافيك وهوية بصرية. هيرو برتقالي وأسود قوي بيوصّل لقايمة أعمال مختارة وقسم عنّي ودعوة للتواصل.",
    "Hero with a clear promise and call to action":"هيرو بوعد واضح وزر تواصل",
    "Selected work list with year, title and short description":"قايمة أعمال مختارة بالسنة والعنوان ووصف قصير",
    "Work categories: identity, posters, editorial, packaging, UI, social":"تصنيفات الأعمال: هوية وملصقات وتحريري وتغليف وواجهات وسوشيال",
    "About and contact sections":"قسم عنّي وقسم تواصل",
    "Fully responsive, mobile first":"متجاوب بالكامل وبيبدأ من الموبايل",
    "Portfolios & personal":"معارض أعمال وصفحات شخصية",
    "← Rayhan":"Rayhan →",
    "Madar →":"← Madar",
    "Salma Anwar · Project — Zaynab AbouTwylah":"Salma Anwar · مشروع — Zaynab",
    "Fitness club website":"موقع نادي تدريب",
    "A high-energy black and lime website for a training club. It splits training into strength, conditioning and mobility, shows a weekly class schedule, and ends with an inquiry form.":"موقع نادي تدريب بأسود وليموني مليان طاقة. بيقسّم التمرين لبناء قوة ولياقة ومرونة، ويعرض جدول حصص أسبوعي، وبينتهي بنموذج استفسار.",
    "Three training programs: strength, conditioning, mobility":"ثلاث برامج: بناء القوة واللياقة والمرونة",
    "Weekly class schedule with days and times":"جدول حصص أسبوعي بالأيام والمواعيد",
    "Bold hero headline and a strip of keywords":"عنوان هيرو جريء وشريط كلمات",
    "Inquiry form with a training goal choice":"نموذج استفسار فيه اختيار هدف التدريب",
    "Black and lime identity":"هوية سوداء وليموني",
    "← Salma Anwar":"Salma Anwar →",
    "Fasli →":"← Fasli",
    "Madar · Project — Zaynab AbouTwylah":"Madar · مشروع — Zaynab",
    "Student learning platform":"منصة تعليمية للطلاب",
    "Fasli is a student platform in Arabic and English. Students pick their grade, sign in and follow video lessons with a summary for each one, in a warm, friendly design made for younger users.":"فصلي منصة للطلاب بالعربي والإنجليزي. الطالب يختار صفّه ويدخل بحسابه ويتابع دروس الفيديو مع ملخص لكل درس، بتصميم دافئ وقريب من الأطفال.",
    "Nine school grades across primary, preparatory and secondary":"تسع صفوف دراسية في الابتدائي والإعدادي والثانوي",
    "Video lessons with a short summary for each lesson":"دروس فيديو مع ملخص قصير لكل درس",
    "Progress is counted, and the next lesson opens when one is finished":"التقدم بيتحسب، والدرس التالي بيفتح لما يكتمل الحالي",
    "Student login":"تسجيل دخول للطالب",
    "Full Arabic and English interface with a night mode":"واجهة كاملة بالعربي والإنجليزي مع وضع ليلي",
    "← Madar":"Madar →",
    "Dawra →":"← Dawra",
    "Pizza restaurant website":"موقع مطعم بيتزا",
    "A playful pizza club website with a checkerboard design and a friendly voice. Visitors read the menu, add pizzas and change the quantity in a basket that updates the total live.":"موقع نادي بيتزا مرح بتصميم شطرنج ونبرة قريبة. الزائر يشوف المنيو ويضيف البيتزا ويغيّر الكمية في سلة بتحدّث الإجمالي على طول.",
    "Menu with prices in Egyptian pounds":"منيو بأسعار بالجنيه المصري",
    "Add to basket with quantity controls":"إضافة للسلة مع التحكم في الكمية",
    "Basket total that updates live":"إجمالي السلة بيتحدّث لحظياً",
    "Dough story and the three steps behind it":"حكاية العجينة والخطوات اللي وراها",
    "Bright red and cream checkerboard style":"تصميم شطرنج أحمر وكريمي",
    "← Fasli":"Fasli →",
    "Hayn →":"← Hayn",
    "Dawra · Project — Zaynab AbouTwylah":"Dawra · مشروع — Zaynab",
    "Furniture and home decor":"أثاث وديكور منزلي",
    "A quiet landing page for a furniture and decor brand. Large room photography comes first, the details follow, and a consultation form invites visitors to start with one corner of their space.":"صفحة هبوط هادية لبراند أثاث وديكور. صور الغرف الكبيرة الأول، والتفاصيل بعدها، ونموذج استشارة بيدعو الزائر يبدأ من ركن واحد في بيته.",
    "Collection section with room-based browsing":"قسم المجموعة بتصفح حسب المساحة",
    "A philosophy section in calm editorial typography":"قسم فلسفة العلامة بتايبوغرافي هادي",
    "Warm neutral palette and wood tones":"ألوان محايدة دافئة ولمسات خشب",
    "Consultation form":"نموذج طلب استشارة",
    "Image credits page":"صفحة مصادر الصور",
    "← Dawra":"Dawra →",
    "BlueSky Airways →":"← BlueSky Airways",
    "Hayn · Project — Zaynab AbouTwylah":"Hayn · مشروع — Zaynab",
    "Flight booking website":"موقع حجز طيران",
    "BlueSky Airways is a flight booking website built with Bootstrap and TypeScript. The home page puts a quick flight search, a weather widget, a calendar and the latest offers up front, and a step-by-step booking page follows.":"بلو سكاي موقع حجز طيران مبني بـBootstrap وTypeScript. الصفحة الرئيسية فيها بحث سريع عن الرحلات وويدجت طقس وتقويم وأحدث العروض، وبعدها صفحة حجز خطوة بخطوة.",
    "Quick flight search by date and number of passengers":"بحث سريع عن الرحلات بالتاريخ وعدد الركاب",
    "Weather widget and calendar on the home page":"ويدجت طقس وتقويم في الصفحة الرئيسية",
    "Latest trips and special offers for popular destinations":"أحدث الرحلات والعروض للوجهات الشهيرة",
    "Step-by-step booking page":"صفحة حجز خطوة بخطوة",
    "About, contact and login pages":"صفحات عن الشركة وتواصل وتسجيل دخول",
    "← Hayn":"Hayn →",
    "Daw →":"← Daw",
    "Photographer visual stories":"حكايات بصرية لمصوّر",
    "A cinematic landing page for a photographer. Frames fill the screen, a gallery opens full size on click, and a project form asks what story the visitor wants to tell.":"صفحة هبوط سينمائية لمصوّر. الصور بتملا الشاشة، والمعرض بيتفتح بالحجم الكامل بالضغط، ونموذج مشروع بيسأل الزائر عايز يحكي إيه.",
    "Editorial hero with a big headline":"هيرو تحريري بعنوان كبير",
    "Photo gallery with click-to-enlarge":"معرض صور بتكبير بالضغط",
    "Three photography directions: editorial, places, personal stories":"ثلاث اتجاهات تصوير: تحريري وأماكن وحكايات شخصية",
    "Project inquiry form":"نموذج استفسار عن مشروع",
    "Image sources and licenses page":"صفحة مصادر الصور والتراخيص",
    "← BlueSky Airways":"BlueSky Airways →",
    "Khuzana →":"← Khuzana",
    "Daw · Project — Zaynab AbouTwylah":"Daw · مشروع — Zaynab",
    "Women's fashion online store":"متجر أزياء نسائي أونلاين",
    "Khuzana is a women's fashion store front end in Arabic and English. Clothes, bags and shoes sit in one editorial design language, with a lookbook, product pages and a cart.":"خُزانة واجهة متجر أزياء نسائي بالعربي والإنجليزي. ملابس وشنط وأحذية بلغة تصميم واحدة، مع لوك بوك وصفحات منتجات وسلة.",
    "Category pages for clothes, bags and shoes with filters and price sorting":"صفحات أقسام للملابس والشنط والأحذية بفلاتر وترتيب بالسعر",
    "New arrivals and best sellers sections":"أقسام وصل حديثاً والأكثر طلباً",
    "Product page with size and quantity, and add to cart":"صفحة منتج بالمقاس والكمية وإضافة للسلة",
    "Lookbook and our-story pages":"لوك بوك وصفحة حكايتنا",
    "← Daw":"Daw →",
    "El-Dekka Café →":"← El-Dekka Café",
    "Specialty coffee landing page":"صفحة هبوط لكافيه قهوة مختصة",
    "A warm landing page for a specialty coffee shop. It tells the roasting story, shows an interactive menu, collects customer opinions and ends with a table booking form.":"صفحة هبوط دافئة لكافيه قهوة مختصة. بتحكي قصة التحميص، وتعرض منيو تفاعلي، وتجمع آراء الزباين، وتنتهي بنموذج حجز ترابيزة.",
    "Story section: weekly roasting at the café":"قسم الحكاية: تحميص أسبوعي في الكافيه",
    "Interactive menu with categories":"منيو تفاعلي بأقسام",
    "Why-us points and customer opinions":"نقاط ليه إحنا وآراء الروّاد",
    "Table booking form":"نموذج حجز ترابيزة",
    "Coffee-brown palette with warm photography":"ألوان بنية قهوة وصور دافئة",
    "← Khuzana":"Khuzana →",
    "Rawafed School →":"← Rawafed School",
    "El-Dekka Café · Project — Zaynab AbouTwylah":"El-Dekka Café · مشروع — Zaynab",
    "Multi-page school website":"موقع مدرسة متعدد الصفحات",
    "A full school website from kindergarten to secondary school, in Arabic and English. Parents move between the school story, the four stages, activities, teachers, news and the admission steps.":"موقع مدرسة كامل من الروضة للثانوية بالعربي والإنجليزي. أولياء الأمور بيتنقلوا بين قصة المدرسة والمراحل الأربع والأنشطة والمعلمين والأخبار وخطوات القبول.",
    "Home, about, stages, activities, teachers, news, admission and contact pages":"صفحات رئيسية وعن المدرسة والمراحل والأنشطة والمعلمين والأخبار والقبول وتواصل",
    "Admission steps with an apply-now call to action":"خطوات القبول وزر قدّم الآن",
    "Teacher profiles and a news section":"بروفايلات المعلمين وقسم أخبار",
    "Skip-to-content link and clear navigation":"رابط تخطي للمحتوى وتنقل واضح",
    "Arabic and English, built for phone and laptop":"عربي وإنجليزي للموبايل واللابتوب",
    "← El-Dekka Café":"El-Dekka Café →",
    "Ghosn →":"← Ghosn",
    "Rawafed School · Project — Zaynab AbouTwylah":"Rawafed School · مشروع — Zaynab",
    "Flower shop landing page":"صفحة هبوط لمتجر ورد",
    "A soft pink and olive landing page for a flower shop. Visitors browse bouquets by feeling or occasion and send a note about the colors and message they want.":"صفحة هبوط بالوردي والزيتي لمتجر ورد. الزائر يتصفح الباقات حسب الشعور أو المناسبة ويبعت ملاحظة بالألوان والرسالة اللي عايزها.",
    "Bouquet collections with filters by mood":"مجموعات باقات بفلتر حسب الإحساس",
    "Occasion-based browsing":"تصفح حسب المناسبة",
    "Design-your-bouquet request form":"نموذج صمّم باقتك",
    "Philosophy section in elegant Arabic typography":"قسم فلسفة بتايبوغرافي عربي أنيق",
    "Soft pink and olive palette":"ألوان وردي وزيتي ناعمة",
    "← Rawafed School":"Rawafed School →",
    "Forna →":"← Forna",
    "Ghosn · Project — Zaynab AbouTwylah":"Ghosn · مشروع — Zaynab",
    "Bakery website":"موقع مخبز",
    "A cheerful bakery website in yellow and red. It shows the day's bakes with a sweet and bread filter, explains the three steps behind each loaf and offers a box request for events.":"موقع مخبز مبهج بالأصفر والأحمر. بيعرض مخبوزات اليوم بفلتر حلو وخبز، ويشرح الخطوات التلاتة ورا كل رغيف، ويقدّم طلب صندوق للمناسبات.",
    "Bakery menu with sweet and bread filters":"منيو مخبوزات بفلتر حلو وخبز",
    "Three-step story: choose, wait, bake":"حكاية بتلات خطوات: نختار وننتظر ونخبز",
    "Event box request form":"نموذج طلب صندوق للمناسبات",
    "Big Arabic headline typography":"عناوين عربية كبيرة",
    "Yellow, red and cream styling":"تصميم أصفر وأحمر وكريمي",
    "← Ghosn":"Ghosn →",
    "Mawa →":"← Mawa",
    "Forna · Project — Zaynab AbouTwylah":"Forna · مشروع — Zaynab",
    "Countryside retreat website":"موقع إقامة ريفية",
    "A slow, quiet landing page for a countryside retreat. Cabin photography, three simple day moments and a stay planner for dates and guests set the pace.":"صفحة هبوط هادية لإقامة ريفية. صور الأكواخ وتلات لحظات بسيطة في اليوم ومخطط إقامة بالتواريخ وعدد الضيوف بيحطوا الإيقاع.",
    "Hero with a calm headline and cabin photography":"هيرو بعنوان هادي وصور أكواخ",
    "Three day-moment cards: morning, outing, evening":"ثلاث كروت للحظات اليوم: صباح ومشوار ومساء",
    "Stay planner with arrival, departure and guests":"مخطط إقامة بالوصول والمغادرة والضيوف",
    "Warm wood and green palette":"ألوان خشب وأخضر دافئة",
    "← Forna":"Forna →",
    "Nada →":"← Nada",
    "Mawa · Project — Zaynab AbouTwylah":"Mawa · مشروع — Zaynab",
    "Skincare brand landing page":"صفحة هبوط لبراند عناية",
    "A gentle skincare landing page in soft peach and sage. Visitors pick morning or evening and see the order of care steps, then explore the products on the shelf.":"صفحة هبوط هادية لعناية بالبشرة بالخوخي والأخضر الفاتح. الزائر يختار الصباح أو قبل النوم ويشوف ترتيب خطوات العناية، وبعدها يتصفح المنتجات.",
    "Routine picker: morning or before sleep":"اختيار الروتين: صباح أو قبل النوم",
    "Care steps shown in order":"خطوات العناية بالترتيب",
    "Product detail cards":"كروت تفاصيل المنتجات",
    "Brand philosophy section":"قسم فلسفة العلامة",
    "Soft peach and sage palette":"ألوان خوخي وأخضر فاتح ناعمة",
    "← Mawa":"Mawa →",
    "Masahati →":"← Masahati",
    "Nada · Project — Zaynab AbouTwylah":"Nada · مشروع — Zaynab",
    "Customizable personal page":"صفحة شخصية قابلة للتخصيص",
    "Masahati is a ready-made personal page that anyone can fill with their own details. It has a card layout with an intro, a links section and contact fields that are changed from one settings file without touching the design.":"مساحتي صفحة شخصية جاهزة أي حد يملاها ببياناته. فيها بطاقات: نبذة وروابط وخانات تواصل، وكلها بتتغيّر من ملف إعدادات واحد من غير ما التصميم يتغيّر.",
    "Card layout: about, links, contact":"تصميم بطاقات: نبذة وروابط وتواصل",
    "Contact fields for phone, email and WhatsApp":"خانات تواصل للهاتف والإيميل وواتساب",
    "Content edited from one settings file":"المحتوى بيتعدّل من ملف إعدادات واحد",
    "Photo placeholder that shows once a picture is added":"مكان للصورة بيظهر لما تضيف صورتك",
    "Clean light and lavender look":"شكل نضيف بفاتح ولافندر",
    "← Nada":"Nada →",
    "FitZone Gym →":"← FitZone Gym",
    "Masahati · Project — Zaynab AbouTwylah":"Masahati · مشروع — Zaynab",
    "Gym landing page":"صفحة هبوط لجيم",
    "A modern gym landing page with a light and dark mode switch. It presents classes, three membership plans, trainers, a gallery and a fitness calculator, with smooth transitions between sections.":"صفحة هبوط حديثة لجيم مع زر للوضع الفاتح والداكن. بتعرض الحصص وتلات باقات اشتراك والمدربين ومعرض صور وحاسبة لياقة، بانتقالات ناعمة بين الأقسام.",
    "Light and dark mode with a smooth toggle":"وضع فاتح وداكن بزر ناعم",
    "Services: weight training, cardio, personal training, yoga":"الخدمات: أوزان وكارديو وتدريب شخصي ويوجا",
    "Three membership plan cards":"ثلاث كروت لباقات الاشتراك",
    "Fitness calculator and contact form":"حاسبة لياقة ونموذج تواصل",
    "Responsive on every screen size":"متجاوب مع كل أحجام الشاشات",
    "← Masahati":"Masahati →",
    "Satr →":"← Satr",
    "FitZone Gym · Project — Zaynab AbouTwylah":"FitZone Gym · مشروع — Zaynab",
    "All":"الكل",
    "Project types":"أنواع المشاريع",
    "At a glance":"نظرة سريعة",
    "Type":"النوع",
    "Language":"اللغة",
    "No projects in this type yet.":"مفيش مشاريع من النوع ده لسه.",
    "Arabic (right-to-left)":"عربي (من اليمين لليسار)",
    "Arabic and English":"عربي وإنجليزي",
    "English":"إنجليزي",
    "Home":"الرئيسية",
    "Highlights":"أبرز النقاط",
    "Details":"التفاصيل",
    "Contact":"تواصل",
    "Filter by type, then flip through each project on a laptop and on a phone, open its details, or visit the live site.":"فلتر حسب النوع، وبعدها قلّب في كل مشروع على لابتوب وعلى موبايل، افتح تفاصيله، أو زور الموقع الحي.",
    /* ADDED-PROJECTS-END */
    "Home":"الرئيسية","Projects":"المشاريع","Experience":"الخبرات","Skills":"المهارات","Certificates":"الشهادات","Blog":"المدونة","Contact":"تواصل","Me":"معي",".NET":"\u2066.NET\u2069","My":"",
    "Hi, I'm":"أهلاً، أنا","Full Stack":"مطوّرة","Developer":"Full Stack",
    "Some ideas start with a line of code. I build web interfaces and look for the small detail that makes the experience clearer and the use simpler.":"بعض الأفكار تبدأ بسطر كود. أبني واجهات ويب وأدوّر على التفصيلة الصغيرة اللي تخلّي التجربة أوضح والاستخدام أسهل.",
    "View My Work →":"شاهد أعمالي ←","Download CV":"تحميل السيرة الذاتية","Get in Touch":"تواصل معي","Explore my work":"استكشف أعمالي",
    "Featured work":"أعمال مختارة","Things I have":"مشاريع","built":"نفّذتها",
    "Learn programming line by line":"تعلّم البرمجة سطراً بسطر",
    "An Arabic and English platform for learning programming: courses by track and an in-browser playground.":"منصة بالعربي والإنجليزي لتعلّم البرمجة: كورسات حسب المسار وساحة تجربة للكود داخل المتصفح.",
    "View project →":"عرض المشروع ←","Online courses platform":"منصة كورسات أونلاين",
    "A general courses marketplace in Arabic and English: browse by category, open a course, see what you will learn.":"سوق كورسات عام بالعربي والإنجليزي: تصفّح حسب التصنيف، افتح الكورس، وشوف هتتعلم إيه.",
    "Women's fashion online store":"متجر أزياء نسائي أونلاين",
    "An Arabic and English fashion shop: clothes, bags, shoes, a lookbook, product pages and a cart.":"متجر أزياء بالعربي والإنجليزي: ملابس وشنط وأحذية ولوك بوك وصفحات منتجات وسلة.",
    "Student learning platform":"منصة تعليمية للطلاب",
    "A bilingual platform (Arabic and English) with classes by grade, lessons and a student login.":"منصة بلغتين (عربي وإنجليزي) فيها فصول حسب الصف ودروس وتسجيل دخول للطالب.",
    "See all projects →":"شاهد كل المشاريع ←","Trained at":"تدرّبت في","Experience & certificates →":"الخبرات والشهادات ←",
    "© 2026 Zaynab AbouTwylah · Full Stack .NET Developer":"© 2026 Zaynab AbouTwylah · مطوّرة Full Stack .NET",
    "Got an idea?":"عندك فكرة؟",
    "Let's turn it into something":"خلّينا نحوّلها لحاجة",
    "people can use":"الناس تستخدمها فعلاً",
    "Tell me what you want to build, who it is for, and what it should help them do. I will answer with questions, a plan, and a clear first step.":"احكيلي إنت عايز تبني إيه، لمين، وإيه اللي المفروض يساعدهم فيه. هرد عليك بأسئلة وخطة وأول خطوة واضحة.",
    "Tell me about your idea →":"احكيلي عن فكرتك ←",
    "Keep exploring":"كمّل استكشاف",
    "There is more":"فيه أكتر",
    "behind the projects":"ورا المشاريع",
    "Training, step by step":"تدريب خطوة بخطوة",
    "DEPI .NET training, ITI and my studies at Assiut University.":"تدريب DEPI على .NET، وITI، ودراستي في جامعة أسيوط.",
    "What I work with":"اللي بشتغل بيه",
    "C#, ASP.NET Core, SQL Server, Angular, TypeScript and Flutter.":"C# وASP.NET Core وSQL Server وAngular وTypeScript وFlutter.",
    "See skills →":"شاهد المهارات ←",
    "Proof of the learning":"إثبات التعلّم",
    "Full Stack .NET, Angular, C++ OOP and clean code certificates.":"شهادات Full Stack .NET وAngular وبرمجة C++ كائنية التوجّه والكود النظيف.",
    "View certificates →":"شاهد الشهادات ←",
    "Notes from the journey":"ملاحظات من الرحلة",
    "What I learned at ITI, and when to pick a framework.":"اللي اتعلمته في ITI، وإمتى تختار فريمورك.",
    "Read articles →":"اقرأ المقالات ←",
    "Building clear, simple web experiences.":"بنبني تجارب ويب واضحة وبسيطة.",
    "Thanks for stopping by.":"شكراً إنك عدّيت علينا.",
    "Pop a bubble":"فرقع فقاعة",
    "@Start a project":"ابدأ مشروعاً",
    "@Explore more":"استكشف المزيد",
    "@Footer":"التذييل",
    "Freelancing track":"مسار العمل الحر","@Elharefa":"Elharefa","@Elharefa logo":"شعار Elharefa",
    "Full Stack .NET Developer":"مطوّرة Full Stack .NET",
    "Studying at":"بدرس في",
    "@See my education":"شاهد دراستي",
    "Thoughts & Articles":"أفكار ومقالات",
    "May 2025":"مايو 2025","April 2025":"أبريل 2025",
    "What I learned from my .NET internship at ITI":"اللي اتعلمته من تدريب .NET في ITI",
    "Three months of hands-on training changed how I think about software. Here's what stuck with me about clean code, APIs, and working in a team.":"ثلاث شهور من التدريب العملي غيّروا طريقة تفكيري في البرمجيات. دي أهم الحاجات اللي علقت معايا عن الكود النضيف والـ APIs والشغل في فريق.",
    "Read more →":"اقرأ المزيد ←",
    "Angular vs plain TypeScript — when to use a framework":"Angular مقابل TypeScript العادي: إمتى تستخدم الفريمورك",
    "After building projects in both, I have opinions. This is my honest comparison as a junior developer coming from a .NET background.":"بعد ما بنيت مشاريع بالاتنين، عندي رأي. دي مقارنتي الصريحة كمطوّرة مبتدئة جاية من خلفية .NET.",
    "Proof":"إثبات","certificates":"شهاداتي",
    "page. Tap a certificate to open it full size.":"اضغط على أي شهادة لفتحها بالحجم الكامل.",
    "Certificates from the programs and courses on the":"شهادات البرامج والكورسات الموجودة في صفحة",
    "Full Stack .NET Web Developer":"مطوّرة ويب Full Stack .NET","Digital Egypt Pioneers Program (DEPI)":"مبادرة رواد مصر الرقمية (DEPI)",
    "Full Stack Web Development using .NET":"تطوير ويب Full Stack باستخدام .NET","Information Technology Institute (ITI)":"معهد تكنولوجيا المعلومات (ITI)",
    "Web Development using Angular":"تطوير الويب باستخدام Angular","Learn Object Oriented Programming with C++":"تعلّم البرمجة الكائنية بلغة C++","Almentor":"المنتور",
    "The Principles of Writing Clean Code":"مبادئ كتابة الكود النضيف","ITI Platform (Mahara-Tech)":"منصة ITI (مهارة تك)",
    "Digital Egypt Pioneers Program (DEPI) · Nov 2025 – Jul 2026":"مبادرة رواد مصر الرقمية (DEPI) · نوفمبر 2025 – يوليو 2026",
    "Certificate of Achievement for completing and achieving core learning outcomes.":"شهادة إنجاز لإتمام التدريب وتحقيق مخرجات التعلم الأساسية.",
    "Open full size":"فتح بالحجم الكامل","See the training":"شاهد التدريب",
    "Information Technology Institute (ITI) · 6 Jul – 29 Jul 2025 · 120 hrs":"معهد تكنولوجيا المعلومات (ITI) · 6 يوليو – 29 يوليو 2025 · 120 ساعة",
    "SQL Server, Visual C#, ASP.NET MVC, Entity Framework and LINQ.":"SQL Server وVisual C# وASP.NET MVC وEntity Framework وLINQ.",
    "Information Technology Institute (ITI) · 3 Aug – 30 Aug 2025 · 120 hrs":"معهد تكنولوجيا المعلومات (ITI) · 3 أغسطس – 30 أغسطس 2025 · 120 ساعة",
    "Client-Side Technologies, ES.Next, HTML5, Bootstrap and Angular.":"تقنيات الواجهة الأمامية وES.Next وHTML5 وBootstrap وAngular.",
    "Almentor · 17 Jun 2025":"المنتور · 17 يونيو 2025","Certificate of Completion.":"شهادة إتمام.",
    "ITI Platform (Mahara-Tech) · 17 Jun 2025 · 1 hr 15 min":"منصة ITI (مهارة تك) · 17 يونيو 2025 · ساعة و15 دقيقة",
    "Get in touch":"ابقى على تواصل","Email":"البريد الإلكتروني","LinkedIn":"لينكدإن","GitHub":"جيت هب","Location":"الموقع","Assiut, Egypt":"أسيوط، مصر",
    "Name":"الاسم","Subject":"الموضوع","Message":"الرسالة","Open in my email app":"افتح في تطبيق البريد",
    "This opens your email app with the message ready. Press Send there.":"ده هيفتح تطبيق البريد عندك والرسالة جاهزة. اضغط إرسال من هناك.",
    "My path":"مساري","Where I":"فين","learned":"اتعلمت","and trained":"وتدرّبت",
    "Programs, internships and university. Each training is written once here; its certificate is on the":"برامج وتدريبات وجامعة. كل تدريب مكتوب هنا مرة واحدة، وشهادته في صفحة",
    "page and its tools are on":"وأدواته في صفحة","page.":".","page":"",
    "Digital Egypt Pioneers Initiative (DEPI), Ministry of Communications and Information Technology":"مبادرة رواد مصر الرقمية (DEPI)، وزارة الاتصالات وتكنولوجيا المعلومات",
    "Nov 2025 – Jul 2026 · Asyut, Egypt · Hybrid":"نوفمبر 2025 – يوليو 2026 · أسيوط، مصر · هجين",
    "Full-stack training covering ASP.NET Core, SQL Server, and Angular.":"تدريب Full Stack يغطي ASP.NET Core وSQL Server وAngular.",
    "Building real-world projects with RESTful APIs and modern front-end frameworks.":"بناء مشاريع حقيقية باستخدام RESTful APIs وفريمورك واجهات حديثة.",
    "Part of the program":"جزء من البرنامج","Business English Track, Round 4":"مسار اللغة الإنجليزية للأعمال، الدفعة 4","View certificate →":"عرض الشهادة ←",
    "Jul 2025 – Sep 2025 · 3 months of training":"يوليو 2025 – سبتمبر 2025 · 3 شهور تدريب",
    "Mobile App Development Training (Flutter)":"تدريب تطوير تطبيقات الموبايل (Flutter)","Sep 2025 · 1 mo · Asyut, Egypt":"سبتمبر 2025 · شهر · أسيوط، مصر",
    "Completed practical training in Flutter development, focusing on building cross-platform mobile applications. Gained hands-on experience with state management and UI design.":"أنهيت تدريباً عملياً في تطوير Flutter يركّز على بناء تطبيقات موبايل لأكثر من منصة، واكتسبت خبرة عملية في إدارة الحالة وتصميم الواجهات.",
    "Front-End Developer Intern (Angular)":"متدرّبة مطوّر واجهات أمامية (Angular)","Aug 2025 · 1 mo · Al Fayyum, Egypt":"أغسطس 2025 · شهر · الفيوم، مصر",
    "Completed intensive training in Front-End Development with Angular at ITI (120 hours): client-side technologies, ES.Next, HTML5, Bootstrap and Angular.":"أنهيت تدريباً مكثفاً في تطوير الواجهات الأمامية بـ Angular في ITI (120 ساعة): تقنيات الواجهة الأمامية وES.Next وHTML5 وBootstrap وAngular.",
    ".NET Developer Intern":"متدرّبة مطوّر .NET","Jul 2025 · 1 mo · Bur Sa'id, Egypt · Internship":"يوليو 2025 · شهر · بورسعيد، مصر · تدريب",
    "Completed hands-on training in .NET Web Development at ITI (120 hours): SQL Server, Visual C#, ASP.NET MVC, Entity Framework and LINQ.":"أنهيت تدريباً عملياً في تطوير ويب .NET في ITI (120 ساعة): SQL Server وVisual C# وASP.NET MVC وEntity Framework وLINQ.",
    "Assiut University":"جامعة أسيوط","Bachelor of Science, Computer Science · Faculty of Science":"بكالوريوس العلوم، علوم الحاسب · كلية العلوم",
    "Sep 2023 – May 2027 · Fourth Year":"سبتمبر 2023 – مايو 2027 · الفرقة الرابعة",
    "Databases":"قواعد البيانات","Networks":"الشبكات","Data Structures":"هياكل البيانات","Algorithms":"الخوارزميات",
    "Volunteer Award":"جائزة تطوع","Food and Agriculture (FA) Model, Port Said University · issued by FAO":"نموذج الأغذية والزراعة (FA)، جامعة بورسعيد · صادرة عن الفاو (FAO)",
    "Dec 2024":"ديسمبر 2024","Volunteering recognized for dedication to the Food and Agriculture (FA) Model.":"تقدير للتطوع على الالتزام في نموذج الأغذية والزراعة (FA).",
    "BlueSky Airways":"BlueSky Airways","Project":"مشروع","Flight booking website":"موقع حجز طيران","Laptop":"لابتوب","Phone":"موبايل",
    "About this project":"عن المشروع",
    "BlueSky Airways is a flight booking website built as a front-end project at ITI. It has a home page with a quick flight search, a step-by-step booking page, and about, contact and login pages.":"BlueSky Airways موقع لحجز الطيران اتبنى كمشروع واجهة أمامية في ITI. فيه صفحة رئيسية مع بحث سريع عن رحلات، وصفحة حجز خطوة بخطوة، وصفحات عن الموقع والتواصل وتسجيل الدخول.",
    "Technologies":"التقنيات","Live Demo →":"التجربة المباشرة ←","Live Demo":"التجربة المباشرة","Source Code":"الكود المصدري","What it includes":"محتوى المشروع",
    "Quick flight search on the home page":"بحث سريع عن الرحلات في الصفحة الرئيسية","Step-by-step booking page":"صفحة حجز خطوة بخطوة",
    "About, contact and login pages":"صفحات عن الموقع والتواصل وتسجيل الدخول","Responsive on phone and laptop":"متجاوب مع الموبايل واللابتوب",
    "← Fasli":"Fasli →","All projects":"كل المشاريع","Satr →":"← Satr","← Khuzana":"Khuzana →","BlueSky Airways →":"← BlueSky Airways",
    "← Manhal":"Manhal →","Fasli →":"← Fasli","← Satr":"Satr →","Khuzana →":"← Khuzana","← BlueSky Airways":"BlueSky Airways →","Manhal →":"← Manhal",
    "Booking":"الحجز","About":"عن الموقع","Class page":"صفحة الفصل","Login":"تسجيل الدخول","Clothes":"الملابس","Product page":"صفحة المنتج","Courses":"الكورسات","Course page":"صفحة الكورس","Playground":"ساحة التجربة",
    "Fasli is a student platform in Arabic and English. Students sign in, choose their grade, and open the class lessons for it. It switches between right-to-left Arabic and left-to-right English, and the look is warm and friendly for younger users.":"فصلي منصة للطلاب بالعربي والإنجليزي. الطالب يسجّل دخوله ويختار صفه ويفتح دروس الفصل. بتتحوّل بين العربي من اليمين لليسار والإنجليزي من اليسار لليمين، والشكل دافئ وودود للأصغر سناً.",
    "Classes organised by school grade":"فصول منظّمة حسب الصف الدراسي","Lesson pages and a student dashboard":"صفحات دروس ولوحة للطالب","Student login":"تسجيل دخول الطالب","Arabic (right-to-left) and English layouts":"تصميمان: عربي من اليمين لليسار وإنجليزي",
    "Khuzana (خُزانة) is a women's fashion store front end. It has category pages for clothes, bags and shoes, a lookbook, a product page with size choice, and a cart, all in a warm editorial look with Arabic and English.":"خُزانة (Khuzana) واجهة متجر أزياء نسائي. فيها صفحات أقسام للملابس والشنط والأحذية، ولوك بوك، وصفحة منتج مع اختيار المقاس، وسلة، بشكل مجلّات دافئ وبالعربي والإنجليزي.",
    "Category pages for clothes, bags and shoes, with filters and price sorting":"صفحات أقسام للملابس والشنط والأحذية مع فلاتر وترتيب بالسعر","Product page with size and quantity, and add to cart":"صفحة منتج بالمقاس والكمية وإضافة للسلة",
    "Lookbook and \"our story\" pages":"صفحات اللوك بوك و\"حكايتنا\"","Arabic and English, light and dark mode":"عربي وإنجليزي ووضع نهاري وليلي",
    "Manhal is an online learning platform in Arabic and English, in the style of a general courses marketplace. Visitors search and filter the catalog, then open a course page that lays out what they will learn and the course content.":"منهل منصة تعلّم أونلاين بالعربي والإنجليزي بأسلوب سوق كورسات عام. الزائر يبحث ويفلتر الكتالوج، ثم يفتح صفحة كورس توضّح هيتعلم إيه ومحتوى الكورس.",
    "Course catalog with search and category filters":"كتالوج كورسات مع بحث وفلاتر تصنيف","Course page with \"what you will learn\" and course content":"صفحة كورس فيها \"هتتعلم إيه\" ومحتوى الكورس","Clean, readable layout built for browsing many courses":"تصميم نظيف ومقروء مناسب لتصفّح كورسات كتير",
    "Satr is a programming-courses website in Arabic and English. A learner picks a track, opens its courses and lessons, and can try code straight away in a built-in playground without installing anything.":"سطر موقع كورسات برمجة بالعربي والإنجليزي. المتعلّم يختار مساراً ويفتح كورساته ودروسه، ويقدر يجرّب الكود فوراً في ساحة مدمجة من غير تثبيت أي حاجة.",
    "Learning tracks: .NET, Java, Node.js, Python and C++":"مسارات التعلّم: .NET وJava وNode.js وPython وC++","Course and lesson pages for each track":"صفحات كورسات ودروس لكل مسار",
    "An in-browser code playground (write, run, see the output)":"ساحة كود داخل المتصفح (اكتب، شغّل، شوف النتيجة)","Arabic and English interface":"واجهة بالعربي والإنجليزي",
    "My work":"أعمالي","projects":"مشاريعي","Each project is shown on a laptop and on a phone. Flip through its pages, open its details, or visit the live site.":"كل مشروع معروض على لابتوب وعلى موبايل. تنقّل بين صفحاته، افتح تفاصيله، أو زُر الموقع المباشر.",
    "View details →":"عرض التفاصيل ←","A responsive flight booking site with a booking flow, dynamic UI and clean UX.":"موقع حجز طيران متجاوب فيه رحلة حجز كاملة وواجهة ديناميكية وتجربة استخدام نظيفة.",
    "What I use":"اللي بستخدمه","skills":"مهاراتي",
    "The languages and tools behind my projects, grouped by what I build with them. Where each was learned is on the":"اللغات والأدوات اللي ورا مشاريعي، مجمّعة حسب اللي بعمله بيها. مكان تعلّم كل واحدة في صفحة",
    "Backend .NET":"Backend .NET","Web back ends in C# with a SQL Server database behind them.":"باك إند ويب بلغة C# وقاعدة بيانات SQL Server وراه.",
    "Frontend Web":"Frontend Web","Responsive interfaces built with Angular and plain web technologies.":"واجهات متجاوبة بـ Angular وتقنيات الويب العادية.",
    "Flutter Mobile":"Flutter Mobile","Cross-platform apps for Android and iOS.":"تطبيقات لأندرويد وiOS من كود واحد.",
    "UI / UX":"UI / UX","Designing the screen before coding it.":"تصميم الشاشة قبل برمجتها.","UI/UX Principles":"مبادئ UI/UX",
    "Programming Foundations":"أساسيات البرمجة","The university base under everything else.":"الأساس الجامعي تحت كل حاجة تانية.",
    "Tools & Teamwork":"الأدوات والعمل الجماعي","How I work day to day.":"إزاي بشتغل يومياً.","Teamwork":"العمل الجماعي",
    "@Open menu":"فتح القائمة","@Download my CV (PDF)":"تحميل سيرتي الذاتية (PDF)","@Selected programming projects":"مشاريع برمجة مختارة","@Featured projects":"مشاريع مختارة",
    "@Next Academy":"أكاديمية Next","@SYE English Community":"مجتمع SYE للإنجليزية","@Where I trained":"أماكن تدرّبت فيها","@See my experience and training":"شاهد خبراتي وتدريبي","@Your name":"اسمك","@your@email.com":"your@email.com","@What's this about?":"الموضوع إيه؟","@Write your message...":"اكتب رسالتك...",
    "@Previous certificate":"الشهادة السابقة","@Next certificate":"الشهادة التالية","@Previous page":"الصفحة السابقة","@Next page":"الصفحة التالية","@Breadcrumb":"مسار التنقل","@Device":"الجهاز",
    "@Home":"الرئيسية","@Booking":"الحجز","@About":"عن الموقع","@Class page":"صفحة الفصل","@Login":"تسجيل الدخول","@Clothes":"الملابس","@Product page":"صفحة المنتج","@Courses":"الكورسات","@Course page":"صفحة الكورس","@Playground":"ساحة التجربة",
    "Zaynab AbouTwylah — Full Stack .NET Developer":"Zaynab AbouTwylah — مطوّرة Full Stack .NET"
  };
  var TITLE = {"Blog":"المدونة","Contact":"تواصل","Certificates":"الشهادات","Experience":"الخبرات","Skills":"المهارات","Projects":"المشاريع","Project":"مشروع","2025 Portfolio":"بورتفوليو 2025"};
  var SPLIT = /^(Satr|Fasli|Manhal|Khuzana|BlueSky Airways)(?: Home| Class page| Login| Clothes| Product page| Courses| Course page| Playground| Booking| About)? on (laptop|phone)$/;
  var DICT_PAGES = {"Home":"الرئيسية","Class page":"صفحة الفصل","Login":"تسجيل الدخول","Clothes":"الملابس","Product page":"صفحة المنتج","Courses":"الكورسات","Course page":"صفحة الكورس","Playground":"ساحة التجربة","Booking":"الحجز","About":"عن الموقع"};
  function tr(k, isAttr) {
    if (isAttr && AR["@" + k] !== undefined) return AR["@" + k];
    if (AR[k] !== undefined) return AR[k];
    var m;
    if ((m = k.match(/^(Satr|Fasli|Manhal|Khuzana|BlueSky Airways) (.+) on (laptop|phone)$/))) {
      var pg = DICT_PAGES[m[2]] || m[2];
      return m[1] + " · " + pg + " · " + (m[3] === "laptop" ? "لابتوب" : "موبايل");
    }
    if ((m = k.match(/^(.+?) (Home|Highlights|Details|Contact) on (laptop|phone)$/))) return m[1] + " · " + ({Home:"الرئيسية",Highlights:"أبرز النقاط",Details:"التفاصيل",Contact:"تواصل"})[m[2]] + " · " + (m[3] === "laptop" ? "لابتوب" : "موبايل");
    if ((m = k.match(/^(.+): view project details$/))) return m[1] + ": عرض تفاصيل المشروع";
    if ((m = k.match(/^Go to certificate (\d+)$/))) return "اذهب للشهادة " + m[1];
    if ((m = k.match(/^Open (.+) full size$/))) return "فتح " + m[1] + " بالحجم الكامل";
    if ((m = k.match(/^(.+) logo$/))) return "شعار " + m[1];
    if ((m = k.match(/^(.+) — Zaynab(?:\.dev| AbouTwylah)$/)) && TITLE[m[1].replace(/ · Project$/, "")]) return (m[1].indexOf(" · Project") > -1 ? m[1].replace(" · Project", "") + " · مشروع" : TITLE[m[1]]) + " — Zaynab";
    return undefined;
  }
  var ATTRS = ["placeholder", "aria-label", "title", "alt", "data-cap"];
  var IMGRE = /((?:shots\/(?:satr|fasli|manhal|khuzana|tour)-\d-(?:desk|mob))|(?:(?:Satr|Fasli|Manhal|Khuzana)-cover))-en(\.jpg)$/;
  var lang = "en";
  try { lang = localStorage.getItem("zp_lang") === "ar" ? "ar" : "en"; } catch (e) {}
  var busy = false;

  function norm(s) { return s.replace(/\s+/g, " ").trim(); }
  function textNodes(root) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode && n.parentNode.nodeName;
        return (p === "SCRIPT" || p === "STYLE" || !n.nodeValue.trim()) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    var a = [], n; while ((n = w.nextNode())) a.push(n); return a;
  }
  function apply() {
    busy = true;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    textNodes(document.body).forEach(function (n) {
      if (n.__en === undefined) n.__en = n.nodeValue;
      else if (lang === "ar" && n.__lastAr !== n.nodeValue) n.__en = n.nodeValue; /* text changed by a script */
      if (lang === "ar") {
        var t = tr(norm(n.__en), false);
        if (t !== undefined) { var m = n.__en.match(/^(\s*)[\s\S]*?(\s*)$/); n.nodeValue = m[1] + t + m[2]; n.__lastAr = n.nodeValue; }
        else n.nodeValue = n.__en;
      } else n.nodeValue = n.__en;
    });
    document.querySelectorAll("[placeholder],[aria-label],[title],[alt],[data-cap]").forEach(function (el) {
      el.__a = el.__a || {};
      ATTRS.forEach(function (at) {
        if (!el.hasAttribute(at)) return;
        if (el.__a[at] === undefined) el.__a[at] = el.getAttribute(at);
        var t = lang === "ar" ? tr(norm(el.__a[at]), true) : undefined;
        el.setAttribute(at, t !== undefined ? t : el.__a[at]);
      });
    });
    document.querySelectorAll("img").forEach(function (im) {
      var s = im.getAttribute("src") || "";
      if (im.__enSrc === undefined) im.__enSrc = s;
      var want = (lang === "ar") ? im.__enSrc.replace(IMGRE, "$1$2") : im.__enSrc;
      if (want !== s) im.setAttribute("src", want);
    });
    if (document.__title === undefined) document.__title = document.title;
    document.title = lang === "ar" ? (tr(document.__title, true) || document.__title) : document.__title;
    document.querySelectorAll(".navbar__lang").forEach(function (b) { b.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.7 2.6 4 5.6 4 9s-1.3 6.4-4 9c-2.7-2.6-4-5.6-4-9s1.3-6.4 4-9z"/></svg>'; b.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية"); b.lang = lang === "ar" ? "en" : "ar"; });
    /* certificate / gallery captions are set by scripts; refresh them */
    document.querySelectorAll("[data-gallery]").forEach(function (g) {
      var cap = g.querySelector(".gal__cap"), on = g.querySelector(".gal__slide.is-on");
      if (cap && on) cap.textContent = on.getAttribute("data-cap");
    });
    setTimeout(function () { busy = false; }, 0);
  }
  function addButton() {
    var nav = document.querySelector(".navbar"); if (!nav || nav.querySelector(".navbar__lang")) return;
    var b = document.createElement("button"); b.type = "button"; b.className = "navbar__lang";
    var av = nav.querySelector(".navbar__avatar"); nav.insertBefore(b, nav.querySelector(".navbar__hamburger"));
    b.addEventListener("click", function () {
      lang = lang === "ar" ? "en" : "ar";
      try { localStorage.setItem("zp_lang", lang); } catch (e) {}
      apply();
    });
  }
  function init() {
    addButton(); apply();
    new MutationObserver(function () { if (busy || lang !== "ar") return; busy = true; setTimeout(apply, 30); }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
