'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Camera } from 'lucide-react'

interface CapturePageProps {
  onCapture: () => void
}

export default function CapturePage({ onCapture }: CapturePageProps) {
  return (
    <div className="flex-1 flex flex-col p-4 pb-24">
      <div className="flex-1 flex flex-col gap-4">
        {/* Header */}
        <div className="pt-2">
          <h1 className="text-xl font-bold">Capture Bunch</h1>
          <p className="text-sm text-muted-foreground">Take a photo of the palm oil bunch</p>
        </div>

        {/* Camera Placeholder */}
        <div className="flex-1 flex flex-col gap-4">
          <Card className="flex-1 flex items-center justify-center bg-muted border-2 border-dashed border-muted-foreground/30">
            <CardContent className="flex flex-col items-center justify-center text-center">
              <Camera className="w-12 h-12 text-muted-foreground mb-3" />
              <p className="text-sm font-medium text-muted-foreground">Camera Preview</p>
              <p className="text-xs text-muted-foreground mt-1">Position the bunch in frame</p>
            </CardContent>
          </Card>

          {/* Note */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
            <p className="text-xs text-accent-foreground">
              ✓ AI will analyze the captured image automatically.
            </p>
          </div>
        </div>

        {/* Take Photo Button */}
        <Button
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 h-12"
          onClick={onCapture}
        >
          Take Photo
        </Button>
      </div>
    </div>
  )
}
