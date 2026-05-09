import { Button } from "@/components/ui/button";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Clock,
  Shield,
  Award,
  Star,
  Truck,
  Package,
  Building2,
  Home,
  Warehouse,
  MapPin,
  Check,
  X,
  Users,
  Zap,
  DollarSign,
} from "lucide-react";
import ContactSection from "@/components/main/ContactSection";
import Image from "next/image";
import { FAQs } from "@/components/main/FAQs";
import { Metadata } from "next";
import MetadataTemplate from "@/lib/MetaDataTemplate";

// ─────────────────────────────────────────────────────────────── Data ──────

type CellValue = boolean | "partial";

const whyChooseUs = [
  {
    icon: Award,
    title: "معتمدة ISO 9001:2015",
    desc: "شهادة دولية تعني أن عملياتنا موثّقة ومراقبة — ليس مجرد وعود شفهية.",
  },
  {
    icon: Clock,
    title: "الالتزام بالمواعيد",
    desc: "نصل في الوقت المتفق عليه دائماً. إذا طرأ أي تغيير، نبادر نحن بالإخبار.",
  },
  {
    icon: DollarSign,
    title: "أسعار شفافة بدون مفاجآت",
    desc: "تحصل على السعر الكامل قبل بدء العمل. لا رسوم مخفية ولا إضافات مفاجئة.",
  },
  {
    icon: Shield,
    title: "تأمين شامل على الأثاث",
    desc: "نوفر تغطية تأمينية حقيقية على ممتلكاتك طوال عملية النقل.",
  },
  {
    icon: Users,
    title: "فريق مدرّب ومرخّص",
    desc: "كل عضو في فريقنا مرخّص ومفحوص ومدرّب على التعامل مع الأثاث الثمين.",
  },
  {
    icon: Zap,
    title: "خدمة الطوارئ نفس اليوم",
    desc: "نقبل طلبات الانتقال العاجل في دبي. تواصل معنا وسنجد لك موعداً.",
  },
];
const services = [
  {
    icon: Home,
    title: "نقل العفش السكني",
    desc: "من أول التغليف حتى ترتيب الأثاث في مكانه الجديد. شقق وغرف وفلل.",
    image: "/ar/nice-movers-residential-moving-dubai.jpg",
    alt: "شركة نايس موفرز تقدم خدمة نقل العفش السكني في دبي مع التغليف وفك وتركيب وترتيب الأثاث",
    features: [
      "تغليف احترافي متكامل",
      "فك وتركيب جميع القطع",
      "سيارات مغلقة ومجهزة",
      "ترتيب في المكان الجديد",
    ],
  },
  {
    icon: Building2,
    title: "نقل أثاث المكاتب والشركات",
    desc: "انتقال المكتب بسرعة ودقة دون توقف عملك. جدولة مرنة تناسبك.",
    image: "/ar/nice-movers-office-relocation-dubai.jpg",
    alt: "شركة نايس موفرز تقدم نقل أثاث المكاتب والشركات في دبي بسرعة وتنظيم دون تعطيل الأعمال",
    features: [
      "تخطيط مشترك مع الإدارة",
      "جدولة في وقت مناسب",
      "تركيب وإعداد فوري",
      "صفر انقطاع في الأعمال",
    ],
  },
  {
    icon: Truck,
    title: "نقل الفلل والمنازل الكبيرة",
    desc: "أثاث ضخم، تحف، أعمال فنية — لدينا المعدات المتخصصة والفريق الأكبر.",
    image: "/ar/nice-movers-villa-moving-dubai.jpg",
    alt: "شركة نايس موفرز تقدم خدمات نقل الفلل والمنازل الكبيرة في دبي مع عناية خاصة بالأثاث الفاخر والتحف",
    features: [
      "رافعات وعربات متخصصة",
      "فريق أكبر حجماً",
      "تعامل خاص مع التحف",
      "تغليف بمعايير دولية",
    ],
  },
  {
    icon: Package,
    title: "خدمات التغليف المستقلة",
    desc: "تغليف احترافي فقط إذا كنت تفضل تولي النقل بنفسك.",
    image: "/ar/nice-movers-packing-services-dubai.jpg",
    alt: "شركة نايس موفرز تقدم خدمات تغليف احترافية مستقلة في دبي باستخدام مواد حماية عالية الجودة",
    features: [
      "ورق فقاعات عالي الجودة",
      "بطانيات واقية سميكة",
      "كراتين متينة بأحجام متعددة",
      "معايير شحن دولية",
    ],
  },
  {
    icon: Warehouse,
    title: "التخزين المؤقت في دبي",
    desc: "مستودعات آمنة ومكيّفة. أثاثك في أمان حتى تجهز وجهتك الجديدة.",
    image: "/ar/nice-movers-storage-dubai.jpg",
    alt: "شركة نايس موفرز توفر خدمات التخزين المؤقت الآمن والمكيف للأثاث في دبي",
    features: [
      "بيئة مكيّفة خاضعة للرقابة",
      "أمان وحراسة 24/7",
      "مرونة في مدة التخزين",
      "سهولة الاسترداد في أي وقت",
    ],
  },
  {
    icon: MapPin,
    title: "نقل العفش بين الإمارات",
    desc: "من وإلى دبي والشارقة وأبوظبي وعجمان ورأس الخيمة والفجيرة والعين.",
    image: "/ar/nice-movers-uae-interemirate-moving.jpg",
    alt: "شركة نايس موفرز تقدم خدمات نقل العفش بين جميع إمارات الإمارات العربية المتحدة",
    features: [
      "تغطية كاملة للإمارات",
      "تنسيق عبر المناطق",
      "سائقون مرخصون مؤهلون",
      "تأمين طوال الرحلة",
    ],
  },
];

const processSteps = [
  {
    num: "١",
    title: "التواصل والاستشارة المجانية",
    desc: "اتصل بنا أو أرسل رسالة واتساب وأخبرنا بتفاصيل الانتقال.",
  },
  {
    num: "٢",
    title: "عرض السعر الشفاف",
    desc: "نرسل لك سعراً واضحاً وكاملاً بدون رسوم مخفية.",
  },
  {
    num: "٣",
    title: "تحديد موعد يناسبك",
    desc: "نعمل 7 أيام في الأسبوع بما في ذلك أوقات الطوارئ.",
  },
  {
    num: "٤",
    title: "الفك والتغليف الاحترافي",
    desc: "يصل الفريق في الوقت المحدد ويبدأ العمل فوراً.",
  },
  {
    num: "٥",
    title: "النقل الآمن إلى وجهتك",
    desc: "سيارات مغلقة ومجهزة تحافظ على أثاثك طوال الرحلة.",
  },
  {
    num: "٦",
    title: "التركيب والترتيب الكامل",
    desc: "نركب كل شيء ونرتبه في مكانه — لا تتحرك حتى يكتمل كل شيء.",
  },
];

const areas = [
  ["دبي مارينا", "البرشاء", "داون تاون دبي"],
  ["جي بي سي (JBC)", "ديرة", "بيزنس باي"],
  ["قرية جميرا الدائرية (JVC)", "جميرا", "ميدان"],
  ["مدينة محمد بن راشد", "القوز", "القصيص"],
  ["جي بي آر (JBR)", "نخلة جميرا", "الجداف"],
  ["دبي هيلز استيت", "الورقاء", "المقطع"],
];

const pricingFactors = [
  {
    title: "حجم الوحدة السكنية أو المكتب",
    desc: "استوديو، غرفة، شقتان، فيلا — كل حجم له سعر مناسب.",
  },
  {
    title: "المسافة بين العنوانين",
    desc: "النقل داخل المنطقة أو عبر دبي أو بين الإمارات.",
  },
  {
    title: "الخدمات المطلوبة",
    desc: "تغليف فقط، أو مع فك وتركيب، أو مع تخزين — خيارك يحدد السعر.",
  },
  {
    title: "الطابق وتوافر المصعد",
    desc: "الطوابق العليا بدون مصعد تتطلب جهداً أكبر ينعكس على السعر بشفافية.",
  },
];

const guarantees = [
  {
    title: "الوصول في الموعد المحدد",
    desc: "إذا كان هناك أي تغيير في الوقت، نتصل بك نحن قبل أن تتصل أنت.",
  },
  {
    title: "تأمين شامل على الأثاث",
    desc: "في الحالات النادرة التي يحدث فيها تلف، لديك تغطية تأمينية حقيقية لا مجرد وعود.",
  },
  {
    title: "لا أسعار مفاجئة أبداً",
    desc: "السعر الذي تتفق عليه هو السعر الذي تدفعه. بدون إضافات في اللحظة الأخيرة.",
  },
  {
    title: "فريق معتمد ومُفحوص",
    desc: "كل أعضاء فريقنا يمرون بفحص خلفية كاملة قبل الانضمام لنايس موفرز.",
  },
  {
    title: "ضمان الرضا الكامل",
    desc: "إذا لم تكن راضياً عن أي جزء من الخدمة، نعود ونصلح — بدون جدل.",
  },
];

const testimonials = [
  {
    name: "فاطمة ر.",
    location: "دبي مارينا",
    rating: 5,
    text: "فريق نايس موفرز نقل أثاث شقتي في المرسى بدون أي تلف. كانوا سريعين واحترافيين ومنظمين. سعر عادل ومباشر.",
  },
  {
    name: "محمد س.",
    location: "داون تاون دبي",
    rating: 5,
    text: "نقلوا لنا مكتباً بالكامل في بيزنس باي في يوم عطلة. لم يتوقف عملنا لحظة. خدمة ممتازة بكل المقاييس.",
  },
  {
    name: "سارة ك.",
    location: "قرية جميرا الدائرية",
    rating: 5,
    text: "أفضل شركة نقل اثاث دبي جربتها. لا مشاكل، لا تأخير، لا أسعار مفاجئة. سأنصح بهم دائماً.",
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "كم تكلف خدمة نقل الاثاث في دبي؟",
    answer:
      "تعتمد التكلفة على حجم المنزل والخدمات المطلوبة والمسافة. راسلنا على واتساب للحصول على سعر دقيق ومجاني خلال دقائق.",
  },
  {
    question: "هل تعملون في نقل الاثاث يوم الجمعة؟",
    answer:
      "نعم. نعمل 7 أيام في الأسبوع بما في ذلك الجمعة وعطل نهاية الأسبوع. كما نقبل طلبات الانتقال العاجل في نفس اليوم حسب التوفر.",
  },
  {
    question: "هل تقدمون خدمة فك وتركيب الأثاث ضمن النقل؟",
    answer:
      "نعم، خدمة الفك والتركيب مضمنة في معظم باقاتنا. تشمل غرف النوم، المطابخ، الخزائن، والأجهزة الكهربائية الكبيرة.",
  },
  {
    question: "هل الأثاث مؤمّن أثناء النقل؟",
    answer:
      "نعم، توفر نايس موفرز تأميناً على الأثاث خلال عملية النقل. يمكنك الاستفسار عن شروط التغطية عند التواصل معنا.",
  },
  {
    question: "كم تحتاج عملية نقل الأثاث في دبي من وقت؟",
    answer:
      "تتراوح عملية نقل شقة متوسطة بين 4 و8 ساعات. الفلل أو المكاتب الكبيرة قد تحتاج يوماً كاملاً. نعطيك تقديراً دقيقاً بعد معرفة تفاصيل الانتقال.",
  },
  {
    question: "هل يمكنكم نقل الأثاث من دبي إلى إمارات أخرى؟",
    answer:
      "بالتأكيد. نقدم خدمات نقل العفش والاثاث من وإلى دبي، الشارقة، أبوظبي، عجمان، رأس الخيمة، الفجيرة، والعين.",
  },
  {
    question: "ما هي مناطق دبي التي تغطيها؟",
    answer:
      "نغطي جميع أحياء دبي بدون استثناء — من ديرة وبر دبي إلى دبي مارينا ونخلة جميرا والمجمعات الجديدة كـMBR City وDubai Hills.",
  },
];

const competitorRows: {
  feature: string;
  d1: CellValue;
  d2: CellValue;
  nice: CellValue;
}[] = [
  {
    feature: "شهادة ISO 9001:2015",
    d1: false,
    d2: false,
    nice: true,
  },
  {
    feature: "جدول أسعار شفاف موثق",
    d1: false,
    d2: false,
    nice: true,
  },
  {
    feature: "تغطية كاملة لمناطق دبي",
    d1: "partial",
    d2: "partial",
    nice: true,
  },
  {
    feature: "ضمانات مكتوبة وقابلة للقياس",
    d1: false,
    d2: "partial",
    nice: true,
  },
  {
    feature: "FAQ تفصيلية ومحلية",
    d1: "partial",
    d2: false,
    nice: true,
  },
  {
    feature: "شهادات عملاء محلية موثّقة",
    d1: false,
    d2: false,
    nice: true,
  },
  {
    feature: "Schema SEO لشركة نقل",
    d1: false,
    d2: false,
    nice: true,
  },
  {
    feature: "خدمة طوارئ نفس اليوم",
    d1: false,
    d2: false,
    nice: true,
  },
];

// ─────────────────────────────────────────────────────── Sub-components ──────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[#c00000] text-xs font-bold uppercase tracking-[0.15em] mb-2">
      {children}
    </span>
  );
}

function CellIcon({ val }: { val: CellValue }) {
  if (val === true)
    return (
      <Check className="size-5 text-[#c00000] mx-auto" strokeWidth={2.5} />
    );
  if (val === "partial")
    return (
      <span className="text-amber-500 text-xs font-semibold mx-auto block text-center">
        جزئي
      </span>
    );
  return <X className="size-4 text-gray-300 mx-auto" />;
}

// ──────────────────────────────────────────────────────────────── Page ──────

export const metadata: Metadata = MetadataTemplate({
  data: {
    meta: {
      title: "نقل الاثاث دبي | شركة نقل أثاث معتمدة ISO — نايس موفرز",
      desc: "شركة نقل أثاث في دبي معتمدة (ISO 9001). نقدم خدمات التغليف، الفك، والتركيب بأسعار تنافسية وضمان شامل. فريقنا متاح 24/7 لخدمتك في كافة أنحاء دبي. اطلب سعرك المجاني اليوم!",
    },
    image: {
      path: "/dubai/nice-movers-and-packers-in-dubai.jpg",
      alt: "Nice Movers and Packers in Dubai",
    },
    path: "/نقل-الاثاث-دبي",
  },
});

export default function NaqelAthathDubaiPage() {
  return (
    <>
      <main dir="rtl" className="overflow-x-hidden pb-24 md:pb-0">
        {/* ══════════════════════════════════════════════════════ 1. HERO */}
        <section className="bg-[#2d2d2d] relative overflow-hidden">
          {/* Decorative atmosphere */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#c00000]" />
          <div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.04]"
            style={{ background: "#c00000" }}
          />
          <div
            className="absolute -bottom-32 -left-32 w-[350px] h-[350px] rounded-full opacity-[0.04]"
            style={{ background: "#c00000" }}
          />
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 pt-24 md:pt-40 pb-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2.5 border border-[#c00000]/35 bg-[#c00000]/10 rounded-full px-5 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#c00000] animate-pulse flex-shrink-0" />
                <span className="text-gray-300 text-sm font-medium">
                  معتمدة ISO 9001:2015 &nbsp;|&nbsp; متاحون 7 أيام في الأسبوع
                </span>
              </div>

              {/* H1 */}
              <h1 className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.15] mb-5">
                <span className="text-[#c00000]">نقل الاثاث دبي</span>
                <br />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300 leading-normal">
                  شركة نايس موفرز — الاحترافية في كل تفصيل
                </span>
              </h1>

              {/* Trust bullets */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 text-gray-400 text-sm md:text-base mt-6">
                {[
                  "أسعار شفافة بدون مفاجآت",
                  "تأمين شامل على الأثاث",
                  "فريق مدرّب ومرخّص",
                  "خدمة 7 أيام في الأسبوع",
                ].map((point) => (
                  <span key={point} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#c00000] flex-shrink-0" />
                    {point}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
                <Button
                  callBtn
                  size="lg"
                  className="bg-[#c00000] hover:bg-[#a30000] text-white border-0 text-base px-8 h-12 rounded-xl w-full sm:w-auto shadow-[0_8px_32px_rgba(192,0,0,0.35)] font-bold"
                >
                  <Phone className="size-4" />
                  اتصل الآن: 056 3560017
                </Button>
                <Button
                  wtBtn
                  size="lg"
                  className="border-white/25 bg-white text-primary hover:bg-white/10 hover:text-white hover:border-white/40 text-base px-8 h-12 rounded-xl w-full sm:w-auto"
                >
                  <MessageCircle className="size-4" />
                  احصل على عرض واتساب
                </Button>
              </div>

              {/* Stats strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 max-w-2xl mx-auto">
                {[
                  { num: "٥٠٠+", label: "عميل سعيد" },
                  { num: "ISO", label: "9001:2015 معتمدة" },
                  { num: "٢٤/٧", label: "خدمة طوارئ" },
                  { num: "١٠٠%", label: "تغطية كل دبي" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/[0.04] hover:bg-white/[0.07] transition-colors py-5 px-4 text-center"
                  >
                    <div className="text-[#c00000] text-2xl font-bold leading-none">
                      {stat.num}
                    </div>
                    <div className="text-gray-400 text-xs mt-2 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom fade into white */}
          <div className="h-10 bg-gradient-to-b from-transparent to-white relative z-10" />
        </section>

        {/* ════════════════════════════════════════ 2. FORM PLACEHOLDER */}
        <ContactSection
          title="اتصل بنا لنقل الأثاث في دبي"
          desc="هل تبحث عن تجربة نقل خالية من الإجهاد؟ نحن نوفر لك أفضل خدمات نقل الأثاث في دبي بأسعار تنافسية. نعتمد على فريق محترف متخصص في الفك، التغليف، والتركيب لضمان سلامة ممتلكاتك. اتصل بنا الآن واحصل على معاينة مجانية وخدمة سريعة تضمن لك راحة البال."
        />

        {/* ══════════════════════════════════════ 3. WHY CHOOSE US */}
        <section className="bg-gray-50 py-16 md:py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>لماذا نايس موفرز؟</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d]">
                شركة نقل اثاث دبي تعمل بنظام مختلف
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                معظم شركات نقل الأثاث في دبي تعد بالكثير وتسلّم أقل. نايس موفرز
                تثبت الفرق بضمانات حقيقية وقابلة للقياس.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyChooseUs.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#c00000]/25 hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#c00000]/8 flex items-center justify-center mb-4 group-hover:bg-[#c00000]/15 transition-colors">
                    <Icon className="size-5 text-[#c00000]" />
                  </div>
                  <h3 className="text-[#2d2d2d] font-bold text-base mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════ 4. SERVICES */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>خدماتنا</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d]">
                خدمات نقل الاثاث في دبي
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                حلول نقل متكاملة لكل الاحتياجات — سكني أو تجاري أو بين الإمارات
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(({ image, alt, title, desc, features }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all group"
                >
                  {/* Image placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-150 relative overflow-hidden bg-gray-100">
                    <Image
                      src={image}
                      alt={alt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <h3 className="font-bold text-[#2d2d2d] text-base mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                      {desc}
                    </p>
                    <ul className="space-y-2">
                      {features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <Check
                            className="size-3.5 text-[#c00000] flex-shrink-0"
                            strokeWidth={2.5}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════ 5. PROCESS STEPS */}
        <section className="bg-[#2d2d2d] py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#c00000]" />
          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#c00000]/5 blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <SectionLabel>كيف نعمل</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                كيف يتم نقل الاثاث مع نايس موفرز؟
              </h2>
              <p className="text-gray-400 mt-3 text-sm">
                ٦ خطوات واضحة من أول اتصال حتى اكتمال الانتقال
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {processSteps.map((step) => (
                <div
                  key={step.num}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-colors"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-11 h-11 rounded-full bg-[#c00000] flex items-center justify-center flex-shrink-0 shadow-[0_4px_16px_rgba(192,0,0,0.4)]">
                      <span className="text-white font-bold text-base leading-none">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-sm leading-snug">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button
                quoteBtn
                size="lg"
                className="bg-[#c00000] hover:bg-[#a30000] text-white border-0 text-base px-10 h-12 rounded-xl shadow-[0_8px_32px_rgba(192,0,0,0.4)] font-bold"
              >
                ابدأ الآن — احصل على عرض مجاني
              </Button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════ 6. AREAS COVERAGE */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Text side */}
              <div>
                <SectionLabel>التغطية الجغرافية</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-4">
                  نغطي كل أحياء دبي
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                  نقدم خدمة نقل اثاث في دبي إلى جميع المناطق والأحياء بدون رسوم
                  إضافية. من ديرة وبر دبي التاريخية إلى أحدث المجمعات كـMBR City
                  ودبي هيلز — نصل إليك في الموعد المحدد.
                </p>

                {/* Call-out box */}
                <div className="flex items-start gap-3 p-4 bg-[#c00000]/5 rounded-xl border border-[#c00000]/15 mb-8">
                  <MapPin className="size-5 text-[#c00000] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong className="text-[#2d2d2d]">
                      لا تجد منطقتك في القائمة؟
                    </strong>{" "}
                    اتصل بنا — نصل إلى أي عنوان في دبي وجميع الإمارات.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    callBtn
                    size="lg"
                    className="bg-[#c00000] hover:bg-[#a30000] text-white border-0 rounded-xl font-bold"
                  >
                    <Phone className="size-4" />
                    تحقق من منطقتك
                  </Button>
                  <Button
                    wtBtn
                    size="lg"
                    variant="outline"
                    className="border-[#c00000]/40 text-[#c00000] hover:bg-[#c00000]/5 hover:text-[#c00000] rounded-xl"
                  >
                    <MessageCircle className="size-4" />
                    واتساب
                  </Button>
                </div>
              </div>

              {/* Table side */}
              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#2d2d2d] text-white">
                      <th className="py-3.5 px-4 text-right font-semibold text-xs tracking-wide">
                        المنطقة
                      </th>
                      <th className="py-3.5 px-4 text-right font-semibold text-xs tracking-wide">
                        المنطقة
                      </th>
                      <th className="py-3.5 px-4 text-right font-semibold text-xs tracking-wide">
                        المنطقة
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {areas.map((row, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50/80"}
                      >
                        {row.map((area) => (
                          <td
                            key={area}
                            className="py-3 px-4 text-[#2d2d2d] text-xs leading-snug"
                          >
                            <span className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#c00000] flex-shrink-0" />
                              {area}
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════ 7. PRICING FACTORS */}
        <section className="bg-gray-50 py-16 md:py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image placeholder — right column on desktop (col-start-2 in LTR / start in RTL) */}
              <div className="order-last lg:order-first">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  <Image
                    src="/ar/nice-movers-dubai-moving-pricing-transparent-quote.jpg"
                    fill
                    alt="أسعار نقل الاثاث في دبي"
                    className="object-cover"
                  />
                  {/* Floating badge */}
                  <div className="absolute bottom-5 right-5 bg-[#c00000] text-white rounded-xl px-4 py-2.5 text-sm font-bold shadow-lg shadow-[#c00000]/30">
                    سعر شفاف 100%
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-[#c00000]/10 rounded-br-[3rem]" />
                </div>
              </div>

              {/* Text side */}
              <div>
                <SectionLabel>التسعير</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-3">
                  أسعار نقل الاثاث في دبي
                </h2>
                <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                  لا نؤمن بـ&quot;السعر يبدأ من...&quot; الذي يتضاعف لاحقاً.
                  أسعارنا تُحدد بناءً على عوامل واضحة وشفافة:
                </p>

                <div className="space-y-3 mb-8">
                  {pricingFactors.map(({ title, desc }, i) => (
                    <div
                      key={title}
                      className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#c00000]/20 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#c00000] flex items-center justify-center flex-shrink-0 text-white font-bold text-sm shadow-sm shadow-[#c00000]/30">
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-bold text-[#2d2d2d] text-sm">
                          {title}
                        </div>
                        <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                          {desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  quoteBtn
                  size="lg"
                  className="bg-[#c00000] hover:bg-[#a30000] text-white border-0 rounded-xl font-bold w-full sm:w-auto px-8"
                >
                  احصل على عرض سعر مخصص — مجاناً
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ 8. GUARANTEES */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>ضماناتنا</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d]">
                ضمانات نايس موفرز لنقل الاثاث دبي
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                لا نقول &quot;نحن الأفضل&quot; فقط — نثبت ذلك بضمانات حقيقية
                وقابلة للقياس
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {guarantees.map(({ title, desc }, i) => {
                const isHighlighted = i === 2; // "لا أسعار مفاجئة" — center of first row
                return (
                  <div
                    key={title}
                    className={`rounded-2xl p-6 border transition-all ${
                      isHighlighted
                        ? "bg-[#c00000] border-[#c00000] shadow-xl shadow-[#c00000]/25"
                        : "bg-white border-gray-100 hover:border-[#c00000]/20 hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${
                        isHighlighted ? "bg-white/20" : "bg-[#c00000]/10"
                      }`}
                    >
                      <CheckCircle2
                        className={`size-5 ${isHighlighted ? "text-white" : "text-[#c00000]"}`}
                      />
                    </div>
                    <h3
                      className={`font-bold text-base mb-2 ${isHighlighted ? "text-white" : "text-[#2d2d2d]"}`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${isHighlighted ? "text-white/80" : "text-gray-500"}`}
                    >
                      {desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════ 9. TESTIMONIALS */}
        <section className="bg-gray-50 py-16 md:py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>آراء العملاء</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d]">
                ماذا يقول عملاؤنا في دبي
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map(({ name, location, rating, text }) => (
                <div
                  key={name}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  {/* Decorative quote */}
                  <div className="absolute top-4 left-4 text-[5rem] text-[#c00000]/8 font-serif leading-none select-none pointer-events-none">
                    &quot;
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5 relative z-10">
                    {text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-[#c00000]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#c00000] font-bold text-sm">
                        {name[0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-[#2d2d2d] text-sm">
                        {name}
                      </div>
                      <div className="text-gray-400 text-xs flex items-center gap-1 mt-0.5">
                        <MapPin className="size-3" />
                        {location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ 10. FAQ */}

        <div className="-mt-20">
          <FAQs faqs={faqs} />
        </div>

        {/* ════════════════════════════════ 11. COMPETITOR COMPARISON */}
        <section className="bg-gray-50 py-16 md:py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>لماذا نختلف</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d]">
                نايس موفرز مقارنةً بالمنافسين
              </h2>
              <p className="text-gray-500 mt-3 text-sm">
                قارن بنفسك — الأرقام والحقائق تتحدث
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-[#2d2d2d]">
                    <th className="py-4 px-5 text-right font-semibold text-white text-xs tracking-wide">
                      الميزة
                    </th>
                    <th className="py-4 px-5 text-center font-medium text-gray-400 text-xs">
                      منافس ١
                    </th>
                    <th className="py-4 px-5 text-center font-medium text-gray-400 text-xs">
                      منافس ٢
                    </th>
                    <th className="py-4 px-5 text-center font-bold text-[#c00000] text-xs bg-[#c00000]/10 tracking-wide">
                      نايس موفرز ✓
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {competitorRows.map(({ feature, d1, d2, nice }, i) => (
                    <tr
                      key={feature}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
                    >
                      <td className="py-3.5 px-5 font-medium text-[#2d2d2d] text-sm">
                        {feature}
                      </td>
                      <td className="py-3.5 px-5">
                        <CellIcon val={d1} />
                      </td>
                      <td className="py-3.5 px-5">
                        <CellIcon val={d2} />
                      </td>
                      <td className="py-3.5 px-5 bg-[#c00000]/[0.03]">
                        <CellIcon val={nice} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════ 12. FINAL CTA */}
        <section className="bg-[#c00000] py-16 md:py-24 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-black/10" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                احجز الآن — نقل الاثاث دبي
              </h2>
              <p className="text-white/80 text-base md:text-lg mb-10 leading-relaxed">
                احصل على عرض سعر مجاني في أقل من ٥ دقائق.
                <br className="hidden md:block" />
                فريق معتمد يصل في الوقت المحدد — بدون مفاجآت.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Button
                  callBtn
                  size="lg"
                  className="bg-white text-[#c00000] hover:bg-gray-50 border-0 text-base px-8 h-12 rounded-xl font-bold w-full sm:w-auto shadow-lg shadow-black/20"
                >
                  <Phone className="size-4" />
                  اتصل: +971 56 3560017
                </Button>
                <Button
                  wtBtn
                  size="lg"
                  className="bg-transparent hover:bg-white/15 text-white border-2 border-white/60 hover:border-white text-base px-8 h-12 rounded-xl w-full sm:w-auto"
                >
                  <MessageCircle className="size-4" />
                  واتساب
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-white/70 text-sm">
                {["عرض سعر مجاني", "تأكيد فوري للموعد", "بدون أي التزام"].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-white/60" />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════════ 13. STICKY MOBILE CTA BAR */}
      {/* Visible on mobile only — optimized for Google Ads traffic */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        {/* Backdrop shadow */}
        <div className="bg-[#2d2d2d] border-t border-white/10 px-4 py-3 flex gap-3 shadow-[0_-4px_24px_rgba(0,0,0,0.35)]">
          <Button
            callBtn
            size="lg"
            className="flex-1 bg-[#c00000] hover:bg-[#a30000] text-white border-0 rounded-xl h-11 text-sm font-bold shadow-sm shadow-[#c00000]/40"
          >
            <Phone className="size-4" />
            اتصل الآن
          </Button>
          <Button
            wtBtn
            size="lg"
            variant="outline"
            className="flex-1 border-white/25 text-white hover:bg-white/10 hover:text-white hover:border-white/40 rounded-xl h-11 text-sm"
          >
            <MessageCircle className="size-4" />
            واتساب
          </Button>
        </div>
        {/* iPhone home indicator safe area */}
        <div className="bg-[#2d2d2d] h-safe-area-inset-bottom" />
      </div>
    </>
  );
}
