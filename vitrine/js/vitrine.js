/* ======================================================
   SUNU TRAINING CENTER — Vitrine JS
   Gère : navigation, i18n (fr/ar), PWA install
   ====================================================== */

// ========== TRADUCTIONS ==========
const TRANSLATIONS = {
  fr: {
    // Nav
    nav_home: 'Accueil',
    nav_about: 'À Propos',
    nav_services: 'Services',
    nav_formations: 'Formations',
    nav_students: 'Étudiants',
    nav_partners: 'Partenaires',
    nav_contact: 'Contact',
    nav_login: 'Se connecter',
    nav_signup: 'Créer un compte',
    nav_dashboard: 'Mon espace',

    // Hero (index)
    hero_tag: 'Cabinet GRC · Dakar, Sénégal',
    hero_title_1: 'Les meilleurs talents',
    hero_title_2: 'au service de',
    hero_title_3: 'votre réussite',
    hero_sub: 'SUNU Training Center connecte les entreprises aux profils GRC les plus qualifiés du Sénégal et de l\'Afrique de l\'Ouest.',
    hero_btn_primary: 'Découvrir nos formations',
    hero_btn_secondary: 'Nous contacter',
    hero_card_title: 'Nos chiffres clés',
    hero_stat_1_label: 'Candidats formés',
    hero_stat_1_val: '500+',
    hero_stat_2_label: 'Entreprises partenaires',
    hero_stat_2_val: '30+',
    hero_stat_3_label: 'Taux de placement',
    hero_stat_3_val: '87%',
    hero_stat_4_label: 'Années d\'expérience',
    hero_stat_4_val: '5 ans',

    // Stats bar
    stat_1_val: '500+',
    stat_1_label: 'Candidats formés',
    stat_2_val: '30+',
    stat_2_label: 'Entreprises partenaires',
    stat_3_val: '87%',
    stat_3_label: 'Taux de placement',
    stat_4_val: '5 ans',
    stat_4_label: 'D\'expérience',

    // Sections index
    about_tag: 'Qui sommes-nous',
    about_title: 'Excellence en formation GRC',
    about_sub: 'SUNU Training Center est un cabinet de recrutement et de formation spécialisé en Gestion de la Relation Client, basé à Dakar.',
    about_btn: 'En savoir plus',

    services_tag: 'Nos Services',
    services_title: 'Trois formules adaptées à vos besoins',
    services_sub: 'Que vous soyez une entreprise à la recherche de profils qualifiés ou un candidat en quête d\'opportunités, nous avons la solution.',

    formations_tag: 'Nos Formations',
    formations_title: 'Formations pratiques et certifiantes',
    formations_sub: 'Des programmes conçus pour répondre aux besoins réels du marché sénégalais et africain.',
    formations_btn: 'Voir toutes les formations',
    btn_enroll: 'S\'inscrire',

    partners_tag: 'Nos Partenaires',
    partners_title: 'Ils nous font confiance',
    partners_sub: 'SUNU Training Center travaille avec les leaders des secteurs banques, télécoms et fintechs.',

    cta_title: 'Prêt à booster votre carrière ?',
    cta_sub: 'Rejoignez des centaines d\'étudiants et de professionnels qui ont déjà fait confiance à SUNU Training Center.',
    cta_btn_primary: 'Créer mon compte',
    cta_btn_secondary: 'Voir les formations',

    // À Propos
    about_page_tag: 'Notre histoire',
    about_page_title: 'À Propos de SUNU Training Center',
    about_page_sub: 'Un cabinet dédié à l\'excellence en formation et recrutement GRC en Afrique de l\'Ouest.',
    about_story_title: 'Notre histoire',
    about_story: 'SUNU Training Center a été fondé à Dakar avec une mission claire : connecter les meilleurs talents GRC aux entreprises qui en ont besoin. Né de la conviction que la relation client est le moteur de la croissance des entreprises africaines, notre cabinet a développé une méthodologie unique alliant formation pratique et placement professionnel.',
    about_mission_title: 'Notre Mission',
    about_mission: 'Former et placer les meilleurs talents en Gestion de la Relation Client pour accompagner la croissance des entreprises sénégalaises et africaines.',
    about_vision_title: 'Notre Vision',
    about_vision: 'Devenir le leader de la formation et du recrutement GRC en Afrique de l\'Ouest d\'ici 2030.',
    about_values_title: 'Nos Valeurs',
    val_excellence: 'Excellence',
    val_excellence_desc: 'Nous visons l\'excellence dans chaque formation et chaque placement.',
    val_integrity: 'Intégrité',
    val_integrity_desc: 'Transparence et honnêteté dans toutes nos relations professionnelles.',
    val_innovation: 'Innovation',
    val_innovation_desc: 'Des méthodes pédagogiques modernes adaptées au marché africain.',
    val_proximity: 'Proximité',
    val_proximity_desc: 'Un accompagnement personnalisé pour chaque candidat et entreprise.',
    team_title: 'Notre Équipe',
    team_founder: 'Fondateur & Directeur',
    team_coordinator: 'Coordinatrice Pédagogique',
    team_relations: 'Chargée des Relations Entreprises',

    // Services
    services_page_tag: 'Nos formules',
    services_page_title: 'Nos Services',
    services_page_sub: 'SUNU Training Center propose trois formules de recrutement adaptées à vos besoins.',
    s1_title: 'Intérim Expert',
    s1_desc: 'Des profils GRC qualifiés disponibles rapidement pour vos missions temporaires. Contrats flexibles de 1 à 12 mois.',
    s2_title: 'Management de Transition',
    s2_desc: 'Des managers expérimentés pour piloter vos équipes GRC pendant les périodes de transformation.',
    s3_title: 'Pré-embauche',
    s3_desc: 'Testez nos candidats pendant 3 mois avant de les recruter définitivement. Zéro risque.',
    process_title: 'Notre Processus',
    process_1: 'Analyse du besoin',
    process_1_desc: 'Nous étudions votre besoin et votre culture d\'entreprise.',
    process_2: 'Sélection',
    process_2_desc: 'Sélection rigoureuse sur tests techniques et comportementaux.',
    process_3: 'Présentation',
    process_3_desc: 'Nous vous présentons 3 profils qualifiés sous 72h.',
    process_4: 'Suivi',
    process_4_desc: 'Accompagnement pendant toute la durée de la mission.',
    advantages_title: 'Pourquoi choisir SUNU ?',
    adv_1: 'Formations pratiques et orientées résultats',
    adv_2: 'Formateurs expérimentés issus du terrain',
    adv_3: 'Adaptées au marché sénégalais et africain',
    adv_4: 'Attestation de formation reconnue',
    adv_5: 'Réseau de 30+ entreprises partenaires',
    adv_6: 'Suivi post-placement individualisé',

    // Formations
    formations_page_tag: 'Nos programmes',
    formations_page_title: 'Formations SUNU',
    formations_page_sub: 'Des formations certifiantes en Gestion de la Relation Client, adaptées au marché africain.',
    f1_title: 'Gestion de la Relation Client (GRC)',
    f1_desc: 'Maîtrisez les techniques de fidélisation client, de gestion des réclamations et d\'amélioration de l\'expérience client.',
    f1_dur: '4 semaines',
    f1_price: '150 000 F CFA',
    f2_title: 'GRC & Networking Professionnel',
    f2_desc: 'Développez votre réseau professionnel et maîtrisez les outils de communication stratégique en relation client.',
    f2_dur: '3 semaines',
    f2_price: '120 000 F CFA',
    f3_title: 'CRM & Outils Digitaux',
    f3_desc: 'Maîtrisez les logiciels CRM (Salesforce, HubSpot, Zoho) utilisés par les grandes entreprises africaines.',
    f3_dur: '3 semaines',
    f3_price: '130 000 F CFA',
    f4_title: 'Service Client & Communication',
    f4_desc: 'Techniques d\'accueil, gestion des conflits, communication verbale et non-verbale en centre d\'appels.',
    f4_dur: '2 semaines',
    f4_price: '90 000 F CFA',
    f5_title: 'Management d\'Équipe GRC',
    f5_desc: 'Devenez superviseur ou team leader : pilotage des KPIs, coaching d\'équipe, reporting.',
    f5_dur: '4 semaines',
    f5_price: '180 000 F CFA',
    f6_title: 'Bureautique & Outils CRM',
    f6_desc: 'Excel, Word, CRM courants et outils de reporting pour les métiers de la relation client.',
    f6_dur: '2 semaines',
    f6_price: '80 000 F CFA',
    duration_label: 'Durée',
    price_label: 'Tarif',
    level_label: 'Niveau',
    level_beginner: 'Débutant',
    level_intermediate: 'Intermédiaire',
    level_advanced: 'Avancé',

    // Étudiants
    students_page_tag: 'Espace Étudiants',
    students_page_title: 'Lancez votre carrière GRC',
    students_page_sub: 'Rejoignez la communauté SUNU et accédez aux meilleures opportunités en Gestion de la Relation Client.',
    how_title: 'Comment ça marche ?',
    step_1: 'Créez votre compte',
    step_1_desc: 'Inscrivez-vous gratuitement et complétez votre profil candidat en quelques minutes.',
    step_2: 'Choisissez une formation',
    step_2_desc: 'Sélectionnez la formation adaptée à votre niveau et vos objectifs professionnels.',
    step_3: 'Passez les tests',
    step_3_desc: 'Validez vos compétences avec nos tests techniques (orthographe, élocution, bureautique).',
    step_4: 'Trouvez un emploi',
    step_4_desc: 'Accédez aux offres exclusives de nos entreprises partenaires et décrochez votre poste.',
    testimonials_title: 'Ils ont réussi avec SUNU',
    benefits_title: 'Vos avantages',
    ben_1: 'Formations 100% pratiques',
    ben_1_desc: 'Des exercices basés sur des cas réels d\'entreprises sénégalaises.',
    ben_2: 'Accès aux offres d\'emploi',
    ben_2_desc: 'Offres exclusives de nos 30+ partenaires (banques, télécoms, fintechs).',
    ben_3: 'Certification reconnue',
    ben_3_desc: 'Une attestation de formation SUNU reconnue par les employeurs.',
    ben_4: 'Accompagnement personnalisé',
    ben_4_desc: 'Un conseiller dédié pour suivre votre progression et votre recherche d\'emploi.',
    cta_students_title: 'Prêt à commencer ?',
    cta_students_sub: 'Créez votre compte gratuitement et découvrez toutes les opportunités SUNU.',
    btn_create_account: 'Créer mon compte gratuit',
    btn_see_formations: 'Voir les formations',

    // Partenaires
    partners_page_tag: 'Espace Partenaires',
    partners_page_title: 'Nos Partenaires Entreprises',
    partners_page_sub: 'SUNU Training Center travaille avec les leaders des secteurs banques, télécoms et fintechs au Sénégal et en Afrique de l\'Ouest.',
    our_partners_title: 'Ils nous font confiance',
    become_partner_title: 'Devenir partenaire',
    become_partner_desc: 'Rejoignez notre réseau d\'entreprises et accédez à des profils GRC pré-qualifiés.',
    partner_benefit_1: 'Accès à des profils pré-sélectionnés et testés',
    partner_benefit_2: 'Processus de recrutement rapide (72h)',
    partner_benefit_3: 'Garantie de remplacement si insatisfaction',
    partner_benefit_4: 'Suivi et accompagnement post-placement',
    btn_contact_us: 'Nous contacter',
    partner_testimonials_title: 'Ce qu\'ils disent de nous',

    // Contact
    contact_page_tag: 'Contactez-nous',
    contact_page_title: 'Nous contacter',
    contact_page_sub: 'Une question, un projet de recrutement, une demande de formation ? Notre équipe répond sous 24h.',
    contact_form_title: 'Envoyez-nous un message',
    field_firstname: 'Prénom *',
    field_lastname: 'Nom *',
    field_email: 'Email *',
    field_phone: 'Téléphone',
    field_subject: 'Objet *',
    field_message: 'Votre message *',
    field_subject_placeholder: 'Choisissez un objet',
    subject_formation: 'Demande de formation',
    subject_recruitment: 'Recrutement',
    subject_partnership: 'Partenariat',
    subject_other: 'Autre',
    btn_send: 'Envoyer le message',
    contact_address_label: 'Adresse',
    contact_address_val: 'Sacré-Cœur 3, VDN, Dakar, Sénégal',
    contact_phone_label: 'Téléphone',
    contact_email_label: 'Email',
    contact_hours_label: 'Horaires',
    contact_hours_val: 'Lun–Ven : 8h–18h · Sam : 9h–13h',

    // Footer
    footer_tagline: 'Cabinet de recrutement et de formation spécialisé en Gestion de la Relation Client (GRC) à Dakar, Sénégal.',
    footer_nav: 'Navigation',
    footer_formations_col: 'Formations',
    footer_contact_col: 'Contact',
    footer_copyright: '© 2025 SUNU Training Center. Tous droits réservés.',
    footer_legal: 'Mentions légales',
    pwa_title: 'Installer l\'application',
    pwa_sub: 'Ajoutez SUNU à votre écran d\'accueil',
    pwa_install: 'Installer',
    pwa_dismiss: 'Plus tard',
  },

  ar: {
    // Nav
    nav_home: 'الرئيسية',
    nav_about: 'عن المركز',
    nav_services: 'خدماتنا',
    nav_formations: 'التدريب',
    nav_students: 'الطلاب',
    nav_partners: 'شركاؤنا',
    nav_contact: 'اتصل بنا',
    nav_login: 'تسجيل الدخول',
    nav_signup: 'إنشاء حساب',
    nav_dashboard: 'فضائي',

    hero_tag: 'مركز إدارة علاقات العملاء · داكار، السنغال',
    hero_title_1: 'أفضل المواهب',
    hero_title_2: 'في خدمة',
    hero_title_3: 'نجاحكم',
    hero_sub: 'يربط مركز سونو للتدريب الشركات بأفضل الكفاءات في إدارة علاقات العملاء في السنغال وغرب أفريقيا.',
    hero_btn_primary: 'اكتشف دوراتنا التدريبية',
    hero_btn_secondary: 'تواصل معنا',
    hero_card_title: 'أرقامنا الرئيسية',
    hero_stat_1_label: 'متدرب مؤهَّل',
    hero_stat_1_val: '+500',
    hero_stat_2_label: 'شركة شريكة',
    hero_stat_2_val: '+30',
    hero_stat_3_label: 'معدل التوظيف',
    hero_stat_3_val: '87%',
    hero_stat_4_label: 'سنوات خبرة',
    hero_stat_4_val: '5',

    stat_1_val: '+500',
    stat_1_label: 'متدرب مؤهَّل',
    stat_2_val: '+30',
    stat_2_label: 'شركة شريكة',
    stat_3_val: '87%',
    stat_3_label: 'معدل التوظيف',
    stat_4_val: '5',
    stat_4_label: 'سنوات خبرة',

    about_tag: 'من نحن',
    about_title: 'التميز في تدريب إدارة علاقات العملاء',
    about_sub: 'مركز سونو للتدريب مؤسسة متخصصة في تدريب وتوظيف كفاءات إدارة علاقات العملاء، مقرها داكار، السنغال.',
    about_btn: 'اعرف أكثر',

    services_tag: 'خدماتنا',
    services_title: 'ثلاثة حلول مخصصة لاحتياجاتكم',
    services_sub: 'سواء كنت شركة تبحث عن كفاءات مؤهلة أو مرشحاً يسعى لفرص عمل، لدينا الحل المناسب.',

    formations_tag: 'دوراتنا',
    formations_title: 'تدريب عملي ومعتمد',
    formations_sub: 'برامج مصممة لتلبية متطلبات سوق العمل السنغالي والأفريقي.',
    formations_btn: 'عرض جميع الدورات',
    btn_enroll: 'سجّل الآن',

    partners_tag: 'شركاؤنا',
    partners_title: 'يثقون بنا',
    partners_sub: 'يتعاون مركز سونو مع رواد قطاعات البنوك والاتصالات والتكنولوجيا المالية.',

    cta_title: 'هل أنت مستعد لتطوير مسيرتك المهنية؟',
    cta_sub: 'انضم إلى مئات الطلاب والمهنيين الذين وثقوا بمركز سونو للتدريب.',
    cta_btn_primary: 'إنشاء حسابي',
    cta_btn_secondary: 'عرض الدورات',

    about_page_tag: 'قصتنا',
    about_page_title: 'عن مركز سونو للتدريب',
    about_page_sub: 'مؤسسة متخصصة في التميز في التدريب والتوظيف في إدارة علاقات العملاء بغرب أفريقيا.',
    about_story_title: 'قصتنا',
    about_story: 'تأسس مركز سونو للتدريب في داكار بمهمة واضحة: ربط أفضل المواهب في إدارة علاقات العملاء بالشركات التي تحتاجهم. انطلاقاً من الإيمان بأن علاقة العملاء هي محرك نمو الشركات الأفريقية، طوّر مركزنا منهجية فريدة تجمع بين التدريب العملي والتوظيف المهني.',
    about_mission_title: 'مهمتنا',
    about_mission: 'تدريب وتوظيف أفضل الكفاءات في إدارة علاقات العملاء لدعم نمو الشركات السنغالية والأفريقية.',
    about_vision_title: 'رؤيتنا',
    about_vision: 'أن نصبح الرائد في تدريب وتوظيف إدارة علاقات العملاء في غرب أفريقيا بحلول عام 2030.',
    about_values_title: 'قيمنا',
    val_excellence: 'التميز',
    val_excellence_desc: 'نسعى للتميز في كل تدريب وكل توظيف.',
    val_integrity: 'النزاهة',
    val_integrity_desc: 'الشفافية والأمانة في جميع علاقاتنا المهنية.',
    val_innovation: 'الابتكار',
    val_innovation_desc: 'مناهج تعليمية حديثة متكيفة مع السوق الأفريقي.',
    val_proximity: 'القرب',
    val_proximity_desc: 'مرافقة شخصية لكل مرشح وشركة.',
    team_title: 'فريقنا',
    team_founder: 'المؤسس والمدير',
    team_coordinator: 'المنسقة التربوية',
    team_relations: 'مسؤولة علاقات الشركات',

    services_page_tag: 'خدماتنا',
    services_page_title: 'خدماتنا',
    services_page_sub: 'يقدم مركز سونو ثلاثة حلول للتوظيف مكيّفة مع احتياجاتكم.',
    s1_title: 'الاستعارة المؤقتة',
    s1_desc: 'كفاءات GRC مؤهلة متاحة بسرعة لمهامكم المؤقتة. عقود مرنة من 1 إلى 12 شهراً.',
    s2_title: 'إدارة الانتقال',
    s2_desc: 'مديرون متمرسون لقيادة فرق GRC في فترات التحول المؤسسي.',
    s3_title: 'التوظيف التجريبي',
    s3_desc: 'جرّب مرشحينا 3 أشهر قبل التوظيف النهائي. بدون مخاطرة.',
    process_title: 'منهجيتنا',
    process_1: 'تحليل الحاجة',
    process_1_desc: 'ندرس احتياجاتكم وثقافة شركتكم.',
    process_2: 'الانتقاء',
    process_2_desc: 'انتقاء دقيق عبر اختبارات تقنية وسلوكية.',
    process_3: 'التقديم',
    process_3_desc: 'نقدم لكم 3 ملفات مؤهلة في غضون 72 ساعة.',
    process_4: 'المتابعة',
    process_4_desc: 'مرافقة طوال مدة المهمة.',
    advantages_title: 'لماذا تختار سونو؟',
    adv_1: 'تدريب عملي موجّه نحو النتائج',
    adv_2: 'مدربون متمرسون من الميدان',
    adv_3: 'مكيّف مع السوق السنغالي والأفريقي',
    adv_4: 'شهادة تدريب معترف بها',
    adv_5: 'شبكة أكثر من 30 شركة شريكة',
    adv_6: 'متابعة فردية بعد التوظيف',

    formations_page_tag: 'برامجنا',
    formations_page_title: 'دورات سونو التدريبية',
    formations_page_sub: 'دورات معتمدة في إدارة علاقات العملاء، مكيّفة مع السوق الأفريقي.',
    f1_title: 'إدارة علاقات العملاء (GRC)',
    f1_desc: 'أتقن تقنيات الاحتفاظ بالعملاء وإدارة الشكاوى وتحسين تجربة العملاء.',
    f1_dur: '4 أسابيع',
    f1_price: '150,000 فرنك CFA',
    f2_title: 'GRC والتواصل المهني',
    f2_desc: 'طوّر شبكتك المهنية وأتقن أدوات التواصل الاستراتيجي في علاقات العملاء.',
    f2_dur: '3 أسابيع',
    f2_price: '120,000 فرنك CFA',
    f3_title: 'CRM والأدوات الرقمية',
    f3_desc: 'أتقن برامج CRM (Salesforce، HubSpot، Zoho) المستخدمة في كبرى الشركات الأفريقية.',
    f3_dur: '3 أسابيع',
    f3_price: '130,000 فرنك CFA',
    f4_title: 'خدمة العملاء والتواصل',
    f4_desc: 'تقنيات الاستقبال وإدارة النزاعات والتواصل اللفظي وغير اللفظي في مراكز الاتصال.',
    f4_dur: 'أسبوعان',
    f4_price: '90,000 فرنك CFA',
    f5_title: 'إدارة فريق GRC',
    f5_desc: 'كن مشرفاً أو قائد فريق: قيادة KPIs، تدريب الفريق، وإعداد التقارير.',
    f5_dur: '4 أسابيع',
    f5_price: '180,000 فرنك CFA',
    f6_title: 'الحاسوب وأدوات CRM',
    f6_desc: 'Excel وWord وأنظمة CRM الشائعة وأدوات التقارير لمهن علاقات العملاء.',
    f6_dur: 'أسبوعان',
    f6_price: '80,000 فرنك CFA',
    duration_label: 'المدة',
    price_label: 'السعر',
    level_label: 'المستوى',
    level_beginner: 'مبتدئ',
    level_intermediate: 'متوسط',
    level_advanced: 'متقدم',

    students_page_tag: 'فضاء الطلاب',
    students_page_title: 'انطلق في مسيرتك المهنية',
    students_page_sub: 'انضم إلى مجتمع سونو وادخل عالم فرص إدارة علاقات العملاء.',
    how_title: 'كيف يعمل؟',
    step_1: 'أنشئ حسابك',
    step_1_desc: 'سجّل مجاناً وأكمل ملفك الشخصي في دقائق.',
    step_2: 'اختر دورتك',
    step_2_desc: 'اختر التدريب المناسب لمستواك وأهدافك المهنية.',
    step_3: 'اجتز الاختبارات',
    step_3_desc: 'أثبت كفاءتك باختباراتنا التقنية.',
    step_4: 'احصل على وظيفة',
    step_4_desc: 'ادخل إلى العروض الحصرية لشركاء سونو.',
    testimonials_title: 'نجحوا مع سونو',
    benefits_title: 'مزاياك',
    ben_1: 'تدريب عملي 100%',
    ben_1_desc: 'تمارين مبنية على حالات حقيقية من شركات سنغالية.',
    ben_2: 'الدخول لعروض العمل',
    ben_2_desc: 'عروض حصرية من 30+ شريك (بنوك، اتصالات، تكنولوجيا مالية).',
    ben_3: 'شهادة معترف بها',
    ben_3_desc: 'شهادة تدريب سونو معترف بها من أصحاب العمل.',
    ben_4: 'مرافقة شخصية',
    ben_4_desc: 'مستشار مخصص لمتابعة تقدمك وبحثك عن عمل.',
    cta_students_title: 'مستعد للبداية؟',
    cta_students_sub: 'أنشئ حسابك مجاناً واكتشف جميع فرص سونو.',
    btn_create_account: 'إنشاء حسابي المجاني',
    btn_see_formations: 'عرض الدورات',

    partners_page_tag: 'فضاء الشركاء',
    partners_page_title: 'شركاؤنا من المؤسسات',
    partners_page_sub: 'يتعاون مركز سونو مع رواد قطاعات البنوك والاتصالات والتكنولوجيا المالية في السنغال وغرب أفريقيا.',
    our_partners_title: 'يثقون بنا',
    become_partner_title: 'كن شريكاً',
    become_partner_desc: 'انضم إلى شبكة شركاتنا وادخل على ملفات GRC مؤهلة مسبقاً.',
    partner_benefit_1: 'الوصول لملفات منتقاة ومختبرة',
    partner_benefit_2: 'عملية توظيف سريعة (72 ساعة)',
    partner_benefit_3: 'ضمان الاستبدال عند عدم الرضا',
    partner_benefit_4: 'متابعة ومرافقة بعد التوظيف',
    btn_contact_us: 'تواصل معنا',
    partner_testimonials_title: 'ما يقولونه عنا',

    contact_page_tag: 'تواصل معنا',
    contact_page_title: 'اتصل بنا',
    contact_page_sub: 'سؤال، مشروع توظيف، أو طلب تدريب؟ فريقنا يجيب خلال 24 ساعة.',
    contact_form_title: 'أرسل لنا رسالة',
    field_firstname: 'الاسم الأول *',
    field_lastname: 'اللقب *',
    field_email: 'البريد الإلكتروني *',
    field_phone: 'الهاتف',
    field_subject: 'الموضوع *',
    field_message: 'رسالتك *',
    field_subject_placeholder: 'اختر موضوعاً',
    subject_formation: 'طلب تدريب',
    subject_recruitment: 'توظيف',
    subject_partnership: 'شراكة',
    subject_other: 'أخرى',
    btn_send: 'إرسال الرسالة',
    contact_address_label: 'العنوان',
    contact_address_val: 'ساكريه-كور 3، VDN، داكار، السنغال',
    contact_phone_label: 'الهاتف',
    contact_email_label: 'البريد الإلكتروني',
    contact_hours_label: 'أوقات العمل',
    contact_hours_val: 'الإثنين–الجمعة: 8ص–6م · السبت: 9ص–1م',

    footer_tagline: 'مركز متخصص في التدريب والتوظيف في إدارة علاقات العملاء بداكار، السنغال.',
    footer_nav: 'التنقل',
    footer_formations_col: 'الدورات',
    footer_contact_col: 'التواصل',
    footer_copyright: '© 2025 مركز سونو للتدريب. جميع الحقوق محفوظة.',
    footer_legal: 'الشروط القانونية',
    pwa_title: 'تثبيت التطبيق',
    pwa_sub: 'أضف سونو إلى شاشتك الرئيسية',
    pwa_install: 'تثبيت',
    pwa_dismiss: 'لاحقاً',
  }
};

// ========== ÉTAT ==========
let currentLang = localStorage.getItem('sunu_lang') || 'fr';
let deferredPrompt = null;

// ========== TRADUCTION ==========
function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS.fr[key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.getAttribute('data-i18n-title'));
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('sunu_lang', lang);
  document.documentElement.setAttribute('lang', lang);
  document.body.classList.toggle('rtl', lang === 'ar');
  applyTranslations();
  updateLangBtn();
}

function toggleLang() {
  setLang(currentLang === 'fr' ? 'ar' : 'fr');
}

function updateLangBtn() {
  const btn = document.getElementById('langBtn');
  if (!btn) return;
  if (currentLang === 'fr') {
    btn.innerHTML = '<span class="lang-flag">🇸🇦</span> عربي';
  } else {
    btn.innerHTML = '<span class="lang-flag">🇫🇷</span> Français';
  }
  const mobileLangBtn = document.getElementById('mobileLangBtn');
  if (mobileLangBtn) mobileLangBtn.innerHTML = btn.innerHTML;
}

// ========== NAVBAR ==========
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  // Scroll shadow
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Active link
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Auth-aware buttons
  updateNavAuth();
}

function updateNavAuth() {
  const student = localStorage.getItem('sunu_current_student');
  let parsed = null;
  try { parsed = student ? JSON.parse(student) : null; } catch(e){}
  const isLoggedIn = parsed && parsed.firstname;

  const navLoginBtn = document.getElementById('navLoginBtn');
  const navCtaBtn = document.getElementById('navCtaBtn');
  if (navLoginBtn && navCtaBtn) {
    if (isLoggedIn) {
      navLoginBtn.textContent = parsed.firstname;
      navLoginBtn.href = 'app.html';
      navCtaBtn.textContent = t('nav_dashboard');
      navCtaBtn.href = 'app.html';
    } else {
      navLoginBtn.setAttribute('data-i18n', 'nav_login');
      navLoginBtn.textContent = t('nav_login');
      navLoginBtn.href = 'app.html';
      navCtaBtn.setAttribute('data-i18n', 'nav_signup');
      navCtaBtn.textContent = t('nav_signup');
      navCtaBtn.href = 'app.html#signup';
    }
  }
}

// ========== HAMBURGER ==========
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// ========== FADE IN ON SCROLL ==========
function initFadeIn() {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }});
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}

// ========== PWA ==========
function initPWA() {
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    const banner = document.getElementById('pwaBanner');
    const dismissed = localStorage.getItem('sunu_pwa_dismissed');
    if (banner && !dismissed) {
      setTimeout(() => banner.classList.remove('hidden'), 3000);
    }
  });
}

function installPWA() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(result => {
    deferredPrompt = null;
    dismissPWA();
  });
}

function dismissPWA() {
  localStorage.setItem('sunu_pwa_dismissed', '1');
  const banner = document.getElementById('pwaBanner');
  if (banner) banner.classList.add('hidden');
}

// ========== TOAST ==========
function showToast(msg, type = 'info') {
  const stack = document.getElementById('toastStack');
  if (!stack) return;
  const icons = { success: 'check-circle', danger: 'circle-exclamation', info: 'circle-info', warning: 'exclamation-triangle' };
  const t_el = document.createElement('div');
  t_el.className = 'toast ' + (type !== 'info' ? type : '');
  t_el.innerHTML = `<i class="fa-solid fa-${icons[type]||'circle-info'}"></i> ${msg}`;
  stack.appendChild(t_el);
  setTimeout(() => t_el.remove(), 3500);
}

// ========== CONTACT FORM ==========
function submitContact(e) {
  e.preventDefault();
  const form = e.target;
  const fn = form.querySelector('#cf_firstname').value.trim();
  const ln = form.querySelector('#cf_lastname').value.trim();
  const em = form.querySelector('#cf_email').value.trim();
  const msg = form.querySelector('#cf_message').value.trim();
  if (!fn || !ln || !em || !msg) {
    showToast(currentLang === 'ar' ? 'يرجى ملء جميع الحقول الإلزامية' : 'Veuillez remplir tous les champs obligatoires', 'danger');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
    showToast(currentLang === 'ar' ? 'عنوان البريد الإلكتروني غير صالح' : 'Adresse email invalide', 'danger');
    return;
  }
  // Save contact to localStorage for admin to see
  const contacts = JSON.parse(localStorage.getItem('sunu_contacts') || '[]');
  contacts.unshift({ id: Date.now(), firstname: fn, lastname: ln, email: em, message: msg, subject: form.querySelector('#cf_subject').value, date: new Date().toISOString(), status: 'nouveau' });
  localStorage.setItem('sunu_contacts', JSON.stringify(contacts));
  form.reset();
  showToast(currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح! سنرد عليك خلال 24 ساعة.' : 'Message envoyé ! Nous vous répondons sous 24h.', 'success');
}

// ========== REGISTER PWA SERVICE WORKER ==========
function registerSW() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').catch(() => {});
    });
  }
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  initNavbar();
  initHamburger();
  initFadeIn();
  initPWA();
  registerSW();
});
