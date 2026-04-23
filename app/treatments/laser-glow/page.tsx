import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { serviceLookup } from "@/lib/services";

export default function LaserGlowPage() {
  return <ServiceDetailPage service={serviceLookup["laser-glow"]} />;
}
