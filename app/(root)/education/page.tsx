import PageContainer from "@/components/common/page-container";
import PageHeader from "@/components/common/page-header";
import { pagesConfig } from "@/config/pages";

export default function EducationPage() {
  return (
    <PageContainer title="Education" description="Mon parcours académique.">
      <PageHeader
        title={pagesConfig.education.title}
        description={pagesConfig.education.description}
      />
      <div>
        <p>Mon parcours académique.</p>
      </div>
    </PageContainer>
  );
}