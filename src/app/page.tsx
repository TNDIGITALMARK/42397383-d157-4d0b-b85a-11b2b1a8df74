import { Welcome } from '@/components/welcome'

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Welcome />
    </div>
  )
}