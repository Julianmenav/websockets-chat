import React from "react";

export default function RoomCard({ fn, room }) {
  return (
    <div className="bg-[#45daad] bg-opacity-50 hover:bg-opacity-40 active:bg-opacity-20  sm:w-32 md:w-40 h-24 cursor-pointer rounded-xl p-2" onClick={fn}>
      <span className="text-xl md:text-4xl font-bold opacity-60">{room}</span>
    </div>
  );
}
