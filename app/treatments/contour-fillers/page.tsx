import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { serviceLookup } from "@/lib/services";

export default function ContourFillersPage() {
  return <ServiceDetailPage service={serviceLookup["contour-fillers"]} />;
}
