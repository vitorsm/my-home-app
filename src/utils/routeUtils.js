export const getLastRouteToSetParamsFromRoutesToReturn = (routesToReturn) => {
  let childrenRoute = routesToReturn[routesToReturn.length - 1];
  while (childrenRoute.state && childrenRoute.state.routes && childrenRoute.state.routes.length) {
    childrenRoute = childrenRoute.state.routes[childrenRoute.state.routes.length - 1];
  }

  if (!childrenRoute.params) {
    childrenRoute.params = {};
  }

  return childrenRoute;
};
