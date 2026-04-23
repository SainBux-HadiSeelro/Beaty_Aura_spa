import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { serviceLookup } from "@/lib/services";

export default function NaturalLiftPage() {
  return <ServiceDetailPage service={serviceLookup["natural-lift-hifu"]} />;
}
