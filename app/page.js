import React from "react"; //react core library hai..ham uska use kar rahe hai...
import Link from "next/link"; //nextjs ka link component enable krta hai client side navigation
//baiscally ham iska use karke bina reload krke page ko navigate kr sakte hai...
//iski perfomance achi hai normal anchor tag se.... 
//link basically client side navigation k liye use hota hai alag alag pages k bich 
//iska alternative ke anchhor tag hota hai..pr iska perfomance achi hai normal anchor tag se...



import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
//ye button aur card basically ui components hai..
//ye hamare components folder k ui k foler k andar hai..--- .jsx file me 
//ye basically shadcn ui se import kre hue hai..
//npx shadcn@latest add button
//npx shadcn@latest add card
//npx shadcn@latest add accordion
//npx shadcn@latest add image
//npx shadcn@latest add link
//npx shadcn@latest add button
///in these ways we have installed the components from shadcn ui..ye basically bane banahe components hote hai..


import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
//aur ab ye hai svg icons hai lucid react librabry se import kkre hai..
//normal icons hai ye..
// - ArrowRight: Used for navigation arrows
// - Trophy: Used for achievements/features
// - Target: Used for goals/targets
// - Sparkles: Used for special features
// - CheckCircle2: Used for completed items



import HeroSection from "@/components/hero";
//ab ye hai hero section..commponents wale folder me mene hero.jsx wali file banahi hai..to mene ye waha se import kara hai..


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
//ab ye hai accordion component..components wale folder me mene accordion.jsx wali file hai..to mene ye waha se import kara hai..
  //ye baiscally collapsable ui component hai..jaise toggle -- faq style toggle list hai isme...
  //basically iska use show aur hide karne k liye hota hai...
  // Accordion components for creating expandable/collapsible sections (used in FAQ).
// - Accordion: The main wrapper component
// - AccordionContent: The content that shows/hides
// - AccordionItem: Individual accordion section
// - AccordionTrigger: The clickable header that toggles the content


import Image from "next/image";
//ab ye hai image component..nextjs ka image component hai..
//ye basically image ko load karta hai..
//ye next js ka opitimized image component hai.. 
//lazy loading , responsive sizing aur image optimization ko automatically handle krta hai..


import { features } from "@/data/features";
// Data array containing user testimonials (author, role, company, quote, image)
// Used in the testimonials section


import { testimonial } from "@/data/testimonial";
// Data array containing frequently asked questions and answers
// Used in the FAQ accordion section

import { faqs } from "@/data/faqs";
// Data array containing frequently asked questions and answers
// Used in the FAQ accordion section


import { howItWorks } from "@/data/howItWorks";
// Data array containing how it works steps
// Used in the How It Works section


//ab ye charo basically custom js files banahi hai..usme data likha hai..to waha se data ko import kr rahe hai.....



export default function LandingPage() {
  return (
    <>
      <div className="grid-background"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Powerful Features for Your Career Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
  {features.map((feature, index) => (
    <Card
      key={index}
      className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl hover:shadow-lg hover:scale-105 hover:border-primary transition-all duration-300 ease-in-out"
    >
      <CardContent className="pt-6 pb-6 text-center flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-2">
          {feature.icon}
          <h3 className="text-xl font-bold text-white">{feature.title}</h3>
          <p className="text-sm text-gray-400">{feature.description}</p>
        </div>
      </CardContent>
    </Card>
  ))}
</div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold hover:text-red-700">69+</h3>
              <p className="text-muted-foreground hover:text-pink-700">Industries Covered</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold hover:text-red-700">1000+</h3>
              <p className="text-muted-foreground hover:text-pink-700">Interview Questions</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold hover:text-red-700">96%</h3>
              <p className="text-muted-foreground hover:text-pink-700">Success Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold hover:text-red-700">24/7</h3>
              <p className="text-muted-foreground hover:text-pink-700">AI Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Four simple steps to accelerate your career growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-28 bg-muted/50">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-4xl font-extrabold text-center mb-14 tracking-tight text-foreground">
      What Our Users Say
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {testimonial.map((testimonial, index) => (
        <Card
          key={index}
          className="bg-background border border-border shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary/40 hover:ring-2 hover:ring-primary/30"
        >
          <CardContent className="p-6">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 relative">
                  <Image
                    width={56}
                    height={56}
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="rounded-full object-cover border-2 border-primary/30 shadow-sm"
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </div>

              <blockquote className="relative pl-6 text-muted-foreground italic leading-relaxed">
                <span className="absolute text-3xl text-primary left-0 top-0 -translate-y-1">
                  &ldquo;
                </span>
                {testimonial.quote}
                <span className="absolute text-3xl text-primary right-2 bottom-0 translate-y-3">
                  &rdquo;
                </span>
              </blockquote>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="w-full py-16 md:py-28 bg-background">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center max-w-2xl mx-auto mb-14">
      <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-foreground">
        Frequently Asked Questions
      </h2>
      <p className="text-muted-foreground text-lg">
        Find clear answers to the most common queries about our platform.
      </p>
    </div>

    <div className="max-w-2xl mx-auto">
      <Accordion type="single" collapsible className="space-y-5">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:bg-red-900 hover:shadow-md hover:ring-2 hover:ring-primary/30 hover:border-primary/40"
          >
            <AccordionTrigger className="text-left px-5 py-4 text-lg font-medium transition-colors duration-200 rounded-t-xl hover:bg-muted/20">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-5 py-4 text-muted-foreground text-base bg-muted/5 rounded-b-xl">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="w-full relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] opacity-90 z-0" />
  <div className="relative z-10 max-w-5xl mx-auto py-28 px-6 flex flex-col items-center justify-center text-center rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">

    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary-foreground drop-shadow-md">
      Ready to Accelerate Your Career?
    </h2>

    <p className="mt-4 max-w-xl text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
      Join thousands of ambitious professionals using AI-driven tools to unlock new career opportunities and elevate their growth.
    </p>

    <Link href="/dashboard" passHref>
      <Button
        size="lg"
        variant="secondary"
        className="mt-8 h-12 px-6 text-lg font-semibold rounded-full shadow-md transition-all duration-300 hover:shadow-primary/30 hover:ring-2 hover:ring-primary/40 group"
      >
        <span className="group-hover:translate-x-1 transition-transform duration-200 flex items-center">
          Start Your Journey Today
          <ArrowRight className="ml-2 h-5 w-5 group-hover:ml-3 transition-all" />
        </span>
      </Button>
    </Link>
  </div>
</section>

    </>
  );
}
