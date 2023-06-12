import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { useFetchTicketsData } from "./hooks/useFetchTicketsData";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Reservation } from "./pages/Reservation";

export const TicketsContext = React.createContext();

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/:number", element: <Reservation /> },
  ]);

  return routes;
}

export function App() {
  const { tickets } = useFetchTicketsData();

  function getTicketById(id) {
    return tickets.find((ticket) => ticket.id === id);
  }

  return (
    <TicketsContext.Provider value={{ tickets, getTicketById }}>
      <Router>
        <Header />
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </TicketsContext.Provider>
  );
}
