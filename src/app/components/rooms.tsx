// "use client"

// import { Card } from "@nextui-org/react";
// import { Room } from "../types/Room";

// async function getRoom() {
//   const result = await fetch(`http://127.0.1/api/rooms`);
//   if (!result.ok) {
//     throw new Error("Failed to fetch rooms");
//   }

//   const data = await result.json();
//   return data.rooms as Room[];
// }

// export default async function Rooms() {
//     const rooms = await getRoom();
//   return (
//     <div>
// <li>
//       {/* {rooms.map((room) => (
//                 <Card>
//                 <Card.Body>
//                   <Text  key={room.id} room={room}></Text>
//                 </Card.Body>
//               </Card>
//         <ArticleCard /> */}
//       ))}
// </li>
// </div>
//   );
// }
