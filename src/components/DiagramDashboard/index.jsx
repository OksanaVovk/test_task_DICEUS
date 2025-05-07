import {
  DiagramLargeBox,
  Diagram,
  GradientBox,
  Text,
  TextPercent,
} from "./DiagramDashboardStyled";

export const DiagramDashboard = ({
  current = "",
  total = "",
  width,
  height,
  progress,
}) => {
  return (
    <DiagramLargeBox>
      <Diagram width={width} height={height}>
        <GradientBox percent={progress}>
          <Text>{current}</Text>
        </GradientBox>
        <TextPercent percent={progress}>{progress}%</TextPercent>
      </Diagram>
      <Text>{total}</Text>
    </DiagramLargeBox>
  );
};

// import { useEffect, useState } from 'react';

// export default function GradientBar({ percent }) {
//   const [animatedPercent, setAnimatedPercent] = useState(0);

//   useEffect(() => {
//     // Запускаємо анімацію після першого рендеру
//     const timeout = setTimeout(() => {
//       setAnimatedPercent(percent);
//     }, 100); // невелика затримка для запуску анімації

//     return () => clearTimeout(timeout);
//   }, [percent]);

//   return (
//     <div
//       style={{
//         width: '100%',
//         height: '30px',
//         backgroundColor: '#e5e7eb',
//         borderRadius: '8px',
//         overflow: 'hidden',
//       }}
//     >
//       <div
//         style={{
//           width: `${animatedPercent}%`,
//           height: '100%',
//           background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
//           transition: 'width 1s ease-in-out',
//         }}
//       />
//     </div>
//   );
// }
