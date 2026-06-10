import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import PageContainer from "@/components/common/page-container";
import PageHeader from "@/components/common/page-header";
import EducationCard from "@/components/education/education-card";
import { educations } from "@/config/education";
import { pagesConfig } from "@/config/pages";

export default function EducationPage() {
  return (
    <PageContainer title="Education" description="My academic journey.">
      <PageHeader
        title={pagesConfig.education.title}
        description={pagesConfig.education.description}
      />
      <div className="space-y-4">
        {educations.map((education, index) => (
          <AnimatedSection
            key={education.id}
            delay={0.1 * (index + 1)}
            direction="up"
          >
            <EducationCard education={education} />
          </AnimatedSection>
        ))}
      </div>
    </PageContainer>
  );
}