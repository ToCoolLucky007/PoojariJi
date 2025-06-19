import { serviceData } from '@/lib/all-service-paths-data';
import ServiceDetailClient from './ServiceDetailClient';

export async function generateStaticParams() {
  const params = [];

  for (const [categoryKey, categoryData] of Object.entries(serviceData)) {
    for (const subcategory of categoryData.subcategories) {
      params.push({
        category: categoryKey,
        subcategory: subcategory.id,
      });
    }
  }

  return params;
}

export default function Page({ params }: { params: { category: string; subcategory: string } }) {
  return <ServiceDetailClient category={params.category} subcategory={params.subcategory} />;
}
