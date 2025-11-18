'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft } from 'lucide-react'

interface HistoryItem {
  id: string
  grade: string
  quantity: string
  status: 'synced' | 'unsynced'
  timestamp: string
  image: string
}

interface HistoryDetailPageProps {
  item: HistoryItem | null
  onBack: () => void
}

export default function HistoryDetailPage({
  item,
  onBack,
}: HistoryDetailPageProps) {
  if (!item) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p>No item selected</p>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col p-4 pb-24 gap-4">
      {/* Header */}
      <div className="flex items-center gap-2 pt-2">
        <button
          onClick={onBack}
          className="p-1 hover:bg-muted rounded-lg transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-xl font-bold">Record Details</h1>
          <p className="text-sm text-muted-foreground">View full measurement</p>
        </div>
      </div>

      {/* Image */}
      <Card>
        <CardContent className="p-3">
          <img
            src={item.image || "/placeholder.svg"}
            alt="Recorded bunch"
            className="w-full rounded-lg object-cover h-64"
          />
        </CardContent>
      </Card>

      {/* Details - Read Only */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold">Measurement Data</h2>
            <Badge variant={item.status === 'synced' ? 'default' : 'secondary'}>
              {item.status === 'synced' ? 'Synced' : 'Unsynced'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-xs text-muted-foreground font-medium">Grade</label>
            <div className="mt-1 p-3 bg-muted rounded-lg">
              <p className="text-lg font-bold text-primary">{item.grade}</p>
            </div>
          </div>

          <div>
            <label className="text-xs text-muted-foreground font-medium">Quantity</label>
            <div className="mt-1 p-3 bg-muted rounded-lg">
              <p className="text-base font-semibold">{item.quantity}</p>
            </div>
          </div>

          <div>
            <label className="text-xs text-muted-foreground font-medium">Recorded</label>
            <div className="mt-1 p-3 bg-muted rounded-lg">
              <p className="text-xs">{item.timestamp}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Retry Sync Button */}
      {item.status === 'unsynced' && (
        <Button
          size="lg"
          variant="outline"
          className="w-full h-12"
        >
          Retry Sync
        </Button>
      )}
    </div>
  )
}
