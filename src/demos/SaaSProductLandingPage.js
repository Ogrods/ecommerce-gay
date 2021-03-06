import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

// import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Hero from "components/hero/BackgroundAsImage.js";

import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/TwoColSingleFeatureWithStats2.js";
// import Features from "components/features/TwoColWithTwoFeaturesAndButtons.js";

import MainFeature from "components/features/TwoColWithButton.js";

import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";

import FeatureWithSteps from "components/features/TwoColWithSteps.js";

import Pricing from "components/pricing/ThreePlans.js";
// import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";

import Testimonial from "components/testimonials/TwoColumnWithImage.js";

import FAQ from "components/faqs/SingleCol.js";

import GetStarted from "components/cta/GetStartedLight";

import Footer from "components/footers/MiniCenteredFooter.js";

import heroScreenshotImageSrc from "images/wildcat-tutoring.png";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2b.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <MainFeature
        subheading={<Subheading>Quality Work</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      />
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            The last digital partner <HighlightedText>you'll ever need.</HighlightedText>
          </>
        }
      />
      <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      {/* <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            We Always Abide by Our <HighlightedText>Principles.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Affordable",
            description: "We promise to offer you the best rate we can - at par with the industry standard.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Professionalism",
            description: "We assure you that our templates are designed and created by professional designers.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
      /> */}
      {/* <Pricing
        subheading={<Subheading>Pricing</Subheading>}
        heading={
          <>
            Reasonable & Flexible <HighlightedText>Plans.</HighlightedText>
          </>
        }
        plans={[
          {
            name: "Personal",
            price: "$17.99",
            duration: "Monthly",
            mainFeature: "For Individuals",
            features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"]
          },
          {
            name: "Business",
            price: "$37.99",
            duration: "Monthly",
            mainFeature: "For Small Businesses",
            features: ["60 Templates", "15 Landing Pages", "22 Internal Pages", "Priority Assistance"],
            featured: true
          },
          {
            name: "Enterprise",
            price: "$57.99",
            duration: "Monthly",
            mainFeature: "For Large Companies",
            features: ["90 Templates", "27 Landing Pages", "37 Internal Pages", "Personal Assistance"]
          }
        ]}
      /> */}
      {/* <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Our Clients <HighlightedText>Love Us.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Amazing User Experience",
            quote:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            customerName: "Charlotte Hale",
            customerTitle: "Director, Delos Inc."
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Love the Developer Experience and Design Principles !",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, EventsNYC"
          }
        ]}
      /> */}
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "Will my site be fully customizable?",
            answer:
              "Yes, our team will go over all options during the construction of your storefront and provide you with the tools to continue to edit and grow your online business. Anything that is out of your reach is within ours!"
          },
          {
            question: "Do I need to have a store on my site?",
            answer:
              "Not at all! Your site can absolutely be designed to run as a promotional tool - our sites are simply built and designed with commerce in mind, from the ground up. If you want to sell merch, we can always add store and payment components to your site later!"
          },
          {
            question: "What platforms are available to me?",
            answer:
              "We utilize a variety of industry standard platforms and vendors including Shopify, Wordpress, WooCommerce, Square, SalesForce, and many more. The choice is yours when it comes to the best fit for your business."
          },
          {
            question: "What kind of payment methods do you accept?",
            answer:
              "Based on the platform your site is built on, you will have access to up to 100 different credit card payment providers, with both direct and external payment options."
          },
          {
            question: "Can I use my existing site or domain?",
            answer:
              "Absolutely! Your site can be outfitted with new payment gateways, or we can rebuild it with you on a modernized platform. We make sure your digital brand voice propagates loud and clear throughout all digital engagements."
          },
          {
            question: "Can I cancel my account at any time?",
            answer:
              "Yes. If you ever decide that Ecommerce.gay isn???t the best ecommerce solution for your business, simply cancel your account."
          }
        ]}
      />
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
  );
}
