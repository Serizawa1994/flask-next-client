import { Room } from "@/app/types/Room";
import React from "react";

const Room = ({ params }: { params: { roomId: string } }) => {
  return (
    <div>
      <div>Room</div>
      <p>この部屋は{params.roomId}</p>
    </div>
  );
};

export default Room;
