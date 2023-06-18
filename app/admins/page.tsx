import { headers } from 'next/headers';
import React from 'react'
import { http } from '../layout';
import { getProduct } from '@/lib/Fetch/Products';

export default async function Admin() {
  const headersList = headers();
  const domain = headersList.get("host");
  const admins = await getProduct(`${http}://${domain}/api/products`);
  return (
    <div>Admin</div>
  )
}
