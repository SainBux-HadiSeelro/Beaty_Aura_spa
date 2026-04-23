import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { serviceLookup } from "@/lib/services";

export default function SkinRejuvenationPage() {
  return <ServiceDetailPage service={serviceLookup["skin-rejuvenation"]} />;
}
