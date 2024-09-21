import { Link, Switch, Route } from "wouter";
import { Container, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainPage, Basket, AboutPage } from "./pages";
import { useState } from "react";

export default function AppWouter() {
  const [cart, setCart] = useState([]); // Инициализация с пустым массивом
  const [total, setTotal] = useState(0);

  return (
    <>
      <header className="bg-dark py-3 sticky-top">
        <Container>
          <Stack
            direction="horizontal"
            gap={3}
            className="justify-content-between"
          >
            <ul className="list-unstyled d-flex gap-5 mb-0">
              <li>
                <Link to="/" className="text-decoration-none text-light">
                  Главная Страница
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-decoration-none text-light">
                  О нас
                </Link>
              </li>
            </ul>
            <ul className="list-unstyled mb-0">
              <li>
                <Link
                  to="/basket"
                  className="text-decoration-none text-light fs-3"
                >
                  🛒
                </Link>
              </li>
            </ul>
          </Stack>
        </Container>
      </header>
      <main>
        <Switch>
          <Route path="/">
            <MainPage cart={cart} setCart={setCart} setTotal={setTotal} />
          </Route>
          <Route path="/about" component={AboutPage} />
          <Route path="/basket">
            <Basket cart={cart} total={total} />
          </Route>
        </Switch>
      </main>
    </>
  );
}
