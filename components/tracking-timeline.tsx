"use client";

import { TrackingEvent } from "@prisma/client";
import { CheckCircle2, Circle, MapPin } from "lucide-react";

interface TrackingTimelineProps {
  events: TrackingEvent[];
}

export default function TrackingTimeline({ events }: TrackingTimelineProps) {
  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <div key={event.id} className="flex gap-4">
          {/* Timeline Icon */}
          <div className="flex flex-col items-center">
            {index === 0 ? (
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            ) : (
              <Circle className="w-8 h-8 text-gray-300" />
            )}
            {index !== events.length - 1 && (
              <div className="w-0.5 h-full bg-gray-200 mt-2" />
            )}
          </div>

          {/* Event Details */}
          <div className="flex-1 ">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>

                <h3 className="font-semibold ">Status</h3>
                <h3 className="text-sm text-gray-700">{event.status}</h3>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(event.timestamp).toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between">
              <p className="text-sm text-gray-700">{event.description}</p>
              <div>
                    <h3 className="font-semibold">Location</h3>
              <div className="text-sm  flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                {event.location}
              </div>
              </div>
              
</div>

              <div className="flex justify-between">

              {event.notes && (
                  <p className="text-sm text-gray-500 mt-2 italic">{event.notes}</p>
                )}
              
              {event.handledBy && (
                  <p className="text-sm text-gray-500 mt-2">
                  Handled by: {event.handledBy}
                </p>
              )}
            </div>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
}