export const PRODUCTION_ROUTES = {
  entrance: "/",
  country: "/karina",
  town: "/arouca-groove",
  cornerShop: "/arouca-groove/corner-shop-challenge",
} as const;

export const PRODUCTION_ROUTE_ORDER = [
  PRODUCTION_ROUTES.entrance,
  PRODUCTION_ROUTES.country,
  PRODUCTION_ROUTES.town,
  PRODUCTION_ROUTES.cornerShop,
] as const;
