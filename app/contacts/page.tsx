'use server'

import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

import { ContactList } from '@/app/contacts/_components/contact-list'
import { getContacts } from '@/lib/actions/db/contacts'
import { getProfileByUserId } from '@/lib/actions/db/profiles'

export default async function ContactsPage() {
  const { userId } = await auth()

  if (!userId) {
    return redirect('/login')
  }

  const { data: profile } = await getProfileByUserId(userId)

  if (!profile) {
    return redirect('/signup')
  }

  const contacts = await getContacts(userId)

  return (
    <div className="w-full">
      <ContactList userId={userId} initialContacts={contacts.data ?? []} />
    </div>
  )
}
