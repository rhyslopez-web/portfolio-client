import React, { useRef, useEffect } from 'react';

const CanvasGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const columns = 8;
    const rows = 4;

    const cellWidth = canvasWidth / columns;
    const cellHeight = canvasHeight / rows;

    // Draw grid lines
    ctx.strokeStyle = '#2500ff'; // Color of the grid lines
    ctx.lineWidth = 1; // Thickness of the grid lines

    // Draw vertical lines
    for (let i = 1; i < columns; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cellWidth, 0);
      ctx.lineTo(i * cellWidth, canvasHeight);
      ctx.stroke();
    }

    // Draw horizontal lines
    for (let i = 1; i < rows; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * cellHeight);
      ctx.lineTo(canvasWidth, i * cellHeight);
      ctx.stroke();
    }
    
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={2560} // Set canvas width
      height={1440} // Set canvas height
      style={{ border: '2px solid #2500ff', width: '100%' }} // Optional: border for visibility
    />
  );
};

export default CanvasGrid;
