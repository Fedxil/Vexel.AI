import { ProductHeaderSection } from "../components/product/ProductHeaderSection";
import { ModelSeriesSection } from "../components/product/ModelSeriesSection";
import { ModelDemoSection } from "../components/product/ModelDemoSection";
import { IdeIntegrationSection } from "../components/product/IdeIntegrationSection";
import { SpecMatrixSection } from "../components/product/SpecMatrixSection";

export function ProductPage() {
  return (
    <main>
      <ProductHeaderSection />
      <ModelSeriesSection />
      <ModelDemoSection />
      <IdeIntegrationSection />
      <SpecMatrixSection />
    </main>
  );
}
