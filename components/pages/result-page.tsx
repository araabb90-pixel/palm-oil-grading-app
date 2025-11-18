'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ResultPageProps {
  onSave: () => void
}

export default function ResultPage({ onSave }: ResultPageProps) {
  const mockResult = {
    grade: 'A',
    quantity: '24.5 kg',
    confidence: '94.2%',
    timestamp: new Date().toLocaleString(),
    image: '/palm-oil-bunch.jpg',
  }

  return (
    <div className="flex-1 flex flex-col p-4 pb-24 gap-4">
      {/* Header */}
      <div className="pt-2">
        <h1 className="text-xl font-bold">Grading Result</h1>
        <p className="text-sm text-muted-foreground">Auto-generated analysis</p>
      </div>

      {/* Image Preview */}
      <Card>
        <CardContent className="p-3">
          <img
            src={mockResult.image || "/placeholder.svg"}
            alt="Captured bunch"
            className="w-full rounded-lg object-cover h-48"
          />
        </CardContent>
      </Card>

      {/* Result Fields - Read Only */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold">Analysis Results</h2>
            <Badge variant="secondary" className="text-xs">Locked</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-xs text-muted-foreground font-medium">Grade</label>
            <div className="mt-1 p-3 bg-muted rounded-lg">
              <p className="text-lg font-bold text-primary">{mockResult.grade}</p>
            </div>
          </div>

          <div>
            <label className="text-xs text-muted-foreground font-medium">Quantity</label>
            <div className="mt-1 p-3 bg-muted rounded-lg">
              <p className="text-base font-semibold">{mockResult.quantity}</p>
            </div>
          </div>

          <div>
            <label className="text-xs text-muted-foreground font-medium">Confidence</label>
            <div className="mt-1 p-3 bg-muted rounded-lg">
              <p className="text-base font-semibold">{mockResult.confidence}</p>
            </div>
          </div>

          <div>
            <label className="text-xs text-muted-foreground font-medium">Timestamp</label>
            <div className="mt-1 p-3 bg-muted rounded-lg">
              <p className="text-xs">{mockResult.timestamp}</p>
            </div>
          </div>

          <div className="pt-2 border-t border-border">
            <p className="text-xs text-muted-foreground">
              ℹ️ Result is auto-generated and locked.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <Button
        size="lg"
        className="w-full bg-primary hover:bg-primary/90 h-12"
        onClick={onSave}
      >
        Save Offline
      </Button>
    </div>
  )
}
