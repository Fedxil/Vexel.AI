import { useState } from "react";
import { PricingHeaderSection } from "../components/pricing/PricingHeaderSection";
import { PricingTableSection } from "../components/pricing/PricingTableSection";
import { StudentBannerSection } from "../components/pricing/StudentBannerSection";

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("annual");

  return (
    <main>
      <PricingHeaderSection
        billingCycle={billingCycle}
        onChangeCycle={setBillingCycle}
      />
      <PricingTableSection billingCycle={billingCycle} />
      <StudentBannerSection />
    </main>
  );
}
