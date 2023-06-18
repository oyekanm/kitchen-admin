import { headers } from 'next/headers';
import React from 'react'
import { http } from '../layout';
import { getProduct } from '@/lib/Fetch/Products';
import { Colors } from '../components/Color';
import { getAdmins } from '@/lib/Fetch/Admins';
import AdminList from './AdminList';

export default async function Admin() {
  const headersList = headers();
  const domain = headersList.get("host");
  const admins = await getAdmins(`${http}://${domain}/api/user`);
  return (
    <>
    <AdminList admins={admins}/>
    </>
  )
}
