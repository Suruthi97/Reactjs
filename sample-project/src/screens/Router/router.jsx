import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

const Lodge = React.lazy(() => import("../Lodge/lodge"));
const Confirm = React.lazy(() => import("../Confirm/confirm"));
const Submit = React.lazy(() => import("../Submit/submit"));

function Error() {
  return (
    <div className="error-message">
      <h2>There was an error</h2>
      <h3>Scottish Courts was unable to process your request</h3>
    </div>
  );
}

function RouterContainer() {
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <Router basename="/caveats">
        <Routes>
          <Route path="/">
          <Route index element={<Lodge />}/>
            <Route path="/court" element={<Lodge />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/success" element={<Submit />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </React.Suspense>
  );
}
export default RouterContainer;
