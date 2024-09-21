import React from "react";
import { Container } from "react-bootstrap";

export default function Basket({ cart, total }) {
  return (
    <Container className="justify-content-center">
      <h1>Корзина</h1>
      {cart.length === 0 ? (
        <p>Корзина пуста.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price} тг.
              </li>
            ))}
          </ul>
          <p>Итого: {total} тг.</p>
        </>
      )}
    </Container>
  );
}
