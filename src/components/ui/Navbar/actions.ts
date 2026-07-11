import { Heart, ShoppingBag, UserRound } from "lucide-react";

export const actions = [
  { id: 1, path: "/auth/sign-in", icon: UserRound, label: "Iniciar sesión" },
  { id: 2, path: "/favorites", icon: Heart, label: "Favoritos" },
  { id: 3, path: "/cart", icon: ShoppingBag, label: "Carrito" },
];