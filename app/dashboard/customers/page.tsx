import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { Suspense } from 'react';
import { fetchFilteredCustomers } from '@/app/lib/data';
import Search from '@/app/ui/search';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
    }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
      </div>
      <Suspense>
        <CustomersTable customers={customers} />
      </Suspense>
    </div>
  );
}