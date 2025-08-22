import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Users, Target, Briefcase, Globe, Clock, MessageCircle } from "lucide-react";
import careerCoachPortrait from "@/assets/career-coach-portrait.jpg";
import processSteps from "@/assets/process-steps.jpg";
import featuresShowcase from "@/assets/features-showcase.jpg";

const CareerService = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-10"></div>
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-primary ring-4 ring-primary/20">
                <img 
                  src={careerCoachPortrait} 
                  alt="Career Coach" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary rounded-full p-3 shadow-accent">
                <CheckCircle className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <Badge className="mb-4 gradient-secondary text-white border-0">
                Professional Career Coaching
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Transform Your Career Journey
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Expert guidance to land your dream job abroad. From CV crafting to interview preparation, 
                we provide comprehensive career coaching tailored to your unique goals.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>International Opportunities</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5 text-accent" />
                  <span>Personalized Coaching</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Discover If Our Program Is Right For You</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our service is available to anyone with experience in any field. The basic requirement 
              is having proof of at least 6 months of work experience in your field.
            </p>
          </div>
          
          <Card className="gradient-card shadow-card border-0 p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">You Can Benefit If You Have:</h3>
                <ul className="space-y-4">
                  {[
                    "At least 6 months of work experience",
                    "Professional certificates or training courses",
                    "Relevant diplomas or qualifications",
                    "Language proficiency in your target country",
                    "Genuine motivation to work abroad"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="gradient-secondary p-6 rounded-lg text-white">
                <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                <p className="text-white/90 mb-6">
                  We help you find work in any country you desire, provided you have the language skills 
                  and professional background required.
                </p>
                <Button variant="secondary" className="w-full">
                  Check Your Eligibility
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Audience Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Which Type Are You?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every day, we receive messages from people who dream of working abroad. 
              But the truth is, not everyone is ready. There are two types of people:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Type 1 - Dreamers */}
            <Card className="p-8 border-2 border-destructive/20 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-destructive">The Dreamer</h3>
                <p className="text-muted-foreground">Loves to dream but isn't ready to move</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Still living in the local job market mindset",
                  "Lacks confidence in their abilities",
                  "Afraid of the unknown and change",
                  "Doesn't understand the value of investing in their future",
                  "Fear of working abroad kills their courage"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-sm text-destructive font-medium text-center">
                Result: Years pass by, opportunities disappear...
              </p>
            </Card>

            {/* Type 2 - Action Takers */}
            <Card className="p-8 border-2 border-primary/20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 shadow-primary">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">The Action Taker</h3>
                <p className="text-muted-foreground">Knows their worth and builds their life</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Has real experience in a specific field with certificates",
                  "Seeks personal guidance step by step",
                  "Masters French or English or is developing language skills",
                  "Doesn't buy illusions or false promises",
                  "Wants real experience with recruitment experts",
                  "Understands that investing in their future is the cheapest decision"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="gradient-primary p-4 rounded-lg text-center">
                <p className="text-white font-medium">
                  If you're the second type, welcome to our career service! 👋
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="gradient-card shadow-accent border-0 p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Ready to Take Action?</h3>
              <p className="text-muted-foreground mb-6">
                We accompany you every step of the way professionally, from writing your CV 
                to applying for jobs, to preparing for interviews.
              </p>
              <p className="text-lg font-semibold text-primary mb-6">
                🎯 Your future isn't built on luck... it's built on decisions.
              </p>
              <Button size="lg" className="gradient-primary border-0 text-white shadow-primary">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Steps to Join Our Program</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A simple, structured process to get you started on your international career journey
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
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
                  <h3 className="text-xl font-semibold mb-3">Submit Application</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Fill out our comprehensive form and provide all necessary documents. 
                    After payment completion, we'll send you a detailed form via WhatsApp 
                    to gather your work certificates and required papers.
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
                  <h3 className="text-xl font-semibold mb-3">Verification & Follow-up</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    After receiving your documents and information, we'll contact you by phone 
                    to understand your complete needs and hear your full story to prepare 
                    a job search plan perfectly tailored to your requirements.
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
                  <h3 className="text-xl font-semibold mb-3">Official Launch</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Get access to our platform to track your job search progress, download your CV, 
                    access your professional email, and see daily updates on job applications 
                    throughout the entire 3-month working period.
                  </p>
                </div>
              </Card>
            </div>

            <div className="mt-12">
              <img 
                src={processSteps} 
                alt="Process workflow" 
                className="w-full max-w-4xl mx-auto rounded-lg shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Features Included in Your Package</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to succeed in your international job search
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {[
              {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Professional CV",
                description: "Expertly crafted resume tailored to international standards"
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Professional Email",
                description: "Dedicated business email address for applications"
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Job Applications",
                description: "Daily job applications on your behalf for 3 months"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Progress Tracking",
                description: "Real-time dashboard to monitor your application status"
              }
            ].map((feature, index) => (
              <Card key={index} className="gradient-card shadow-card border-0 p-6 text-center transition-smooth hover:shadow-accent hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <img 
              src={featuresShowcase} 
              alt="Features showcase" 
              className="w-full rounded-lg shadow-accent"
            />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">We Share Real Results With You</h2>
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl text-yellow-400">⭐</span>
              ))}
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. See the success stories of our clients 
              who landed their dream jobs abroad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah M.",
                role: "Software Engineer",
                country: "Germany",
                testimonial: "Got my dream job in Berlin within 2 months! The process was smooth and professional."
              },
              {
                name: "Ahmed K.",
                role: "Marketing Manager",
                country: "Canada", 
                testimonial: "Excellent service! They helped me navigate the Canadian job market successfully."
              },
              {
                name: "Fatima L.",
                role: "Nurse",
                country: "France",
                testimonial: "Professional coaching that actually works. Now working in Paris as I always dreamed!"
              },
              {
                name: "Omar B.",
                role: "Data Analyst",
                country: "UAE",
                testimonial: "The team's expertise in international recruitment is unmatched. Highly recommended!"
              },
              {
                name: "Leila R.",
                role: "Teacher",
                country: "Belgium",
                testimonial: "From CV writing to interview prep, they covered everything. Got multiple offers!"
              },
              {
                name: "Youssef H.",
                role: "Engineer",
                country: "Netherlands",
                testimonial: "Professional service that delivers results. Working in Amsterdam now thanks to them!"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="gradient-card shadow-card border-0 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <Badge variant="secondary" className="text-xs">{testimonial.country}</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">"{testimonial.testimonial}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="gradient-primary border-0 p-12 text-center text-white shadow-accent max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-8 text-white/90">
              Get your free consultation today and take the first step towards your international career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Free Consultation
                <MessageCircle className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-6">
              🎯 Your future starts with a single decision. Make it today.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CareerService;