'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { User, LogOut, Trash2 } from 'lucide-react'

interface ProfilePageProps {
  onLogout: () => void
}

export default function ProfilePage({ onLogout }: ProfilePageProps) {
  const mockUser = {
    name: 'John Operator',
    phone: '+1 (555) 123-4567',
    userId: 'OP-2024-0156',
    lastSync: '2 hours ago',
  }

  return (
    <div className="flex-1 flex flex-col p-4 pb-24 gap-4">
      {/* Header */}
      <div className="pt-2">
        <h1 className="text-xl font-bold">Profile</h1>
        <p className="text-sm text-muted-foreground">Operator information</p>
      </div>

      {/* User Info Card */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-primary-foreground p-3 rounded-lg">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold">{mockUser.name}</h2>
              <p className="text-xs text-muted-foreground">{mockUser.phone}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 border-t border-border pt-3">
          <div>
            <label className="text-xs text-muted-foreground font-medium">User ID</label>
            <p className="text-sm font-mono">{mockUser.userId}</p>
          </div>
          <div>
            <label className="text-xs text-muted-foreground font-medium">Last Sync</label>
            <p className="text-sm">{mockUser.lastSync}</p>
          </div>
        </CardContent>
      </Card>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          size="lg"
          variant="outline"
          className="w-full h-12"
          onClick={() => alert('Clear local data - not implemented for demo')}
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Clear Local Data
        </Button>

        <Button
          size="lg"
          variant="destructive"
          className="w-full h-12 bg-destructive hover:bg-destructive/90"
          onClick={onLogout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  )
}
