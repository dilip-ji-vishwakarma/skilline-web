import {
  HeroSlider,
  OurVision,
  OurImpact,

  About,
  OurApproach,
  Stories,
  Policies,
  GuidingPrinciple,
  JoinUs,
  OurRoadmap,
  Ventures,
  Blog,
  Courses,
  Contact,
  HomeContactUs,
  AccordionPageTemplate,
  Empowering,
  CallAction,
  Testimonial,
  LearningPlatform,
  Course,
  Regionallanguages,
  OurStory,
  RoadMap,
  OurImpacts,
} from "@/components/home";
import { Pillars } from "@/components/home-v2";
import { HomePartnershipsLogos } from "@/components/home/HomePartnershipsLogos";
import { States } from "@/components/home/States";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <div className="pb-8 pt-10">
      <Regionallanguages />
      </div>
      <div className="pb-3">
      <OurImpacts />
      </div>

      <div className="md:pt-10 pt-3">
      <Course />
      </div>
      <div className="pt-[15px]">
      <GuidingPrinciple />
      </div>
     
      <div className="pt-[30px]">
      <Ventures />
      </div>
      <div className="pt-10">
      <Stories />
      </div>
      
      <HomePartnershipsLogos />
      <Testimonial />
      <div className="md:pt-0 pt-10">
      <Blog />
      </div>
      <div className="xl:hidden lg:hidden md:hidden block">
      <OurRoadmap />
      </div>
      <div className="xl:block lg:block md:block hidden">
    <RoadMap />
    </div>
      <HomeContactUs />
      <JoinUs />
      
      <AccordionPageTemplate />
    </main>
  );
}
