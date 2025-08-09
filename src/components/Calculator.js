import React, { useState } from "react";

export default function Calculator() {
  const [quantity, setQuantity] = useState(100);
  const [size, setSize] = useState("90x50");
  const [paper, setPaper] = useState("300");
  const [color, setColor] = useState("4+4");
  const [design, setDesign] = useState(false);
  const [delivery, setDelivery] = useState("none");

  // test costs
  const prices = {
    size: { "90x50": 0, "85x55": 100 },
    paper: { "300": 0, "350": 200 },
    color: { "4+4": 0, "4+0": -50 },
    design: 500,
    delivery: {
      none: 0,
      "North of the City": 200,
      "Center": 400,
      "South of the city": 600
    }
  };

  const basePricePer100 = 1000; // base cost
  const price =
    (basePricePer100 * (quantity / 100)) +
    prices.size[size] +
    prices.paper[paper] +
    prices.color[color] +
    (design ? prices.design : 0) +
    prices.delivery[delivery];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Order calculator</h2>

      <div>
        <label>Quantity (pcs): </label>
        <input
          type="number"
          min="100"
          step="100"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Size </label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="90x50">90x50 mm</option>
          <option value="85x55">85x55 mm</option>
        </select>
      </div>

      <div>
        <label>Paper density: </label>
        <select value={paper} onChange={(e) => setPaper(e.target.value)}>
          <option value="300">300 gr</option>
          <option value="350">350 gr</option>
        </select>
      </div>

      <div>
        <label>Color </label>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="4+4">4+4</option>
          <option value="4+0">4+0</option>
        </select>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={design}
            onChange={(e) => setDesign(e.target.checked)}
          />
          Need design
        </label>
      </div>

      <div>
        <label>Delivery </label>
        <select value={delivery} onChange={(e) => setDelivery(e.target.value)}>
          <option value="none">No delivery</option>
          <option value="North">North of the City</option>
          <option value="Center">Center</option>
          <option value="South">South of the City</option>
        </select>
      </div>

      <h3>Total: {price} C.U.</h3>
    </div>
  );
}