'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronRight } from 'lucide-react'

interface HistoryItem {
  id: string
  grade: string
  quantity: string
  status: 'synced' | 'unsynced'
  timestamp: string
  image: string
}

interface HistoryPageProps {
  onSelectItem: (item: HistoryItem) => void
}

export default function HistoryPage({ onSelectItem }: HistoryPageProps) {
  const [items] = useState<HistoryItem[]>([
    {
      id: '1',
      grade: 'A',
      quantity: '24.5 kg',
      status: 'unsynced',
      timestamp: '2 hours ago',
      image: '/palm-oil-bunch.jpg',
    },
    {
      id: '2',
      grade: 'B+',
      quantity: '22.3 kg',
      status: 'synced',
      timestamp: '4 hours ago',
      image: '/palm-oil-bunch.jpg',
    },
    {
      id: '3',
      grade: 'A',
      quantity: '26.1 kg',
      status: 'unsynced',
      timestamp: '1 day ago',
      image: '/palm-oil-bunch.jpg',
    },
    {
      id: '4',
      grade: 'B',
      quantity: '20.8 kg',
      status: 'synced',
      timestamp: '2 days ago',
      image: '/palm-oil-bunch.jpg',
    },
  ])

  return (
    <div className="flex-1 flex flex-col p-4 pb-24 gap-4">
      {/* Header */}
      <div className="pt-2">
        <h1 className="text-xl font-bold">Local History</h1>
        <p className="text-sm text-muted-foreground">Recorded measurements</p>
      </div>

      {/* History Items */}
      <div className="space-y-3">
        {items.map((item) => (
          <Card
            key={item.id}
            className="cursor-pointer hover:bg-muted/50 transition-colors"
            onClick={() => onSelectItem(item)}
          >
            <CardContent className="p-3 flex gap-3 items-center">
              {/* Thumbnail */}
              <img
                src={item.image || "/placeholder.svg"}
                alt="Thumbnail"
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />

              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold text-primary">Grade {item.grade}</span>
                  <Badge
                    variant={item.status === 'synced' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {item.status === 'synced' ? 'Synced' : 'Unsynced'}
                  </Badge>
                </div>
                <p className="text-sm font-semibold">{item.quantity}</p>
                <p className="text-xs text-muted-foreground">{item.timestamp}</p>
              </div>

              {/* Arrow */}
              <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
