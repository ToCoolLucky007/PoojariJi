import { serviceData } from '@/lib/all-service-paths-data';
import ServiceCategory from './ServiceCategoryClient';

export async function generateStaticParams() {
  return Object.keys(serviceData).map((category) => ({
    category,
  }));
}

export default function Page({ params }: { params: { category: string } }) {
  return <ServiceCategory category={params.category} />;
}
