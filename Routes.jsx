import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import GameSetupScreen from "pages/game-setup-screen";
import GameResultsScreen from "pages/game-results-screen";
import ActiveGameScreen from "pages/active-game-screen";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<GameSetupScreen />} />
        <Route path="/game-setup-screen" element={<GameSetupScreen />} />
        <Route path="/game-results-screen" element={<GameResultsScreen />} />
        <Route path="/active-game-screen" element={<ActiveGameScreen />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
