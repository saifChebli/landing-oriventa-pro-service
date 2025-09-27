import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  Briefcase,
  Globe,
  Clock,
  MessageCircle,
  Power,
  Construction,
  ArrowUpRightFromCircle,
} from "lucide-react";
import careerCoachPortrait from "@/assets/career-coach-portrait.jpg";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import heroImage from "@/assets/hero-image.jpg";
import feature1 from "@/assets/feature-5.jpg";
import feature2 from "@/assets/feature-4.jpg";
import feature3 from "@/assets/feature-3.jpg";
import feature4 from "@/assets/feature-2.jpg";
import feature5 from "@/assets/feature-1.jpg";
import testimonial1 from "@/assets/testimontial-1.jpg";
import testimonial2 from "@/assets/testimontial-2.jpg";
import testimonial3 from "@/assets/testimontial-3.jpg";
import testimonial4 from "@/assets/testimontial-4.jpg";
import testimonial5 from "@/assets/testimontial-5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const CareerService = () => {


const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className=""
        style={{ backgroundImage: "url('hero-bg-scaled-1.jpg" }}
      >
        {/* <div className="absolute inset-0 gradient-primary opacity-10"></div> */}
        <div className="container flex items-center justify-center px-6 py-8 md:py-20">
          <div className="flex flex-row-reverse lg:flex-row-reverse items-center gap-4 md:gap-12">
            <div className="relative">
              <div className="w-24 h-24 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-primary ring-4 ring-accent">
                <img
                  src={careerCoachPortrait}
                  alt="Career Coach"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="mb-4 text-left  text-black border-0">
              <span className="text-md md:text-4xl font-extrabold text-primary mb-0 md:mb-4">
                Mariem Chammem
                <div className="absolute hidden md:block top-[6%] right-[30%] md:top-[30%] md:right-[44%] bg-primary rounded-full p-0.5 md:p-1 shadow-accent">
                  <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-primary-foreground" />
                </div>
              </span>
              <br />

              <span className="text-[13px] md:text-3xl  font-extrabold bg-gradient-to-r from-blue-500 to-[#C57DE9] inline-block text-transparent bg-clip-text ">
                Conseillere et expert en recherche d'emploi{" "}
              </span>
              <span className="text-[13px] md:text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-[#C57DE9] inline-block text-transparent bg-clip-text">
                Oriventa Pro Service Company
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="flex font-kufam flex-col items-center justify-center py-0 md:py-20 bg-muted/30">
        <div className="text-center flex flex-col gap-6 items-center px-6 ">
          <img width={500} className="rounded-lg" src={heroImage} alt="" />
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            نوفرولك خدمة شاملة ، دقيقة ومحترفة مبنية على خبرة فريق مختص فالبحث
            عن العمل بالخارج يعرف كل أسرار السوق العالمي ينصحك خطوة بخطوة مع
            تقديم مرافقة شخصية وتوجيهات مهنية
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Globe className="w-5 h-5 text-primary" />
              <span>خبرة فالبحث عن العمل بالخارج </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-accent" />
              <span>مرافقة ومتابعة شخصية </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Target className="w-5 h-5 text-primary" />
              <span>نتيجة مضمونة</span>
            </div>
          </div>
        </div>
      </section>
      {/* Discovery Section */}
      <section className="pt-10 md:py-20 bg-muted/30 font-kufam">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xl font-bold md:text-4xl mb-12  bg-gradient-to-r from-blue-500 to-[#C57DE9] inline-block text-transparent bg-clip-text">
              إكتشف إذا كان هذا البرنامج هو فرصتك الوحيدة{" "}
            </h2>
            <p className="text-md md:text-xl text-muted-foreground max-w-3xl mx-auto">
              نقدمولك على أي فرصة عمل في أي بلاد تختارها تناسب طموحاتك وتتماشى
              مع كفاءتك شرط تتوفر فيك اللغة (Stages , Diplomes , Certificats ,
              Attestations de Travail) بكل بساطة خدمتنا يستفيد منها أي شخص لديه
              خبرة في أي مجال . الشرط الأساسي هو إمتلاك خبرة مهنية لا تقل عن 6
              أشهر تثبت كفاءتك في مجال تخصصك
            </p>
          </div>
        </div>
      </section>

      {/* Audience Types Section */}
      <section className="pb-10 md:py-20 bg-muted/30 font-kufam">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bold text-xl md:text-4xl mb-12  bg-gradient-to-r from-blue-500 to-[#C57DE9] inline-block text-transparent bg-clip-text">
              شنوة الفرق بينك وبين غيرك ؟
            </h2>
            <p className="text-md md:text-xl text-muted-foreground max-w-3xl mx-auto">
              كل يوم نسمعو برشا يحلمو يخدمو في الخارج ... أما مش الكل ياخذ
              الخطوة . ثمة نوعين من الناس : ناس تستنى الفرصة ... وناس تخلق
              الفرصة
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Type 1 - Dreamers */}
            <Card className="p-8 border-2 border-destructive/20 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-destructive">
                  ناس تحب تحلم ... أما واقفة في بلاصتها
                </h3>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  "مازلت مربوطة بسوق العمل المحلي . تستنى في معجزة ، وهي عارفة انها قاعدة تضيع في وقتها ",
                  'كل مرة طيح من قيمتها وتوطي سقف طموحاتها وتقول : "ما نجمش" ، "مستويا عادي " ، "لازم برشة فلوس .."',
                  "الخوف من التغيير يكبلها ... والخوف من الغربة يخليها تتراجع قبل ما تبدأ ",
                  "تعرش قيمة الإستثمار في مستقبلها وتتردد باش تستغل فرص باش حياتها . والنتيجة ؟ السنوات تعدي ، والحلم يبقى حلم وفرصة ورى فرصة تضيع ",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Type 2 - Action Takers */}
            <Card className="p-8 border-2 border-primary/20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 shadow-primary">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  ناس تقدر قيمتها وتحب تبني مستقبلها{" "}
                </h3>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  "عندها خبرة، شهادات، و مهارات حقيقية تراها بعين كبيرة و تستحق حياة ماأكبر",
                  "تعرف إلي النجاح في الخارج يلزمو خطة واضحة مش وعود فارغة",
                  "تحسن في لغتها، وتفهم إنو الاستثمار في روحها هو أثمن قرار",
                  "ما تبعش أوهام، ما تشريش ورق مزوّرة، وما تضيعش فلوسها مع وسطاء",
                  "تحب فرصة حقيقية مع خبراء، مرافقة شخصية خطوة بخطوة، من أول سيرة ذاتية محترفة، للتقديم الصحيح، للتحضير للمقابلة.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="gradient-primary p-4 rounded-lg text-center">
                <p className="text-white font-medium">
                  إذا كنت من النوع الثاني... مرحباً بيك مع Oriventa Pro Service
                  Company 👌
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="gradient-card shadow-accent border-0 p-8 max-w-3xl mx-auto">
              <p className="text-muted-foreground mb-6">
                معانا تلقى دعم حقيقي، نعاونوك بكل جدية، نرافقوك بالخبرة، ونخليو
                مستقبلك يتبنى بالفعل... مش باللحظ. مانخليو حتى حاجة للصدفة، كل
                خطوة مدروسة وكل خطة محسوبة وكل فرصة تصنع بيها مستقبلك في أي بلاد
                تختارو، وكل نجاح نفتخرو بيه معاك.
              </p>
              <p className="text-lg font-semibold text-primary mb-6">
                🎯 قرار اليوم هو اللي يغير حياتك غدوة.{" "}
              </p>
                  <Button
                size="lg"
                className="gradient-primary border-0 text-white shadow-primary"
                onClick={() => scrollToSection("contact")}
              >
                احصل على إستشارة مجانية
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="pt-8 md:py-20 bg-muted/30 font-kufam">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bold text-xl md:text-4xl  bg-gradient-to-r from-blue-500 to-[#C57DE9] inline-block text-transparent bg-clip-text">
              خطواتك نحو المستقبل "ابدأ رحلتك معنا نحو النجاح"
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <Card className="gradient-card shadow-card border-0 p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div className="mb-6 pt-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {" "}
                    أرسل مستنداتك بكل سهولة
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    بعد إتمام الدفع في المكتب أو عبر حوالة بنكية، سنرسل لك على
                    الواتساب نموذج سهل لتعبئته ورفع كل شهاداتك وأوراقك. بمجرد
                    استلامنا لها، نبدأ مباشرة في تجهيز ملفك الشخصي للبحث عن عمل.
                  </p>
                </div>
              </Card>

              {/* Step 2 */}
              <Card className="gradient-card shadow-card border-0 p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-accent rounded-full text-white flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div className="mb-6 pt-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    متابعة دقيقة وشخصية
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    بعد استلام كل مستنداتك، سنتواصل معك هاتفياً لسماع كامل قصتك
                    واحتياجاتك. بهذه الطريقة، نضع لك خطة بحث عن عمل مصممة خصيصاً
                    لأهدافك، سواء كنت تريد العمل في فرنسا أو اصطحاب عائلتك معك.
                  </p>
                </div>
              </Card>

              {/* Step 3 */}
              <Card className="gradient-card shadow-card border-0 p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div className="mb-6 pt-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    البداية الرسمية والمتابعة اليومية
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    سنرسل لك رابط تسجيل الدخول في منصتنا، من خلاله: تتابع تقدم
                    ملفك لحظة بلحظة. تحمل سيرتك الذاتية الاحترافية. تستخدم
                    البريد الإلكتروني الاحترافي الذي سنوفره لك. وتشاهد عدد
                    التقديمات على الوظائف يوميًا خلال فترة عملنا (ثلاثة أشهر)
                    لضمان أفضل النتائج.
                  </p>
                </div>
              </Card>
              <Card className="gradient-card shadow-card border-0 p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-accent rounded-full text-white flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div className="mb-6 pt-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowUpRightFromCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    استمرارية الدعم والتقييم
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    خلال مدة البرنامج، سنكون معك في كل خطوة: نصائح، مراجعة،
                    تحفيز، ودعم شخصي لضمان أن تحقق أقصى استفادة وتصل لهدفك بأفضل
                    طريقة ممكنة.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-0 md:py-20 bg-muted/30 font-kufam">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bold text-xl md:text-4xl  bg-gradient-to-r from-blue-500 to-[#C57DE9] inline-block text-transparent bg-clip-text">
              ملفك الشخصي : إكتشف كل المزايا التي
              يحتويها ملفك
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full mx-auto mb-12">
            {[
              {
                image: feature1,
              },
              {
                image: feature2,
              },
              {
                image: feature3,
              },
              {
                image: feature4,
              },
              {
                image: feature5,
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="gradient-card shadow-card border-0 text-center transition-smooth hover:shadow-accent hover:-translate-y-1"
              >
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={feature.image}
                  alt=""
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-0 md:py-20 bg-muted/30 font-kufam">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="font-bold text-xl md:text-4xl  bg-gradient-to-r from-blue-500 to-[#C57DE9] inline-block text-transparent bg-clip-text">
              نشاركو معاكم نتائج حقيقية
            </h2>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl text-yellow-400">
                  ⭐
                </span>
              ))}
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper arrows h-full w-full "
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <div>
                <img
                  className="w-full h-full rounded-lg object-cover"
                  src={testimonial1}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={testimonial2}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={testimonial3}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={testimonial4}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={testimonial5}
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-10 md:py-20 bg-muted/30 font-kufam">
        <div className="container mx-auto px-6">
          <Card className="gradient-primary border-0 p-12 text-center text-white shadow-accent max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">
              إبدأ اليوم بإستشارتك المجانية وأخطو أول خطوة نحو مستقبل مهني عالمي
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                إستشارة مجانية
                <MessageCircle className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CareerService;
